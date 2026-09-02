import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Contacts — Relationship Management",
  description:
    "Manage every relationship in Aderiqo: contact profiles, company relationships, communication information and follow-up context, all connected to your pipeline.",
  path: "/contacts",
});

export default function ContactsPage() {
  return (
    <FeaturePage
      eyebrow="Contacts"
      title="Every relationship, with its full context."
      subtitle="A contact is more than a name and an email. In Aderiqo, every contact is connected to their company, their deals, their meetings and their conversations."
      sections={[
        {
          eyebrow: "Profiles",
          title: "Complete profiles, zero guesswork.",
          description:
            "Create and enrich contact records with communication information, roles and company links. Aderiqo AI can create and update contacts for you in plain language.",
          bullets: [
            "Rich contact profiles with communication information",
            "Company relationships made explicit",
            "AI-assisted contact creation and enrichment",
            "Fast search across every relationship",
          ],
          visual: "contacts",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "Follow-up context",
          title: "Pick up any conversation where it left off.",
          description:
            "Follow-up context lives on the record — the last meeting, the open task, the recent emails. Your team never has to reconstruct history from memory.",
          bullets: [
            "Follow-up context on every contact",
            "Tasks with ownership and due dates",
            "Meeting and email history in one place",
            "Relationship visibility across the whole team",
          ],
          visual: "cards",
          cards: [
            { title: "Company links", description: "Every contact belongs to a company record with revenue context." },
            { title: "Communication info", description: "Email, phone and role details ready for outreach." },
            { title: "Task history", description: "See what was promised and what's due next." },
            { title: "AI relationship insight", description: "Ask about a relationship and get a contextual answer." },
          ],
        },
      ]}
      ctaTitle="Never lose relationship context again."
      ctaSubtitle="See how Aderiqo manages contacts in a guided demo."
    />
  );
}