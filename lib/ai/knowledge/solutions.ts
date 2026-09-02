import type { KnowledgeTopic } from "./types";

export const SOLUTIONS_TOPICS: KnowledgeTopic[] = [
  {
    id: "solutions",
    section: "solutions",
    keywords: ["industries", "industry", "who is it for", "use case", "who uses", "solutions", "fit my business", "industries that use", "teams"],
    aliases: ["work for us", "right for our business", "for a company like", "our team", "what industries", "who is this for", "is it for me", "industrias", "para quién es", "nuestro equipo", "industries", "pour quiest", "notre équipe", "nos métiers"],
    related: ["what-is-aderiqo", "sales", "contact-crm"],
    content:
      "Aderiqo is designed for sales teams, small businesses, startups, professional services, technology companies, agencies, healthcare organizations, education and retail — focused on practical workflows. Examples: sales teams keep the pipeline current with AI-assisted updates; small businesses replace a patchwork of tools with one workspace; startups capture prospects and run the pipeline with AI assistance; professional services track clients, engagements and follow-ups; agencies manage multiple client accounts and communication; technology companies keep multi-stakeholder accounts connected. No unsupported compliance claims are made for any vertical.",
  },
];

export const USE_CASES: {
  id: string;
  patterns: string[];
  capabilities: string[];
  guidance: string;
}[] = [
  {
    id: "spreadsheet-tracking",
    patterns: ["spreadsheet", "excel", "sheets", "google sheets", "manual tracking", "tracking in spreadsheets", "deal tracker in sheets", "crm in excel", "excel", "hojas de cálculo", "controlar en excel", "excel para controlar", "excel pour suivre", "tableur"],
    capabilities: ["crm-modules", "contact-opportunities", "contact-crm", "connected-workspace"],
    guidance:
      "The visitor currently tracks deals/customers in a spreadsheet. Explain that Aderiqo is a connected CRM that centralizes companies, contacts and opportunities (a shared pipeline) while keeping follow-ups, meetings and emails attached, so they can move off manual spreadsheet tracking.",
  },
  {
    id: "forgetting-followups",
    patterns: ["forget to follow up", "forget follow up", "forgetting follow ups", "forgetting follow-ups", "keeps forgetting", "keep forgetting", "missed follow up", "no one follows up", "follow up with prospects", "slips through", "lose track of follow ups", "drop the ball", "ball drops", "olvida hacer seguimiento", "olvidan hacer seguimiento", "equipo olvida", "oublie de faire le suivi", "équipe oublie", "forgetting to call people back", "salespeople aren't following up", "customers don't hear back", "nobody remembers to chase prospects", "our sales guys forget callbacks", "people keep dropping the ball", "call people back", "forgetting to call back"],
    capabilities: ["tasks", "calendar", "ais", "contact-opportunities", "contact-contacts"],
    guidance:
      "The visitor's team forgets follow-ups. Explain that Aderiqo connects follow-ups to the customer records they belong to — tasks with owners and due dates, meetings on the calendar, and Aderiqo AI creating follow-ups conversationally — so nothing slips through.",
  },
  {
    id: "scattered-data",
    patterns: ["scattered", "different places", "several tools", "disconnected", "ten different", "lost context", "patchwork", "all over the place", "silos", "tool sprawl", "ten tools", "data is everywhere", "customer data is everywhere", "dispersa", "información dispersa", "datos dispersos", "dispersées", "informations dispersées", "customer information is everywhere", "customer records are all over the place", "nobody knows where customer information lives", "we need all our customer information in one place", "client details in different spreadsheets"],
    capabilities: ["connected-workspace", "contact-crm", "contact-companies", "contact-contacts", "contact-opportunities"],
    guidance:
      "The visitor's customer data lives across disconnected tools. Explain that Aderiqo is one connected customer workspace where companies, contacts, opportunities, tasks, meetings and emails share one data model and appear together.",
  },
  {
    id: "managers-no-visibility",
    patterns: ["managers don't know", "no visibility", "don't know what's happening with deals", "can't see pipeline", "where are deals", "managers lack visibility", "pipeline visibility", "see the pipeline", "no visibilidad", "no sabemos qué pasa", "pas de visibilité", "ne savons pas ce qui se passe", "manager can't see what's happening with deals", "we don't know which opportunities are still active", "our sales pipeline is a mess", "i can't tell which deals are moving", "we have no visibility into our sales"],
    capabilities: ["intelligence", "contact-opportunities", "sales", "dashboard"],
    guidance:
      "Management lacks visibility into deals. Explain that Aderiqo's revenue intelligence shows pipeline visibility, revenue tracking and opportunity health from live CRM data, and Aderiqo AI answers pipeline questions directly. The dashboard also gives an at-a-glance overview.",
  },
  {
    id: "too-much-data-entry",
    patterns: ["too much time updating", "spend time updating crm", "data entry", "manual entry", "updating records", "administrative burden", "too much admin", "busywork", "mucho tiempo actualizando", "entrada de datos", "beaucoup de saisie", "temps à mettre à jour"],
    capabilities: ["ais", "ai-workflows", "contact-crm"],
    guidance:
      "The visitor's team spends too long updating records. Explain that Aderiqo AI creates and updates records, manages opportunities, schedules follow-ups and runs multi-step workflows conversationally, with confirmation before sensitive actions.",
  },
  {
    id: "win-more-business",
    patterns: ["close more", "win more", "more business", "grow revenue", "sell more", "improve sales", "increase revenue", "grow the business", "cerrar más", "vender más", "más negocios", "gagner plus", "vendre plus", "plus de business"],
    capabilities: ["sales", "prospecting", "contact-opportunities", "intelligence"],
    guidance:
      "The visitor wants to grow revenue. Explain how Aderiqo combines prospecting (finding companies), an opportunity pipeline, task-driven follow-up and revenue intelligence to support winning more business.",
  },
  {
    id: "customer-360",
    patterns: ["everything related to a customer", "entire relationship", "full picture", "history with a customer", "all context", "single view", "360 view", "full context", "todo relacionado con el cliente", "visión 360", "tout ce qui concerne le client", "vue 360"],
    capabilities: ["connected-workspace", "contact-companies", "contact-contacts", "email", "tasks", "calendar"],
    guidance:
      "The visitor wants to see the full customer picture. Explain that Aderiqo links companies, contacts, opportunities, tasks, meetings and emails into one connected record so the whole relationship is visible in one place.",
  },
  {
    id: "finding-prospects",
    patterns: ["find new companies", "find prospects", "discover companies", "lead generation", "build a target list", "who should we talk to", "identify prospects", "encontrar empresas", "buscar prospectos", "generación de leads", "trouver des entreprises", "trouver des prospects", "génération de leads"],
    capabilities: ["prospecting", "contact-companies", "contact-contacts"],
    guidance:
      "The visitor needs to find and research new prospects. Explain that Aderiqo's Prospector helps discover relevant companies, research them, identify decision-makers and capture them into the CRM as company and contact records.",
  },
  {
    id: "pipeline-organization",
    patterns: ["organize pipeline", "track deals", "deal stages", "sales process", "pipeline stages", "where are we with deals", "organizar pipeline", "seguir tratos", "stages de ventas", "organiser le pipeline", "suivre les opportunités"],
    capabilities: ["contact-opportunities", "sales", "intelligence", "tasks"],
    guidance:
      "The visitor needs to organize and track their sales pipeline. Explain that Aderiqo's opportunities module provides clear deal stages, ownership, revenue visibility and connection to follow-up tasks and meetings.",
  },
  {
    id: "team-coordination",
    patterns: ["team coordination", "multiple users", "team visibility", "shared workspace", "everyone on the same page", "team access", "collaboration", "coordinación de equipo", "visibilidad del equipo", "coordination d'équipe", "visibilité d'équipe"],
    capabilities: ["contact-crm", "contact-companies", "tasks", "calendar"],
    guidance:
      "The visitor needs team coordination and visibility. Explain that Aderiqo is a shared workspace where the whole team sees the same company, contact and opportunity records, with tasks, meetings and emails visible to the right people.",
  },
  {
    id: "bad-grammar-casual",
    patterns: ["wat can", "wat does", "bro what", "what can aderiqo do bro", "can this help my sales guys", "does this replace excel or nah", "aderiqo have calender", "what about follow ups", "how this help my business", "whats the point of this", "tell me about the ai"],
    capabilities: ["what-is-aderiqo", "ais", "contact-crm", "sales"],
    guidance:
      "The visitor is using casual language, typos, or imperfect grammar. Interpret their meaning naturally and answer the underlying question about Aderiqo without correcting their language.",
  },
  {
    id: "mixed-language",
    patterns: ["what is aderiqo en español", "aderiqo c'est quoi", "tell me qué puede hacer", "what's the precio", "how much cuesta"],
    capabilities: ["what-is-aderiqo", "company", "pricing"],
    guidance:
      "The visitor is mixing languages. Detect the primary language and respond naturally in that language, maintaining factual boundaries.",
  },
];
