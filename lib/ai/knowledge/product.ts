import type { KnowledgeTopic } from "./types";

export const PRODUCT_TOPICS: KnowledgeTopic[] = [
  {
    id: "what-is-aderiqo",
    section: "product",
    keywords: ["what is aderiqo", "what's aderiqo", "about aderiqo", "what does aderiqo do", "platform", "product overview"],
    aliases: ["what are you", "tell me about aderiqo", "what is this", "what do you do", "product", "platform overview", "qué es aderiqo", "qué puede hacer aderiqo", "qu'est-ce qu'aderiqo", "que peut faire aderiqo"],
    related: ["crm-modules", "company", "aderiqo-ai", "dashboard"],
    content:
      "Aderiqo is an AI-powered CRM and business operating platform developed and operated by ArdenzaTech. It brings customer relationships, sales activity, communication and follow-ups into one connected workspace: companies, contacts, opportunities, tasks, calendar, email, prospecting and revenue intelligence. Positioning: 'CRM first. AI makes the CRM intelligent.' The CRM is the foundation; Aderiqo AI works inside it rather than as a separate chatbot. Aderiqo is ArdenzaTech's flagship product. Features may evolve over time as the product develops.",
  },
  {
    id: "crm-modules",
    section: "product",
    keywords: ["what modules", "modules", "whats included", "what areas", "overview", "features", "what can aderiqo do", "all in one", "capabilities", "what does it include"],
    aliases: ["what's included", "what do i get", "what are the features", "what can it do", "qué incluye", "qué módulos", "qu'est-ce qui est inclus", "quels modules"],
    related: ["what-is-aderiqo", "contact-crm", "dashboard"],
    content:
      "Aderiqo includes a dashboard, Aderiqo AI, companies, contacts, opportunities (sales pipeline), tasks, calendar, email in context, prospecting (Prospector), revenue intelligence, integrations and security. The platform is grouped into: CRM (companies, contacts, opportunities), Execution (tasks, calendar, emails), Growth (prospector, revenue intelligence), and Intelligence (Aderiqo AI, insights).",
  },
  {
    id: "dashboard",
    section: "product",
    keywords: ["dashboard", "overview", "home", "homepage", "at a glance", "snapshot", "kpi"],
    aliases: ["what do i see first", "landing page", "main screen", "daily view", "what's due", "panel", "resumen", "tableau de bord"],
    related: ["what-is-aderiqo", "intelligence", "tasks", "contact-opportunities"],
    content:
      "The dashboard is the central overview of Aderiqo. It provides an at-a-glance view of open pipeline, won revenue, active contacts and open tasks. It is designed to give users a quick pulse on their business so they can start the day focused on what matters.",
  },
  {
    id: "connected-workspace",
    section: "product",
    keywords: ["one place", "one workspace", "single workspace", "connected", "everything together", "all my customer data", "connected workspace", "one system"],
    aliases: ["everything related to a customer in one place", "see everything in one place", "scattered data", "data in different places", "all our tools", "patched together", "single source of truth", "fragmented", "todo en un lugar", "espacio conectado", "tout en un seul endroit", "espace connecté"],
    related: ["contact-crm", "contact-companies", "contact-opportunities"],
    content:
      "Aderiqo is a connected customer workspace: companies, contacts, opportunities, tasks, meetings and emails share one data model and are linked together. Open a company or contact and see its relationships, deals, meetings and conversation history in one place, so context is never lost and no one has to reconstruct history across tools.",
  },
  {
    id: "getting-started",
    section: "product",
    keywords: ["get started", "how do i start", "how to start", "onboarding", "setup", "sign up", "start using", "try it"],
    aliases: ["how do i begin", "how do i try", "can i try", "start with", "getting started", "empezar", "comenzar", "démarrer", "commencer"],
    related: ["pricing", "demo", "company"],
    content:
      "You can get started by creating your organization in the Aderiqo application and exploring the CRM, AI and everyday workflows with your own data. You can also book a guided demo or talk to the team about a plan designed around your business.",
  },
  {
    id: "demo",
    section: "product",
    keywords: ["demo", "demonstration", "book a demo", "see a demo", "guided demo", "walkthrough", "product tour", "see it in action"],
    aliases: ["show me how it works", "can i see it", "let me see", "demostración", "démo", "voir une démo"],
    related: ["getting-started", "pricing", "what-is-aderiqo"],
    content:
      "Aderiqo offers a guided demo where you can see the CRM, Aderiqo AI, prospecting and revenue intelligence using your own use cases. A demo covers: your current tools and workflows, a guided tour of the CRM (companies, contacts, pipeline), Aderiqo AI acting on real records (creation, questions, workflows), prospecting/tasks/calendar/email in context, revenue intelligence and reporting, and next steps. You can book a demo through the demo page or the contact page. Do not invent sales contacts, phone numbers, or specific demo scheduling details beyond what is publicly available.",
  },
  {
    id: "comparison",
    section: "product",
    keywords: ["compare", "comparison", "different from", "better than", "instead of", "vs", "versus", "traditional crm", "spreadsheet", "excel", "patchwork"],
    aliases: ["why use aderiqo", "why not just use", "instead of spreadsheets", "instead of salesforce", "instead of hubspot", "what's the difference", "comparar", "vs excel", "vs salesforce", "comparaison", "vs excel", "pourquoi aderiqo"],
    related: ["what-is-aderiqo", "connected-workspace", "ais", "contact-crm"],
    content:
      "Aderiqo is designed differently from traditional CRMs and spreadsheets. Traditional CRMs often require heavy manual data entry, live in disconnected tools, and provide reactive reporting. Aderiqo connects the whole customer graph — companies, contacts, opportunities, tasks, meetings and emails — in one workspace, with AI that acts on real records and generates insight from live activity rather than exported reports.",
  },
];
