"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

export type AvatarState = "idle" | "listening" | "thinking" | "responding" | "success";

type Role = "user" | "assistant";
type Msg = { id: string; role: Role; content: string; state: "done" | "streaming" | "error" };

const SUGGESTIONS = [
  "What is Aderiqo?",
  "How can Aderiqo help my sales team?",
  "What can Aderiqo AI do?",
  "How does Aderiqo manage customer relationships?",
  "Can Aderiqo replace spreadsheet-based deal tracking?",
  "How can I book a demo?",
];

let counter = 0;
const id = () => `m${Date.now()}_${counter++}`;

const FR_A = "I couldn't reach Aderiqo AI right now. Your conversation is still here — please try again.";
const FR_CONN = "Connection interrupted. Your message wasn't completed. Please try again.";
const FR_TIMEOUT = "Aderiqo AI took too long to respond. Nothing was changed. Please try again.";

export function AiChat({
  className = "",
  onAvatarState,
}: {
  className?: string;
  onAvatarState?: (state: AvatarState) => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: id(),
      role: "assistant",
      content:
        "✨ Welcome to Aderiqo AI. Ask anything about Aderiqo — the platform, how it works, its AI, security, industries, or booking a demo. I'll keep your conversation's context as we talk.",
      state: "done",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (busy) {
      onAvatarState?.("thinking");
    } else if (input.trim()) {
      onAvatarState?.("listening");
    } else {
      onAvatarState?.("idle");
    }
  }, [busy, input, onAvatarState]);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

  const historyFor = useCallback(
    (upToIndex: number): { role: Role; content: string }[] =>
      messages
        .slice(0, upToIndex)
        .filter((m) => m.state === "done" || m.role === "user")
        .map((m) => ({ role: m.role, content: m.content })),
    [messages]
  );

  const runTurn = useCallback(
    async (question: string, upToIndex: number, assistantMsgId: string) => {
      const ac = new AbortController();
      abortRef.current = ac;
      const history = historyFor(upToIndex);
      const timeout = setTimeout(() => ac.abort(), 55000);

      try {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: question, history }),
          signal: ac.signal,
        });
        if (!res.ok) {
          if (res.status === 429) throw new Error("rate_limited");
          if (res.status === 413) throw new Error("too_long");
          throw new Error("server");
        }
        const reader = res.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let finished = false;
        let errorCode: string | null = null;
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          let nl: number;
          while ((nl = buffer.indexOf("\n")) >= 0) {
            const line = buffer.slice(0, nl).trim();
            buffer = buffer.slice(nl + 1);
            if (!line) continue;
            let obj: { delta?: string; done?: boolean; error?: string };
            try {
              obj = JSON.parse(line);
            } catch {
              continue;
            }
            if (obj.error) errorCode = obj.error;
            if (obj.delta) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsgId ? { ...m, content: m.content + obj.delta!, state: "streaming" } : m
                )
              );
            }
            if (obj.done) finished = true;
          }
        }
        if (finished) {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMsgId ? { ...m, state: "done" } : m))
          );
        } else if (errorCode) {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMsgId ? { ...m, content: FR_A, state: "error" } : m))
          );
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsgId ? { ...m, content: FR_CONN, state: "error" } : m
            )
          );
        }
      } catch (err) {
        const st = err instanceof Error ? err.name : "";
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsgId
              ? { ...m, content: st === "AbortError" ? FR_TIMEOUT : FR_CONN, state: "error" }
              : m
          )
        );
      } finally {
        clearTimeout(timeout);
        abortRef.current = null;
        setBusy(false);
      }
    },
    [historyFor]
  );
