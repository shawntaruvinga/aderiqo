/**
 * Lightweight natural-language preprocessing for the public Aderiqo AI.
 *
 * Goals:
 * - punctuation tolerance
 * - capitalization normalization
 * - typo tolerance for common Aderiqo / CRM terms
 * - simple language detection (EN / ES / FR)
 * - whitespace normalization
 *
 * This is intentionally small and dependency-free.
 */

const PUNCTUATION_RE = /[^\p{L}\p{N}\s'-]/gu;
const WHITESPACE_RE = /\s+/g;

const TYPO_MAP: Record<string, string> = {
  aderiq: "aderiqo",
  aderiico: "aderiqo",
  aderio: "aderiqo",
  aderiqoo: "aderiqo",
  aderico: "aderiqo",
  calender: "calendar",
  contcts: "contacts",
  contct: "contact",
  oportunities: "opportunities",
  oportunity: "opportunity",
  opportunites: "opportunities",
  prospeting: "prospecting",
  prospet: "prospect",
  prospekting: "prospecting",
  inteligence: "intelligence",
  intellegence: "intelligence",
  followup: "follow-up",
  integations: "integrations",
  integratons: "integrations",
  securty: "security",
  secuirity: "security",
  platfrom: "platform",
  platfrm: "platform",
  busines: "business",
  bussiness: "business",
  oppurtunity: "opportunity",
  oppurtunities: "opportunities",
  revanue: "revenue",
  revinue: "revenue",
  cusotmer: "customer",
  cusotmers: "customers",
  salse: "sales",
  saless: "sales",
  dem0: "demo",
  demoo: "demo",
  pipelin: "pipeline",
  pipelne: "pipeline",
  organiztion: "organization",
  organizaton: "organization",
  enroll: "enroll",
  enrol: "enroll",
  enrollement: "enrollment",
  enrolement: "enrollment",
  calenderio: "calendario",
  segimiento: "seguimiento",
  seguimiento: "seguimiento",
  oportunidad: "opportunity",
  opportutnity: "opportunity",
  opportutnities: "opportunities",
  compny: "company",
  wat: "what",
  bro: "bro",
  nah: "nah",
  guy: "guy",
  guyz: "guys",
  folow: "follow",
  folowup: "follow-up",
  calendr: "calendar",
  calandar: "calendar",
  oppotunity: "opportunity",
  oppotunities: "opportunities",
  contak: "contact",
  contaks: "contacts",
  compaines: "companies",
  compaine: "company",
  inteligencia: "intelligence",
  inteligente: "intelligence",
  integração: "integration",
  vventas: "ventas",
};

const KNOWN_TERMS = new Set([
  "aderiqo",
  "crm",
  "ai",
  "sales",
  "contacts",
  "companies",
  "opportunities",
  "tasks",
  "calendar",
  "email",
  "prospecting",
  "intelligence",
  "security",
  "integrations",
  "pricing",
  "demo",
  "platform",
  "dashboard",
  "revenue",
  "pipeline",
  "follow-up",
  "followup",
  "follow up",
  "workspace",
  "connected",
  "clovexa",
  "ardenzatech",
]);

export type Language = "en" | "es" | "fr" | "unknown";

interface LanguageResult {
  language: Language;
  confidence: number;
}

function detectLanguageInternal(text: string): LanguageResult {
  const lower = text.toLowerCase();
  // Normalize for language detection: strip punctuation, replace apostrophes with spaces, normalize whitespace
  const normalized = lower.replace(PUNCTUATION_RE, " ").replace(/'/g, " ").replace(WHITESPACE_RE, " ").trim();
  const tokens = normalized.split(" ").flatMap((t) => t.split("-")).filter(Boolean);

  let en = 0;
  let es = 0;
  let fr = 0;

  const enWords = new Set([
    "what", "how", "why", "who", "can", "does", "is", "are", "the", "this",
    "that", "help", "sales", "team", "crm", "ai", "platform", "product",
    "features", "security", "pricing", "demo", "contact", "company",
    "customer", "opportunity", "pipeline", "calendar", "email", "tasks",
    "follow", "up", "integrations", "revenue", "intelligence", "prospecting",
    "track", "deals", "forget", "scattered", "manage", "have", "does",
  ]);
  const esWords = new Set([
    "qué", "cómo", "por", "quién", "puede", "hacer", "ayuda",
    "equipo", "ventas", "plataforma", "producto", "precio", "demo",
    "contacto", "empresa", "cliente", "oportunidad", "pipeline",
    "calendario", "correo", "tareas", "seguimiento", "integración",
    "ingresos", "inteligencia", "prospección", "seguridad",
    "hacer", "puede", "ayudar", "ventas", "equipo", "seguimiento",
    "controlar", "dispersa", "necesitamos", "olvida", "cuántos", "clientes",
    "tiene", "para", "mi", "nuestro", "nosotros", "usamos", "excel",
  ]);
  const frWords = new Set([
    "que", "qu", "comment", "pourquoi", "qui", "peut", "faire", "aide",
    "équipe", "ventes", "plateforme", "produit", "prix", "démo",
    "contact", "entreprise", "client", "opportunité", "pipeline",
    "calendrier", "email", "tâches", "suivi", "intégration",
    "revenu", "intelligence", "prospection", "sécurité",
    "comment", "peut", "aide", "équipe", "commerciale", "suivi",
    "utilisons", "dispersées", "besoin", "visibilité", "mon", "mes",
    "est", "ce", "pour", "notre", "nous", "adériqo",
  ]);

  for (const t of tokens) {
    if (enWords.has(t)) en++;
    if (esWords.has(t)) es++;
    if (frWords.has(t)) fr++;
  }

  const max = Math.max(en, es, fr);
  if (max === 0) return { language: "unknown", confidence: 0 };

  const total = en + es + fr;
  const confidence = total > 0 ? max / total : 0;

  if (en === max) return { language: "en", confidence };
  if (es === max) return { language: "es", confidence };
  return { language: "fr", confidence };
}

export function detectLanguage(text: string): LanguageResult {
  return detectLanguageInternal(text);
}

export function normalizeQuery(raw: string): string {
  if (!raw) return "";

  let text = raw.toLowerCase();

  // Normalize common ASCII look-alikes / obvious encoding artifacts
  text = text
    .replace(/[`‘’“”„]/g, "'")
    .replace(/[–—−]/g, "-")
    .replace(/\u00a0/g, " ")
    .replace(/\u200b/g, "");

  // Strip punctuation, but preserve hyphens temporarily
  text = text.replace(PUNCTUATION_RE, " ");

  // Replace apostrophes with spaces (contractions like "qu'est" -> "qu est")
  text = text.replace(/'/g, " ");

  // Replace hyphens with spaces for matching purposes
  text = text.replace(/-/g, " ");

  // Normalize whitespace
  text = text.replace(WHITESPACE_RE, " ").trim();

  // Apply typo corrections (only for unambiguous known terms)
  const words = text.split(" ");
  const corrected = words.map((w) => {
    const clean = w.replace(/[^a-z0-9-]/g, "");
    if (KNOWN_TERMS.has(clean)) return w;
    const mapped = TYPO_MAP[clean];
    if (mapped) return mapped;
    return w;
  });

  return corrected.join(" ").trim();
}

export function originalLooksLike(raw: string): boolean {
  const t = raw.trim();
  return t.length > 0 && t !== t.toUpperCase() && t !== t.toLowerCase();
}
