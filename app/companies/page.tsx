import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Companies — Account Management",
  description:
    "Centralized company records in Aderiqo: account management with relationship context, revenue context, linked contacts and AI-assisted research.",
  path: "/companies",
});

export default function CompaniesPage() {
  return (
    <FeaturePage
      eyebrow="Companies"
      title="One record of truth for every account."
      subtitle="Aderiqo keeps your company records centralized and connected — contacts, opportunities, tasks, meetings and email all attached to the account they belong to."
      sections={[
        {
          eyebrow: "Account management",
          title: "The whole account on one screen.",
          description:
            "Open a company and see its contacts, open opportunities, revenue context and upcoming work. No more switching tools to understand an account.",
          bullets: [
            "Centralized company records",
            "Linked contacts and decision-makers",
            "Revenue and pipeline context on the account",
            "Relationship and activity history",
          ],
          visual: "contacts",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "Research and capture",
          title: "From prospect to account in one step.",
          description:
            "Capture companies from prospecting directly into your CRM with AI-assisted enrichment, so new accounts arrive complete and connected from day one.",
          bullets: [
            "Capture companies from prospecting",
            "AI-assisted record enrichment",
            "Automatic linking of related contacts and deals",
            "Consistent, searchable account data",
          ],
          visual: "cards",
          cards: [
            { title: "Relationship context", description: "Understand the people and history behind each account." },
            { title: "Revenue context", description: "Pipeline value and won revenue attached to the company." },
            { title: "Team visibility", description: "Everyone works from the same account record." },
            { title: "AI account Q&A", description: "Ask about an account and get answers from its records." },
          ],
        },
      ]}
      ctaTitle="Give every account a single source of truth."
      ctaSubtitle="Book a demo of Aderiqo company management."
    />
  );
}