import type { KnowledgeTopic } from "./types";

export const COMPANY_TOPICS: KnowledgeTopic[] = [
  {
    id: "company",
    section: "company",
    keywords: ["who built", "who made", "who owns", "company", "ardenzatech", "who is behind", "the maker", "developed by", "customer count", "how many customers", "how many users", "user count", "statistics", "stats", "funding", "revenue", "arr", "mrr", "conversion rate", "cuántos clientes", "cuántos usuarios", "estadísticas", "ingresos", "combien de clients", "combien d'utilisateurs", "statistiques", "revenu"],
    aliases: ["who are you", "who makes this", "which company", "behind aderiqo", "how big is aderiqo", "how many people", "employee count", "market share", "growth rate", "quién construyó", "quién desarrolló", "empresa", "qui a construit", "qui a développé", "société"],
    related: ["what-is-aderiqo", "history-clovexa"],
    content:
      "Aderiqo is built and operated by ArdenzaTech. ArdenzaTech is the company; Aderiqo is its product; Aderiqo AI is the AI capability within the product. ArdenzaTech is a technology company that builds practical software for how businesses operate — its broader work and positioning have included areas such as enterprise networking, cloud solutions, cybersecurity, software development, AI solutions, IT infrastructure, IT consulting and managed IT services. Aderiqo is ArdenzaTech's flagship product: a business operating platform that starts with disciplined CRM foundations and makes them intelligent. IMPORTANT: ArdenzaTech's broader services (cybersecurity, networking, cloud, IT consulting, managed IT services) are NOT Aderiqo features — Aderiqo is an AI-powered CRM and connected workspace. Do not claim any ArdenzaTech service is an Aderiqo product capability. Aderiqo does not publish verified public statistics about customer counts, user counts, revenue, funding, ARR, MRR, market share or growth rates. Do not invent any of these figures. The Aderiqo brand and platform software are the property of ArdenzaTech.",
  },
];

export const HISTORY_TOPICS: KnowledgeTopic[] = [
  {
    id: "history-clovexa",
    section: "history",
    keywords: ["clovexa", "formerly", "old name", "rename", "rebrand", "history", "brand name"],
    aliases: ["clovexa", "antes se llamaba", "nombre anterior", "historia", "ancien nom", "histoire", "clovexa"],
    related: ["company", "what-is-aderiqo"],
    content:
      "Aderiqo was formerly known as Clovexa during its early development. Clovexa is no longer the current name; the product identity is now Aderiqo. The technology, vision and product continue forward under the Aderiqo name. Do not present Clovexa as a current or separate product.",
  },
];

export const PRICING_TOPICS: KnowledgeTopic[] = [
  {
    id: "pricing",
    section: "pricing",
    keywords: ["pricing", "price", "cost", "how much", "plan", "plans", "subscription", "tier", "free", "trial", "free plan", "pricing plans", "how much does it cost"],
    aliases: ["what does it cost", "how expensive", "package", "is it free", "free trial", "pricing model", "precio", "coste", "tarifas", "planes", "prix", "coût", "tarifs", "plans"],
    related: [],
    content:
      "Aderiqo does not currently publish fixed public pricing. Plans are designed around each business. Visitors can get started, book a demo, or contact sales to have a plan shaped for their team. Do NOT invent any price, tier, or free-plan details.",
  },
];