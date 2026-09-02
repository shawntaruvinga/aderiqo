import {
  buildSystemPrompt,
  detectsInjection,
  REFUSAL_MESSAGE,
  retrieveKnowledge,
  selectGuidance,
} from "./knowledge";
import { normalizeQuery, detectLanguage } from "./language/normalize";
import { isLlmConfigured, streamChatCompletion, type ChatMessage } from "./provider";

export const FIASCO =
  "I couldn't reach Aderiqo AI right now. Your conversation is still here — please try again.";
export const TIMEOUT_MSG =
  "Aderiqo AI took too long to respond. Nothing was changed. Please try again.";
export const CONNECTION_MSG =
  "Connection interrupted. Your message wasn't completed. Please try again.";

/**
 * Builds a knowledge-grounded prompt for a visitor conversation.
 * `history` is trimmed to the most recent turns for context + follow-ups.
 */
function buildMessages(question: string, history: { role: "user" | "assistant"; content: string }[]): ChatMessage[] {
  const normalized = normalizeQuery(question);
  const system = buildSystemPrompt(normalized);
  const messages: ChatMessage[] = [{ role: "system", content: system }];
  const recent = history.slice(-8);
  for (const m of recent) {
    messages.push({ role: m.role, content: m.content });
  }
  messages.push({ role: "user", content: question });
  return messages;
}

/** Fallback path used only when no LLM key is configured. Uses the verified knowledge source. */
export function fallbackAnswer(question: string, history: { role: "user" | "assistant"; content: string }[]): string {
  const normalized = normalizeQuery(question);
  const context = retrieveKnowledge(normalized, 4);
  const guidance = selectGuidance(normalized);
  const topics = context
    .split("\n\n")
    .map((blk) => blk.replace(/^## [^\n]+\n/, "").trim())
    .filter(Boolean);

  const langResult = detectLanguage(question);
  const isSpanish = langResult.language === "es";
  const isFrench = langResult.language === "fr";

  const header = isSpanish
    ? "Esto es lo que Aderiqo ofrece para eso:"
    : isFrench
      ? "Voici ce qu'Aderiqo propose pour cela :"
      : "Here's what Aderiqo offers for that:";

  const demoLine = isSpanish
    ? "Si Aderiqo parece adecuado, puedes [reservar una demostración guiada](/demo) o [hablar con nuestro equipo](/contact) para tener un plan adaptado a tu negocio."
    : isFrench
      ? "Si Aderiqo semble adapté, vous pouvez [réserver une démo guidée](/demo) ou [parler à notre équipe](/contact) pour obtenir un plan adapté à votre entreprise."
      : "If Aderiqo sounds like a fit, you can [book a guided demo](/demo) or [talk to our team](/contact) to have a plan shaped for your business.";

  const footer = isSpanish
    ? "(Nota: el asistente de IA en vivo no está conectado ahora mismo, así que esta es una respuesta en el sitio de nuestra información de producto verificada.)"
    : isFrench
      ? "(Remarque : l'assistant IA en direct n'est pas connecté pour le moment, donc ceci est une réponse sur site à partir de nos informations produit vérifiées.)"
      : "(Note: the live AI assistant isn't connected right now, so this is an on-site answer from our verified product info.)";

  if (topics.length > 0) {
    const lines = [header];
    for (const t of topics) {
      for (const line of t.split("\n").map((l) => l.trim())) {
        if (line) lines.push(`- ${line.replace(/^- /, "")}`);
      }
    }
    if (guidance.length > 0) {
      lines.push("");
      lines.push(...guidance);
    }
    const wantsIntent = /demo|pricing|cost|get started|fit|buy|demostración|precio|planes|démo|prix|commencer/.test(normalized.toLowerCase());
    if (wantsIntent) {
      lines.push("", demoLine);
    }
    lines.push("", footer);
    return lines.join("\n");
  }

  const noInfo = isSpanish
    ? "No tengo información verificada sobre eso. Si lo deseas, puedo ayudarte con qué es Aderiqo, para quién es, qué puede hacer Aderiqo AI o cómo reservar una demostración."
    : isFrench
      ? "Je n'ai pas d'informations vérifiées à ce sujet. Si vous le souhaitez, je peux vous aider à comprendre ce qu'est Aderiqo, pour qui il est, ce que peut faire Aderiqo AI ou comment réserver une démo."
      : "I don't have verified information about that. If you'd like, I can help with what Aderiqo is, who it's for, what Aderiqo AI can do, or how to book a demo.";

  return noInfo;
}

export class AiError extends Error {}

/**
 * Runs the public AI conversation turn.
 * Returns a ReadableStream of text chunks, or a plain string when the LLM
 * is not configured (degraded path). Translation of provider failures into
 * user-safe messages happens here — never leak internals.
 */
export async function runAiTurn(
  question: string,
  history: { role: "user" | "assistant"; content: string }[],
  signal?: AbortSignal
): Promise<ReadableStream<string> | string> {
  if (detectsInjection(question)) {
    return REFUSAL_MESSAGE;
  }
  if (!isLlmConfigured()) {
    return fallbackAnswer(question, history);
  }

  const messages = buildMessages(question, history);

  try {
    const stream = await createStream(messages, signal);
    return stream;
  } catch (err) {
    const name = err instanceof Error ? err.message : "unknown";
    if (name === "AbortError") throw err; // caller handles stop
    if (name === "rate_limited") throw new AiError("rate_limited");
    if (name === "unauthorized") throw new AiError("unauthorized");
    throw new AiError("provider");
  }
}

async function createStream(messages: ChatMessage[], signal?: AbortSignal): Promise<ReadableStream<string>> {
  const iterator = streamChatCompletion(messages, signal);
  return new ReadableStream<string>({
    async pull(controller) {
      try {
        const { value, done } = await iterator.next();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (err) {
        const name = err instanceof Error ? err.message : "unknown";
        controller.error(name === "AbortError" ? err : err);
      }
    },
    cancel() {
      iterator.return?.(undefined);
    },
  });
}