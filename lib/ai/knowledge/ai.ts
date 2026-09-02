import type { KnowledgeTopic } from "./types";

export const AI_TOPICS: KnowledgeTopic[] = [
  {
    id: "ais",
    section: "ai",
    keywords: ["aderiqo ai", "what can ai do", "ai features", "how does ai work", "assistant", "capabilities", "automat", "ai capabilities", "what can the ai do"],
    aliases: ["automate crm", "stop manual entry", "less data entry", "ai does the admin", "delegate crm work", "intelligent assistant", "ai assistant", "virtual assistant", "ia", "asistente", "inteligencia artificial", "ia aderiqo", "assistant intelligent", "ia aderiqo"],
    related: ["what-is-aderiqo", "contact-crm", "tasks", "calendar", "email", "contact-companies", "contact-opportunities", "ai-workflows"],
    content:
      "Aderiqo AI works inside the CRM rather than as a bolted-on chatbot. It can help create contacts and companies, update CRM records, manage opportunities, create tasks and follow-ups, schedule meetings, search CRM information, analyze customer and pipeline information, and work through multi-step conversational workflows. It understands business problems, not just keywords. Sensitive actions require user confirmation. On this public website, Aderiqo AI is a visitor assistant that explains the product — it does not operate any private CRM data.",
  },
  {
    id: "ai-workflows",
    section: "ai",
    keywords: ["multi step", "workflow", "workflows", "pronoun", "context", "conversational", "natural language", "plain language"],
    aliases: ["do the whole thing", "one request", "several steps", "continuous conversation", "understand context", "remember what i said", "follow up questions", "flujo de trabajo", "workflow", "conversación", "flux de travail", "workflow"],
    related: ["ais", "contact-crm", "tasks", "calendar", "contact-companies", "contact-contacts"],
    content:
      "Aderiqo AI supports conversational, multi-step workflows and understands context across an exchange. For example, 'Create Acme, add John as a contact, and schedule a follow-up' can create three connected records, and a later 'schedule it with him' understands who 'him' refers to — the visitor does not need to repeat the subject. It confirms before sensitive actions. The AI can also answer business questions about the pipeline, summarize relationships, and help draft customer communications.",
  },
  {
    id: "ai-business-problems",
    section: "ai",
    keywords: ["business problem", "understand my business", "help my business", "solve my problem", "what can ai solve"],
    aliases: ["help us with", "solve our problem", "our challenge", "our issue", "pain point", "problema de negocio", "desafío", "pain point", "problème commercial", "défi", "problème"],
    related: ["ais", "contact-crm", "sales", "tasks", "intelligence"],
    content:
      "Aderiqo AI is designed to understand business problems, not just match keywords. If a sales team keeps forgetting follow-ups, the AI connects that to tasks, calendar and customer records. If a manager cannot see the pipeline, it connects that to opportunities and revenue intelligence. If customer data is scattered, it connects that to the unified CRM workspace. The AI maps the visitor's situation to the Aderiqo capabilities that solve it.",
  },
];
