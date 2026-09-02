/**
 * Lightweight intent classification for the public Aderiqo AI.
 *
 * Works with normalized text and returns:
 * - intent category
 * - confidence score (0-1)
 * - matched signals
 *
 * This does NOT replace knowledge retrieval.
 * It only provides broad routing + confidence for short/ambiguous queries.
 */

import { normalizeQuery } from "../language/normalize";

export type Intent =
  | "identity"
  | "product_overview"
  | "crm"
  | "companies"
  | "contacts"
  | "opportunities"
  | "tasks"
  | "calendar"
  | "email"
  | "sales"
  | "prospecting"
  | "revenue_intelligence"
  | "ai"
  | "integrations"
  | "security"
  | "solutions"
  | "pricing"
  | "demo"
  | "getting_started"
  | "comparison"
  | "business_problem"
  | "company_history"
  | "support"
  | "out_of_scope"
  | "unknown";

export interface IntentResult {
  intent: Intent;
  confidence: number;
  signals: string[];
}

const HIGH_CONFIDENCE = 0.9;
const MEDIUM_CONFIDENCE = 0.6;
const LOW_CONFIDENCE = 0.3;

const INTENT_SIGNALS: { intent: Intent; keywords: string[]; weight: number }[] = [
  { intent: "identity", keywords: ["who built", "who made", "who owns", "who is behind", "which company", "ardenzatech", "behind aderiqo", "who are you", "who makes this", "quién construyó", "quién desarrolló", "qui a construit", "qui a développé"], weight: 5 },
  { intent: "company_history", keywords: ["clovexa", "formerly", "old name", "rename", "rebrand", "history", "brand name", "formerly known as", "antes se llamaba", "nombre anterior", "ancien nom"], weight: 5 },
  { intent: "pricing", keywords: ["pricing", "price", "cost", "how much", "plan", "plans", "subscription", "tier", "free", "trial", "free plan", "how expensive", "pricing plans", "precio", "coste", "tarifas", "planes", "prix", "coût", "tarifs", "cuánto cuesta", "combien coûte"], weight: 5 },
  { intent: "demo", keywords: ["demo", "demonstration", "book a demo", "see a demo", "guided demo", "walkthrough", "product tour", "demostración", "démo"], weight: 5 },
  { intent: "getting_started", keywords: ["get started", "how do i start", "how to start", "onboarding", "setup", "sign up", "start using", "try it", "how do i begin", "can i try", "empezar", "comenzar", "démarrer", "commencer"], weight: 4 },
  { intent: "comparison", keywords: ["compare", "comparison", "different from", "better than", "instead of", "vs", "versus", "traditional crm", "spreadsheet", "excel", "patchwork", "why use", "why not just use", "comparar", "comparaison", "pourquoi aderiqo", "does this replace excel", "or nah", "replace excel"], weight: 4 },
  { intent: "product_overview", keywords: ["what is aderiqo", "what's aderiqo", "about aderiqo", "what does aderiqo do", "platform", "product overview", "what can aderiqo do", "what do you do", "what are you", "tell me about aderiqo", "what is this", "what do you do", "qué es aderiqo", "que es aderiqo", "qué puede hacer aderiqo", "que puede hacer aderiqo", "qu'est-ce qu'aderiqo", "que peut faire aderiqo", "qu est ce qu", "que peut faire", "what can this do", "what's this thing do", "show me what this thing can do", "what's the point of this", "why would i use this", "bro what can aderiqo do"], weight: 4 },
  { intent: "crm", keywords: ["crm", "customer relationship", "customer system", "customer database", "deal tracker", "sales tracker", "account management system", "gestión de clientes", "crm relaciones", "gestion crm", "relation client"], weight: 4 },
  { intent: "companies", keywords: ["companies", "company", "accounts", "account", "company management", "account management", "organizations", "company records", "account records", "business records", "empresas", "compañías", "cuentas", "entreprises", "comptes", "sociétés", "keep track of my clients", "keep track of clients", "manage my customer", "manage my customers"], weight: 4 },
  { intent: "contacts", keywords: ["contacts", "contact", "people", "relationship management", "contact management", "stakeholders", "decision makers", "contact profiles", "people management", "customer contacts", "contactos", "personas", "contactos comerciales", "contacts", "personnes", "contacts clients"], weight: 4 },
  { intent: "opportunities", keywords: ["opportunities", "opportunity", "pipeline", "deals", "deal", "deal stages", "sales pipeline", "open deals", "pipeline management", "sales pipeline", "open opportunities", "oportunidades", "tratos", "negocios", "opportunités", "affaires", "transactions"], weight: 4 },
  { intent: "tasks", keywords: ["tasks", "task", "follow-up", "follow up", "followups", "to-do", "reminders", "follow-up tasks", "task management", "action items", "to-dos", "work items", "tareas", "seguimiento", "tâches", "suivi", "relance"], weight: 4 },
  { intent: "calendar", keywords: ["calendar", "meetings", "meeting", "scheduling", "schedule", "book meetings", "appointments", "calendar view", "plan my meetings", "scheduling calls", "calendario", "reuniones", "calendrier", "rendez-vous"], weight: 4 },
  { intent: "email", keywords: ["email", "emails", "inbox", "communication", "draft", "outreach", "email communication", "email history", "email customers", "customer emails", "correo", "email comercial", "courriel", "email client"], weight: 4 },
  { intent: "sales", keywords: ["sales", "sales team", "selling", "win deals", "salesperson", "salespeople", "sellers", "quota", "pipeline management", "help my sales team", "close more", "ventas", "equipo de ventas", "vender más", "ventes", "équipe commerciale", "vendre plus", "can this help my sales guys", "help my sales guys", "my sales guys"], weight: 4 },
  { intent: "prospecting", keywords: ["prospecting", "prospector", "leads", "lead", "lead management", "find companies", "discovery", "enrichment", "prospects", "prospect discovery", "find new customers", "lead generation", "prospección", "generación de leads", "búsqueda de clientes", "prospection", "génération de leads", "recherche de prospects"], weight: 4 },
  { intent: "revenue_intelligence", keywords: ["revenue intelligence", "intelligence", "insights", "analytics", "reporting", "business intelligence", "dashboards", "trends", "forecast", "pipeline visibility", "revenue tracking", "visibilidad", "inteligencia de negocios", "análisis", "tendencias", "visibilité", "intelligence commerciale", "analytique", "tendances"], weight: 4 },
  { intent: "ai", keywords: ["aderiqo ai", "what can ai do", "ai features", "how does ai work", "assistant", "capabilities", "automat", "ai capabilities", "what can the ai do", "automate crm", "ai assistant", "ia", "asistente", "inteligencia artificial", "ia aderiqo", "assistant intelligent", "i wanna know about the ai", "wanna know about the ai"], weight: 4 },
  { intent: "integrations", keywords: ["integrations", "integration", "integrate", "integrates", "integrate with", "connect", "api", "third party", "sync", "app store", "connected workflows", "connect tools", "does it work with", "works with", "integración", "conectar con", "compatible con", "intégration", "connecter", "compatible avec", "qué integraciones tiene", "quelles intégrations"], weight: 4 },
  { intent: "security", keywords: ["security", "secure", "privacy", "safe", "data protection", "protect", "how secure", "is it safe", "enterprise security", "certified", "certification", "soc 2", "iso 27001", "compliance", "seguridad", "protección de datos", "privacidad", "conformité", "protection des données", "confidentialité"], weight: 4 },
  { intent: "solutions", keywords: ["industries", "industry", "who is it for", "use case", "who uses", "solutions", "fit my business", "what industries", "who is this for", "is it for me", "work for us", "industrias", "para quién es", "nuestro equipo", "industries", "pour quiest", "notre équipe", "nos métiers"], weight: 3 },
  { intent: "business_problem", keywords: ["forget to follow up", "forgetting to follow up", "missed follow up", "no one follows up", "slips through", "scattered", "different places", "disconnected", "lost context", "patchwork", "manual tracking", "spreadsheet", "excel", "too much time updating", "data entry", "managers don't know", "manager doesn't know", "doesn't know what's happening", "no visibility", "can't see pipeline", "olvida hacer seguimiento", "olvidan hacer seguimiento", "equipo olvida", "oublie de faire le suivi", "équipe oublie", "dispersa", "información dispersa", "datos dispersos", "dispersées", "informations dispersées", "no visibilidad", "no sabemos qué pasa", "pas de visibilité", "ne savons pas ce qui se passe", "mucho tiempo actualizando", "entrada de datos", "beaucoup de saisie", "temps à mettre à jour", "cerrar más", "vender más", "más negocios", "gagner plus", "vendre plus", "plus de business", "customer information is everywhere", "customer data is everywhere", "manager can't see what's happening", "we don't know which opportunities are active", "salespeople aren't following up", "we need one place for customer information", "call people back", "forgetting to call back", "people keep dropping the ball"], weight: 5 },
  { intent: "support", keywords: ["help", "support", "question", "question about", "can you help", "need help", "assistance", "ayuda", "soporte", "ayudar", "aide", "support", "assistance"], weight: 1 },
];