const send = useCallback(
    (text: string) => {
      const q = text.trim();
      if (!q || busy) return;
      const userMsgId = id();
      const assistantMsgId = id();
      setMessages((prev) => [
        ...prev,
        { id: userMsgId, role: "user", content: q, state: "done" },
        { id: assistantMsgId, role: "assistant", content: "", state: "streaming" },
      ]);
      const upToIndex = messages.length + 1;
      setBusy(true);
      setInput("");
      void runTurn(q, upToIndex, assistantMsgId);
    },
    [busy, messages.length, runTurn]
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const retry = useCallback(() => {
    setMessages((prev) => {
      const lastUserIdx = [...prev].reverse().findIndex((m) => m.role === "user");
      if (lastUserIdx < 0) return prev;
      const idx = prev.length - 1 - lastUserIdx;
      const question = prev[idx].content;
      const cleaned = prev.slice(0, idx + 1);
      const newAssistant = { id: id(), role: "assistant" as Role, content: "", state: "streaming" as const };
      setBusy(true);
      void runTurn(question, cleaned.length, newAssistant.id);
      return [...cleaned, newAssistant];
    });
  }, [runTurn]);

  const clearAll = useCallback(() => {
    abortRef.current?.abort();
    setShowClearConfirm(false);
    setMessages([
      {
        id: id(),
        role: "assistant",
        content: "Conversation cleared. Ask anything about Aderiqo, or pick a suggestion below to get started.",
        state: "done",
      },
    ]);
    setInput("");
    inputRef.current?.focus();
  }, []);

  const copy = useCallback(async (text: string, msgId: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setConfirmed(msgId);
    setTimeout(() => setConfirmed((c) => (c === msgId ? null : c)), 1600);
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        <div className="flex items-center justify-between border-b border-line bg-mist px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white">
              ✨
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Aderiqo AI</p>
              <p className="text-xs text-ink-soft">Public assistant · product questions</p>
            </div>
          </div>
          {messages.some((m) => m.role === "user") ? (
            <button
              type="button"
              onClick={() => setShowClearConfirm(true)}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium text-ink-soft transition hover:bg-white hover:text-electric"
            >
              Clear
            </button>
          ) : null}
        </div>

        <div ref={scrollRef} className="max-h-[58vh] min-h-[380px] space-y-4 overflow-y-auto px-4 py-5 sm:px-6" role="log" aria-label="Conversation with Aderiqo AI" aria-live="polite">
          {messages.map((m) => (
            <MessageRow key={m.id} msg={m} confirmed={confirmed} onCopy={copy} onRetry={retry} />
          ))}
          {messages.length === 1 && messages[0].state === "done" && messages[0].role === "assistant" ? (
            <WelcomeSuggestions onPick={send} busy={busy} />
          ) : null}
        </div>

        <div className="border-t border-line bg-white px-4 py-3 sm:px-5">
          {showClearConfirm ? (
            <div className="mb-3 flex items-center justify-between gap-3 rounded-lg border border-line bg-mist px-4 py-3">
              <p className="text-sm text-ink-soft">Clear this conversation?</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowClearConfirm(false)}
                  className="rounded-md border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-mist"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  className="rounded-md bg-amagenta/10 px-3 py-1.5 text-xs font-medium text-amagenta transition hover:bg-amagenta/20"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : null}
          <form onSubmit={onSubmit} className="flex items-end gap-2">
            <label htmlFor="ai-message" className="sr-only">
              Message Aderiqo AI
            </label>
            <input
              ref={inputRef}
              id="ai-message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Aderiqo…"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-electric focus:outline-none"
            />
            {busy ? (
              <button
                type="button"
                onClick={stop}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-mist"
              >
                <Dots />
                Stop
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="brand-gradient inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send <span aria-hidden>→</span>
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
function Dots() {
  return (
    <span aria-hidden className="flex h-3 items-center gap-0.5">
      <span className="h-1.5 w-1.5 rounded-full bg-electric motion-safe:animate-pulse" />
      <span className="h-1.5 w-1.5 rounded-full bg-aviolet motion-safe:animate-pulse" style={{ animationDelay: "120ms" }} />
      <span className="h-1.5 w-1.5 rounded-full bg-amagenta motion-safe:animate-pulse" style={{ animationDelay: "240ms" }} />
    </span>
  );
}

function MessageRow({
  msg,
  confirmed,
  onCopy,
  onRetry,
}: {
  msg: Msg;
  confirmed: string | null;
  onCopy: (text: string, id: string) => void;
  onRetry: () => void;
}) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed sm:max-w-[82%] ${
          isUser
            ? "rounded-br-sm bg-electric/10 text-ink"
            : "rounded-bl-sm border border-line bg-mist/60 text-ink"
        }`}
      >
        {msg.state === "streaming" && msg.content.length === 0 ? (
          <span className="flex items-center gap-1 text-ink-soft">
            <Dots />
            thinking…
          </span>
        ) : (
          <RichText text={msg.content} />
        )}

        {!isUser && msg.state === "done" ? (
          <button
            type="button"
            onClick={() => onCopy(msg.content, msg.id)}
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-ink-soft transition hover:text-electric"
          >
            {confirmed === msg.id ? <span className="text-electric">Copied ✓</span> : "Copy"}
          </button>
        ) : null}

        {!isUser && msg.state === "error" ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-2 inline-flex items-center gap-1 rounded-md bg-electric/10 px-2.5 py-1 text-xs font-semibold text-electric transition hover:bg-electric/20"
          >
            Retry
          </button>
        ) : null}
      </div>
    </div>
  );
}

function WelcomeSuggestions({ onPick, busy }: { onPick: (t: string) => void; busy: boolean }) {
  return (
    <div className="space-y-2 pt-1">
      <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">Try asking</p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            disabled={busy}
            onClick={() => onPick(s)}
            className="rounded-full border border-line bg-white px-3.5 py-2 text-sm text-ink shadow-card transition hover:-translate-y-0.5 hover:border-electric hover:text-electric disabled:opacity-50"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Minimal, dependency-free markdown-ish renderer (paragraphs, bullets, numbering, bold, links). */
function RichText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className="space-y-2">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        const lines = trimmed.split("\n");
        const isOrdered = lines.some((l) => /^\d+[.)]\s/.test(l.trim()));
        const isList = lines.some((l) => /^[-•*]\s/.test(l.trim()));
        const items = lines
          .map((l) => l.replace(/^\s*[-•*]\s+/, "").replace(/^\d+[.)]\s+/, "").trim())
          .filter(Boolean);
        if (isList || isOrdered) {
          return (
            <ul key={i} className={isOrdered ? "list-decimal space-y-1 pl-5" : "list-disc space-y-1 pl-5"}>
              {items.map((item, j) => (
                <li key={j} className="text-sm leading-relaxed">
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed">
            <Inline text={trimmed} />
          </p>
        );
      })}
    </div>
  );
}

function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      parts.push(<strong key={k++}>{tok.slice(2, -2)}</strong>);
    } else {
      const inner = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      if (inner) {
        const url = inner[2];
        const isInternal = url.startsWith("/");
        parts.push(
          isInternal ? (
            <a key={k++} href={url} className="font-medium text-electric underline-offset-2 hover:underline">
              {inner[1]}
            </a>
          ) : (
            <a
              key={k++}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-electric underline-offset-2 hover:underline"
            >
              {inner[1]}
            </a>
          )
        );
      } else {
        parts.push(tok);
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
