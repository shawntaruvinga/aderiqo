import type { KnowledgeTopic } from "./types";

export const CRM_TOPICS: KnowledgeTopic[] = [
  {
    id: "contact-crm",
    section: "crm",
    keywords: ["crm", "core crm", "crm features", "what crm", "customer relationship management", "customer records"],
    aliases: ["customer relationship", "customer system", "customer database", "deal tracker", "sales tracker", "account management system", "gestión de clientes", "crm relaciones", "gestion crm", "relation client"],
    related: ["what-is-aderiqo", "contact-companies", "contact-contacts", "contact-opportunities", "connected-workspace"],
    content:
      "Aderiqo's CRM is the disciplined foundation: companies, contacts and opportunities, with tasks, calendar and email in context. Every module links to the same customer records, so the CRM keeps full relationship and revenue context rather than just names and notes. Aderiqo AI works inside this CRM to reduce data entry. The CRM is built around the idea that every piece of customer information should be connected, searchable and actionable.",
  },
  {
    id: "contact-companies",
    section: "crm",
    keywords: ["companies", "company", "accounts", "account", "company management", "account management", "organizations", "company records"],
    aliases: ["track our accounts", "company records", "manage each account", "a record for every client", "account records", "business records", "empresas", "compañías", "cuentas", "entreprises", "comptes", "sociétés"],
    related: ["contact-crm", "contact-opportunities", "contact-contacts", "prospecting"],
    content:
      "Companies: centralized company records with relationship context, revenue context, linked contacts and AI-assisted research and capture. Each account keeps a single source of truth — open a company and see its contacts, open opportunities, revenue context and activity history in one place. Companies can be captured from prospecting or created manually, and AI can assist with enrichment.",
  },
  {
    id: "contact-contacts",
    section: "crm",
    keywords: ["contacts", "contact", "people", "relationship management", "contact management", "stakeholders", "decision makers", "contact profiles"],
    aliases: ["track the people", "who we talk to", "manage relationships", "keep in touch", "people management", "customer contacts", "contactos", "personas", "contactos comerciales", "contacts", "personnes", "contacts clients"],
    related: ["contact-crm", "contact-companies", "contact-opportunities", "tasks", "calendar", "email"],
    content:
      "Contacts: contact profiles with communication information, company relationships, opportunity links and follow-up context. Profiles are connected to their company, deals, meetings and conversations, so anyone on the team can pick up where a conversation left off. Aderiqo AI can create and update contacts conversationally.",
  },
  {
    id: "contact-opportunities",
    section: "crm",
    keywords: ["opportunities", "opportunity", "pipeline", "deals", "deal", "deal stages", "sales pipeline", "open deals", "pipeline management"],
    aliases: ["track our deals", "won deals", "deals we're working", "closing deals", "revenue pipeline", "sales pipeline", "open opportunities", "oportunidades", "tratos", "negocios", "opportunités", "affaires", "transactions"],
    related: ["contact-crm", "sales", "intelligence", "tasks", "calendar"],
    content:
      "Opportunities: pipeline and deal management with stages, value, ownership and the relationships behind each deal. Track deals through the sales process with clear stages and revenue visibility, keep pipeline context attached to companies and contacts, and ask questions like 'which deals are most likely to close this month?'. Opportunities connect to tasks, meetings and emails so the whole deal history stays in one place.",
  },
];