const SHORT_QUERIES: Record<string, { intent: Intent; confidence: number }> = {
  "pricing": { intent: "pricing", confidence: HIGH_CONFIDENCE },
  "crm": { intent: "crm", confidence: HIGH_CONFIDENCE },
  "ai": { intent: "ai", confidence: HIGH_CONFIDENCE },
  "contacts": { intent: "contacts", confidence: HIGH_CONFIDENCE },
  "contact": { intent: "contacts", confidence: HIGH_CONFIDENCE },
  "companies": { intent: "companies", confidence: HIGH_CONFIDENCE },
  "company": { intent: "companies", confidence: HIGH_CONFIDENCE },
  "tasks": { intent: "tasks", confidence: HIGH_CONFIDENCE },
  "task": { intent: "tasks", confidence: HIGH_CONFIDENCE },
  "calendar": { intent: "calendar", confidence: HIGH_CONFIDENCE },
  "sales": { intent: "sales", confidence: HIGH_CONFIDENCE },
  "prospecting": { intent: "prospecting", confidence: HIGH_CONFIDENCE },
  "intelligence": { intent: "revenue_intelligence", confidence: HIGH_CONFIDENCE },
  "security": { intent: "security", confidence: HIGH_CONFIDENCE },
  "integrations": { intent: "integrations", confidence: HIGH_CONFIDENCE },
  "demo": { intent: "demo", confidence: HIGH_CONFIDENCE },
  "integrations?": { intent: "integrations", confidence: HIGH_CONFIDENCE },
  "crm?": { intent: "crm", confidence: HIGH_CONFIDENCE },
  "contacts?": { intent: "contacts", confidence: HIGH_CONFIDENCE },
  "demo?": { intent: "demo", confidence: HIGH_CONFIDENCE },
  "security?": { intent: "security", confidence: HIGH_CONFIDENCE },
  "pricing?": { intent: "pricing", confidence: HIGH_CONFIDENCE },
  "aderiqo": { intent: "product_overview", confidence: HIGH_CONFIDENCE },
  "aderiqo?": { intent: "product_overview", confidence: HIGH_CONFIDENCE },
};

