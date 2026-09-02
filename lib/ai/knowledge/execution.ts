import type { KnowledgeTopic } from "./types";

export const EXECUTION_TOPICS: KnowledgeTopic[] = [
  {
    id: "tasks",
    section: "execution",
    keywords: ["tasks", "task", "follow-up", "follow up", "followups", "to-do", "reminders", "follow-up tasks", "task management"],
    aliases: ["forget to follow up", "missed follow up", "committing to call back", "follow up with prospects", "action items", "to-dos", "work items", "busywork", "tareas", "seguimiento", "tâches", "suivi", "relance"],
    related: ["contact-crm", "contact-opportunities", "ais", "calendar", "contact-contacts"],
    content:
      "Tasks: follow-ups, ownership and due dates connected to the companies, contacts and opportunities they involve. Every task knows who owns it, when it's due and which customer it serves. The dashboard keeps today's work in front of you. Aderiqo AI can create tasks and follow-ups conversationally (for example 'create a follow-up with Sarah next Tuesday'), so commitments don't fall through the cracks. Task activity also feeds into revenue intelligence.",
  },
  {
    id: "calendar",
    section: "execution",
    keywords: ["calendar", "meetings", "meeting", "scheduling", "schedule", "book meetings", "appointments", "calendar view"],
    aliases: ["plan my meetings", "scheduling calls", "schedule a call", "sync meetings", "my schedule", "upcoming meetings", "appointments", "calendario", "reuniones", "calendrier", "rendez-vous"],
    related: ["contact-crm", "tasks", "contact-contacts", "contact-opportunities"],
    content:
      "Calendar: meetings and scheduling connected to customer records. Meetings link to companies, contacts and opportunities, with preparation and follow-up context. Schedule directly from a company, contact or opportunity record. Aderiqo AI can help schedule follow-ups and turn meetings into tasks and next steps, so walking into a call means knowing the account, the deal and the history. Team coordination is also supported.",
  },
  {
    id: "email",
    section: "execution",
    keywords: ["email", "emails", "inbox", "communication", "draft", "outreach", "email communication", "email history"],
    aliases: ["email customers", "write to clients", "communication history", "track conversations", "customer emails", "email context", "correo", "email comercial", "courriel", "email client"],
    related: ["contact-crm", "contact-contacts", "contact-companies", "ais"],
    content:
      "Email: customer communication kept in the context of companies, contacts and deals. Conversation history lives alongside records instead of being copy-pasted between an inbox and the CRM. When a contact writes, the account, the deal and the last touchpoint are already in view. Aderiqo AI can help draft customer emails using CRM context; nothing is sent without user approval.",
  },
];
