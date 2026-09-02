import type { KnowledgeTopic } from "./types";

export const GROWTH_TOPICS: KnowledgeTopic[] = [
  {
    id: "prospecting",
    section: "growth",
    keywords: ["prospecting", "prospector", "leads", "lead", "lead management", "find companies", "discovery", "enrichment", "prospects", "prospect discovery"],
    aliases: ["find new customers", "lose track of leads", "build a target list", "more prospects", "who to reach out to", "lead generation", "finding leads", "finding prospects", "target list", "prospect research", "prospección", "generación de leads", "búsqueda de clientes", "prospection", "génération de leads", "recherche de prospects"],
    related: ["contact-crm", "contact-companies", "contact-contacts", "ais"],
    content:
      "Prospecting: the Prospector helps discover relevant companies, research them, identify decision-makers and capture them into the CRM. It includes lead enrichment and email verification via integrated services. Search for companies by industry, size and market, then research each prospect before the first conversation. Captured prospects become company and contact records ready for tasks, meetings, opportunities and revenue intelligence. AI assists with prospecting workflows.",
  },
  {
    id: "intelligence",
    section: "growth",
    keywords: ["revenue intelligence", "intelligence", "insights", "analytics", "reporting", "business intelligence", "dashboards", "trends", "forecast", "pipeline visibility", "revenue tracking"],
    aliases: ["managers don't know what's happening", "visibility on deals", "see the pipeline", "what's working", "track performance", "business insights", "deal health", "pipeline health", "visibilidad", "inteligencia de negocios", "análisis", "tendencias", "visibilité", "intelligence commerciale", "analytique", "tendances"],
    related: ["contact-opportunities", "sales", "ais", "dashboard"],
    content:
      "Revenue Intelligence: pipeline visibility, revenue tracking, opportunity health, sales activity and customer context, with business insights generated from live CRM data. It turns everyday activity into pipeline visibility, revenue trends, deal progression and decision support — built from a team's own data, not invented statistics. Understand your pipeline by stage, owner and period. Spot stalled opportunities and uneven workloads while there is still time to act. Aderiqo AI can answer business questions in conversation, such as 'which deals are most likely to close this month?'.",
  },
  {
    id: "sales",
    section: "growth",
    keywords: ["sales", "sales team", "selling", "win deals", "salesperson", "salespeople", "sellers", "quota", "pipeline management"],
    aliases: ["help my sales team", "sales team keeps forgetting", "close more", "more time selling", "deal management", "sales process", "closing deals", "ventas", "equipo de ventas", "vender más", "ventes", "équipe commerciale", "vendre plus"],
    related: ["contact-opportunities", "tasks", "calendar", "email", "ais", "intelligence"],
    content:
      "Sales: opportunities with deal stages and revenue, ownership, task-driven follow-up, meetings and email in context, and AI-assisted updates and pipeline Q&A (for example 'which deals are most likely to close this month?'). Aderiqo reduces the data-entry burden so sellers spend their time selling, and keeps the pipeline current through conversational updates. Every deal connects to the companies, contacts, tasks and meetings that move it forward.",
  },
];