const AMBIGUOUS_SHORT = new Set(["why", "how", "what", "yes", "no", "maybe", "ok", "thanks"]);

export function classifyIntent(normalizedQuery: string): IntentResult {
  const q = normalizedQuery.trim();
  if (!q) {
    return { intent: "unknown", confidence: 0, signals: [] };
  }

  const tokens = q.split(" ");

  // Short exact-match queries
  if (tokens.length === 1 || (tokens.length === 2 && tokens[1] === "?")) {
    const clean = tokens[0].replace("?", "");
    const direct = SHORT_QUERIES[clean] || SHORT_QUERIES[q];
    if (direct) {
      return { intent: direct.intent, confidence: direct.confidence, signals: [`short:${clean}`] };
    }
    if (AMBIGUOUS_SHORT.has(clean)) {
      return { intent: "unknown", confidence: LOW_CONFIDENCE, signals: [`ambiguous-short:${clean}`] };
    }
  }

  // Score each intent by signal matches
  let bestIntent: Intent = "unknown";
  let bestScore = 0;
  let bestSignals: string[] = [];
  const scores = new Map<Intent, { score: number; signals: string[] }>();

  for (const signal of INTENT_SIGNALS) {
    let score = 0;
    const matched: string[] = [];

    for (const kw of signal.keywords) {
      const kwNormalized = normalizeQuery(kw.toLowerCase());
      const kwWords = new Set(kwNormalized.split(" ").filter(Boolean));
      const qWords = new Set(q.split(" ").filter(Boolean));

      const kwEscaped = kwNormalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const kwRegex = new RegExp(`(^|[^a-z0-9])${kwEscaped}([^a-z0-9]|$)`);
      if (kwRegex.test(q) && kwNormalized.length > 1) {
        score += signal.weight;
        matched.push(kw);
      } else if (kwWords.size > 1) {
        let allPresent = true;
        for (const w of kwWords) {
          if (!qWords.has(w)) {
            allPresent = false;
            break;
          }
        }
        if (allPresent) {
          score += Math.max(1, signal.weight - 1);
          matched.push(kw);
        }
      }
    }

    if (score > 0) {
      scores.set(signal.intent, { score, signals: matched });
    }

    if (score > bestScore) {
      bestScore = score;
      bestIntent = signal.intent;
      bestSignals = matched;
    }
  }

  // Prefer business_problem when module intent and business_problem are close
  if (bestIntent !== "business_problem") {
    const bp = scores.get("business_problem");
    if (bp && bestScore - bp.score <= 3) {
      bestIntent = "business_problem";
      bestScore = bp.score;
      bestSignals = bp.signals;
    }
  }

  // Map score to confidence
  let confidence: number;
  if (bestScore >= 10) {
    confidence = HIGH_CONFIDENCE;
  } else if (bestScore >= 5) {
    confidence = MEDIUM_CONFIDENCE;
  } else if (bestScore >= 2) {
    confidence = LOW_CONFIDENCE;
  } else {
    confidence = 0;
  }

  // Business-problem override: if business-problem signals matched strongly
  if (bestIntent === "business_problem" && confidence < MEDIUM_CONFIDENCE) {
    confidence = MEDIUM_CONFIDENCE;
  }

  // If confidence is very low, return unknown rather than guessing
  if (confidence < LOW_CONFIDENCE) {
    return { intent: "unknown", confidence: 0, signals: [] };
  }

  return {
    intent: bestIntent,
    confidence,
    signals: bestSignals,
  };
}
