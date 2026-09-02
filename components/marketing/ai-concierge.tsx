"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AderiqoAIVisual } from "@/components/marketing/ai-assistant-visual";

type Msg = { role: "user" | "bot"; text: string };

const QUICK = ["What is Aderiqo?", "What can Aderiqo AI do?", "How much does it cost?", "Is my data secure?"];

function answer(q: string): string {
  const s = q.toLowerCase();
  if (/(what|who).*(aderiqo|product|platform)|about/.test(s))
    return "Aderiqo is an AI-powered CRM and business operating platform developed by ArdenzaTech. It brings companies, contacts, opportunities, tasks, calendar, email, prospecting and revenue intelligence together in one workspace — with AI built into the CRM itself. CRM first. AI makes the CRM intelligent.";
  if (/ai|assistant|chatbot|conversat/.test(s))
    return "Aderiqo AI works inside the CRM, not as a bolt-on chatbot. You can ask it to create contacts and companies, update records, manage opportunities, create tasks, schedule meetings, search CRM information, and work through multi-step workflows — using plain language. Sensitive actions always ask for your confirmation first.";
  if (/price|pricing|cost|plan|how much/.test(s))
    return "Aderiqo plans are designed around your business. You can get started in the app, book a demo, or contact sales — our team will shape the right plan for your team. Head to the Pricing page to see the options.";
  if (/secur|privacy|data|gdpr|soc|complian/.test(s))
    return "Aderiqo is built with enterprise security principles: secure authentication, organization-level isolation, role-based access control, tenant isolation, audit logging and secure API authorization. Sensitive AI actions require confirmation and are designed to be auditable. We don't claim third-party certifications — see the Security page for what's actually implemented.";
  if (/integrat|connect|api/.test(s))
    return "Aderiqo integrates prospecting data, email enrichment, verification and delivery services directly into the CRM workflow, plus secure authorized API access for custom workflows. See the Integrations page for what's available today.";
  if (/demo|trial|start|signup|get started/.test(s))
    return "The fastest way to see Aderiqo is to book a demo — a guided walkthrough using your own use cases. You can also get started directly in the Aderiqo app. Both options are in the header and on the demo page.";
  if (/crm|contact|compan|opportunit|pipeline|sales/.test(s))
    return "Aderiqo includes full CRM foundations: centralized company records, contact profiles with relationship context, opportunities with pipeline stages, tasks, calendar, email in context, prospecting and revenue intelligence. Explore the CRM page for details.";
  if (/industr|team|business|agency|startup|health|educa|retail/.test(s))
    return "Aderiqo works for sales teams, small businesses, startups, professional services, technology companies, agencies, healthcare, education and retail. The Solutions page shows the practical workflows for each.";
  if (/ardenza/.test(s))
    return "Aderiqo is developed by ArdenzaTech, which builds practical software for how businesses operate. You can read more on the About page.";
  if (/human|person|sales team|talk|speak/.test(s))
    return "You can reach our team through the Contact page, or book a guided demo — we reply personally to every message.";
  return "I can help with questions about Aderiqo — the product, Aderiqo AI, CRM features, pricing, integrations, security or booking a demo. What would you like to know?";
}

export function AiConcierge() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi, I'm Aderiqo AI. Ask me anything about the platform — features, AI, pricing, security or booking a demo.",
    },
  ]);
  const [value, setValue] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [msgs, open]);

  function send(q: string) {
    const text = q.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }, { role: "bot", text: answer(text) }]);
    setValue("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(value);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close Aderiqo AI" : "Open Aderiqo AI"}
        className="aderiqo-ai-launcher"
      >
        <AderiqoAIVisual state={open ? "thinking" : "idle"} size="small" />
        {!open && (
          <span className="aderiqo-ai-launcher__label">Ask Aderiqo AI</span>
        )}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Aderiqo AI assistant"
          className="aderiqo-ai-panel"
        >
          <div className="aderiqo-ai-panel__header">
            <div className="flex items-center gap-3">
              <AderiqoAIVisual state="idle" size="small" />
              <div>
                <p className="font-semibold text-white">Aderiqo AI</p>
                <p className="text-xs text-slate-400">Public assistant · product questions</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Aderiqo AI"
              className="rounded-md p-1.5 text-slate-400 transition hover:text-white"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="aderiqo-ai-panel__messages">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`aderiqo-ai-panel__msg ${m.role === "user" ? "aderiqo-ai-panel__msg--user" : "aderiqo-ai-panel__msg--bot"}`}
              >
                {m.text}
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="aderiqo-ai-panel__quick"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="aderiqo-ai-panel__footer">
            <label htmlFor="concierge-input" className="sr-only">
              Ask a question about Aderiqo
            </label>
            <input
              id="concierge-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ask about Aderiqo…"
              className="aderiqo-ai-panel__input"
            />
            <button
              type="submit"
              className="aderiqo-ai-panel__send"
              aria-label="Send message"
            >
              <span aria-hidden>↑</span>
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
