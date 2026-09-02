import { runAiTurn, AiError } from "@/lib/ai/chat";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_MESSAGE = 2000; // chars
const MAX_HISTORY = 20; // stored-client turns forwarded
const MAX_BODY_BYTES = 200_000;

type Turn = { role: "user" | "assistant"; content: string };

// --- Minimal in-memory rate limiter (per IP) ------------------------------
const windowMs = 60_000;
const maxPerWindow = 40;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (arr.length >= maxPerWindow) {
    hits.set(ip, arr);
    return true;
  }
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd ? fwd.split(",")[0].trim() : "unknown";
}

export async function POST(req: Request): Promise<Response> {
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return Response.json({ error: "too_many" }, { status: 429 });
  }

  const rawLen = Number(req.headers.get("content-length") ?? "0");
  if (rawLen > MAX_BODY_BYTES) {
    return Response.json({ error: "too_large" }, { status: 413 });
  }

  let payload: { message?: unknown; history?: unknown };
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (message.length === 0) {
    return Response.json({ error: "empty" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE) {
    return Response.json({ error: "too_long" }, { status: 413 });
  }

  const history: Turn[] = Array.isArray(payload.history)
    ? (payload.history as Turn[])
        .filter((t) => t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string")
        .slice(-MAX_HISTORY)
    : [];

  const encoder = new TextEncoder();
  let controller: ReadableStreamDefaultController<Uint8Array>;

  const stream = new ReadableStream({
    start(c) {
      controller = c;
    },
  });

  // Run the turn (analyze + stream) in the background; forward chunks to the stream.
  runAiTurn(message, history)
    .then((result) => {
      if (typeof result === "string") {
        controller.enqueue(encoder.encode(JSON.stringify({ done: true, text: result })));
        controller.close();
        return;
      }
      const reader = result.getReader();
      const push = async () => {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          controller.enqueue(encoder.encode(JSON.stringify({ delta: value })));
        }
        controller.enqueue(encoder.encode(JSON.stringify({ done: true })));
        controller.close();
      };
      push().catch((err) => {
        controller.error(err);
        controller.close();
      });
    })
    .catch((err) => {
      controller.enqueue(
        encoder.encode(
          JSON.stringify({ error: mapError(err) })
        )
      );
      controller.close();
    });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}

function mapError(err: unknown): string {
  if (err instanceof AiError) {
    switch (err.message) {
      case "rate_limited":
        return "rate_limited";
      case "unauthorized":
      case "provider":
      default:
        return "unavailable";
    }
  }
  return "unavailable";
}