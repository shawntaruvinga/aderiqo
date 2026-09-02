import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Tasks — Follow-ups & Workflow",
  description:
    "Manage follow-ups and everyday work in Aderiqo: tasks with ownership, due dates and workflow context, connected to the customers and deals they serve.",
  path: "/tasks",
});

export default function TasksPage() {
  return (
    <FeaturePage
      eyebrow="Tasks"
      title="Follow-ups that never fall through the cracks."
      subtitle="Aderiqo turns commitments into tasks with owners and due dates — connected to the companies, contacts and opportunities they involve."
      sections={[
        {
          eyebrow: "Task management",
          title: "Clear ownership. Real due dates.",
          description:
            "Every task knows who owns it, when it's due and which customer it serves. Your dashboard keeps today's work in front of you.",
          bullets: [
            "Follow-ups with clear ownership",
            "Due dates and prioritization",
            "Tasks linked to companies, contacts and deals",
            "Dashboard view of what's due now",
          ],
          visual: "tasks",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "AI-assisted workflow",
          title: "Delegate the busywork.",
          description:
            "“Schedule a follow-up with Sarah next Tuesday.” Aderiqo AI creates the task, links it to the right records and keeps your workflow moving.",
          bullets: [
            "Create tasks and follow-ups by conversation",
            "Multi-step workflows handled in one request",
            "Reminders keep deals in motion",
            "Task activity feeds revenue intelligence",
          ],
          visual: "cards",
          cards: [
            { title: "Linked tasks", description: "Every task is connected to the customer context it belongs to." },
            { title: "Team accountability", description: "Ownership and status visible across the team." },
            { title: "AI creation", description: "Natural-language task creation on real records." },
            { title: "Follow-up discipline", description: "Nothing promised is ever forgotten." },
          ],
        },
      ]}
      ctaTitle="Keep every commitment on track."
      ctaSubtitle="See task management in Aderiqo with a guided demo."
    />
  );
}