import type { KnowledgeTopic } from "./types";

export const SECURITY_TOPICS: KnowledgeTopic[] = [
  {
    id: "security",
    section: "security",
    keywords: ["security", "secure", "privacy", "safe", "data protection", "protect", "how secure", "is it safe", "enterprise security", "certified", "certification", "soc 2", "iso 27001", "compliance"],
    aliases: ["is my data safe", "is it secure", "who can see", "data privacy", "security architecture", "security principles", "compliance", "seguridad", "protección de datos", "privacidad", "conformité", "protection des données", "confidentialité"],
    related: [],
    content:
      "Aderiqo is built with enterprise security principles: secure authentication, organization-level isolation of customer data, role-based access control, tenant isolation, audit logging, and secure API authorization. Sensitive AI actions require confirmation and are auditable. Integrations and service credentials are kept server-side and never exposed to clients. Aderiqo does NOT claim third-party certifications such as SOC 2, ISO 27001, HIPAA, PCI or GDPR certification. The public website and this public assistant do not access any private CRM data.",
  },
];
