import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Integrations — Connected Workflows",
  description:
    "Aderiqo integrations: prospecting data, email enrichment, verification, delivery and secure API access — connected directly into your CRM workflow.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <FeaturePage
      eyebrow="Integrations"
      title="Connected workflows, not connector sprawl."
      subtitle="Aderiqo integrates the services your prospecting and communication workflows depend on directly into the CRM — so data flows into records instead of across tools."
      sections={[
        {
          eyebrow: "Data services",
          title: "Enrichment and prospecting data, built in.",
          description:
            "Aderiqo connects to lead discovery, enrichment and verification services to power the Prospector and keep CRM records complete.",
          visual: "cards",
          cards: [
            { title: "Prospecting data", description: "Lead and company discovery services behind the Prospector." },
            { title: "Email enrichment", description: "Contact enrichment keeps records complete and current." },
            { title: "Email verification", description: "Verification keeps outreach lists healthy." },
            { title: "Email delivery", description: "Transactional email delivery for customer communication." },
          ],
        },
        {
          dark: true,
          flip: true,
          eyebrow: "Platform",
          title: "Secure, authorized connectivity.",
          description:
            "Integrations run through secure, authorized APIs. Credentials stay server-side, access is controlled, and every connection serves the CRM — never the other way around.",
          bullets: [
            "Secure API authorization for all connections",
            "Credentials kept server-side, never exposed",
            "AI as a native platform capability — no add-on connectors",
            "Designed for connected customer workflows end to end",
          ],
          visual: "cards",
          cards: [
            { title: "Aderiqo AI", description: "Native intelligence across every module — no external chat bolt-ons." },
            { title: "API access", description: "Authorized API access for custom connected workflows." },
            { title: "Server-side secrets", description: "Keys and credentials never touch the client." },
            { title: "More coming", description: "Additional integrations are planned — ask us about your stack." },
          ],
        },
      ]}
      ctaTitle="Connect the services your business depends on."
      ctaSubtitle="Talk to us about integrating your existing stack."
    />
  );
}