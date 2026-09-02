import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Core CRM — Companies, Contacts & Opportunities",
  description:
    "Aderiqo's core CRM: centralized company records, contact profiles with relationship context, opportunities with pipeline stages, tasks, calendar and email communication in one workspace.",
  path: "/crm",
});

export default function CrmPage() {
  return (
    <FeaturePage
      eyebrow="Core CRM"
      title="Customer data with real context."
      subtitle="Aderiqo starts with disciplined CRM foundations — companies, contacts, opportunities, tasks, calendar and email. Every record is connected, so context is never lost."
      sections={[
        {
          eyebrow: "Companies",
          title: "Centralized company records.",
          description:
            "Every account in one place, with its contacts, opportunities, revenue context and relationship history attached.",
          bullets: [
            "Centralized company records",
            "Relationship context on every account",
            "Revenue context — pipeline attached to the company",
            "All contacts linked and searchable",
          ],
          visual: "contacts",
        },
        {
          flip: true,
          dark: true,
          eyebrow: "Contacts",
          title: "Know the people behind every account.",
          description:
            "Contact profiles carry communication information, company relationships and follow-up context, so anyone on the team can pick up a conversation where it left off.",
          bullets: [
            "Complete contact profiles",
            "Company relationships made explicit",
            "Communication information in one record",
            "Follow-up context you can act on",
          ],
          visual: "cards",
          cards: [
            { title: "Opportunities", description: "A clear pipeline with deal stages, value, ownership and the relationships behind each deal." },
            { title: "Tasks", description: "Follow-ups with ownership and due dates — connected to the customers they serve." },
            { title: "Calendar", description: "Meetings and scheduling tied to real customer records." },
            { title: "Email", description: "Customer communication in context, next to the records it belongs to." },
          ],
        },
      ]}
      ctaTitle="Run your CRM the way it should run."
      ctaSubtitle="See Aderiqo's core CRM in a guided demo."
    />
  );
}