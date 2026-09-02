/**
 * Server-side LLM provider abstraction (OpenAI-compatible chat completions,
 * using native fetch — no extra dependencies).
 *
 * Config via server-only environment variables:
 *   AI_LLM_API_KEY   — required to call a real LLM
 *   AI_LLM_BASE_URL  — default https://api.openai.com/v1
 *   AI_LLM_MODEL     — default gpt-4o-mini
 *
 * The key is only ever read on the server and never exported to the client.
 */

export function isLlmConfigured(): boolean {
  return Boolean(process.env.AI_LLM_API_KEY);
}

export type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

/**
 * Streams a chat-completion response. Returns an async iterable of text
 * chunks (OpenAI SSE format). Throws on provider error.
 */
export async function* streamChatCompletion(
  messages: ChatMessage[],
  signal?: AbortSignal
): AsyncGenerator<string> {
  const apiKey = process.env.AI_LLM_API_KEY;
  const baseUrl = (process.env.AI_LLM_BASE_URL ?? "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.AI_LLM_MODEL ?? "gpt-4o-mini";

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    signal,
    body: JSON.stringify({
      model,
      messages,
      stream: true,
      temperature: 0.6,
      max_tokens: 900,
    }),
  });

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      throw new Error("unauthorized");
    }
    if (res.status === 429) {
      throw new Error("rate_limited");
    }
    throw new Error(`provider_error:${res.status}`);
  }

  if (!res.body) {
    throw new Error("no_body");
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let idx: number;
      while ((idx = buffer.indexOf("\n")) >= 0) {
        const line = buffer.slice(0, idx).trim();
        buffer = buffer.slice(idx + 1);
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (typeof delta === "string" && delta.length > 0) {
            yield delta;
          }
        } catch {
          // ignore malformed SSE chunk
        }
      }
    }
  } finally {
    try {
      reader.releaseLock();
    } catch {
      // ignore
    }
  }
}

/**
 * Non-streaming convenience wrapper. Returns the full text.
 */
export async function chatCompletion(messages: ChatMessage[], signal?: AbortSignal): Promise<string> {
  let out = "";
  for await (const chunk of streamChatCompletion(messages, signal)) {
    out += chunk;
  }
  return out;
}