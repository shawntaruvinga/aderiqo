import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Calendar — Meetings & Scheduling",
  description:
    "Meetings and scheduling in Aderiqo: a calendar connected to your companies, contacts, opportunities and follow-ups, with AI-assisted scheduling.",
  path: "/calendar",
});

export default function CalendarPage() {
  return (
    <FeaturePage
      eyebrow="Calendar"
      title="Meetings with context, not just invites."
      subtitle="Aderiqo's calendar connects every meeting to the customer records it involves — so walking into a call means knowing the account, the deal and the history."
      sections={[
        {
          eyebrow: "Scheduling",
          title: "Every meeting in one place.",
          description:
            "Plan your week with meetings, follow-ups and customer touchpoints side by side. Schedule directly from a company, contact or opportunity.",
          bullets: [
            "Meetings and follow-ups in one calendar",
            "Scheduling from any customer record",
            "Meeting context attached to deals and accounts",
            "Preparation and follow-up tasks generated from meetings",
          ],
          visual: "calendar",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "AI-assisted scheduling",
          title: "Let AI handle the logistics.",
          description:
            "“Schedule a follow-up with Sarah next Tuesday.” Aderiqo AI finds the slot, creates the event and links it to the right contact and opportunity.",
          bullets: [
            "Natural-language scheduling",
            "Events linked to companies and deals automatically",
            "Meeting outcomes captured into the CRM",
            "Calendar activity feeds pipeline intelligence",
          ],
          visual: "cards",
          cards: [
            { title: "Connected events", description: "Every event knows which company and deal it serves." },
            { title: "Follow-up ready", description: "Turn any meeting into tasks and next steps." },
            { title: "Team coordination", description: "See team availability alongside customer meetings." },
            { title: "Context on arrival", description: "Open the meeting and see the full account history." },
          ],
        },
      ]}
      ctaTitle="Make every meeting count."
      ctaSubtitle="Book a demo of Aderiqo Calendar."
    />
  );
}