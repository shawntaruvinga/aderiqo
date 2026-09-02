import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Sales — Pipeline & Opportunity Management",
  description:
    "Manage your sales pipeline in Aderiqo: opportunities with deal stages, revenue visibility, task-driven follow-ups and activity that keeps deals moving.",
  path: "/sales",
});

export default function SalesPage() {
  return (
    <FeaturePage
      eyebrow="Sales"
      title="A pipeline your team actually keeps updated."
      subtitle="Aderiqo makes pipeline management part of the daily workflow — opportunities connect to companies, contacts, tasks and meetings, so keeping deals current takes minutes, not hours."
      sections={[
        {
          eyebrow: "Pipeline",
          title: "Every deal, every stage, every owner.",
          description:
            "Track opportunities through your sales process with clear stages, values and ownership. AI helps you keep records current and answer pipeline questions instantly.",
          bullets: [
            "Opportunities with deal stages and revenue",
            "Ownership and accountability on every deal",
            "Instant answers: “Which deals are most likely to close this month?”",
            "Pipeline context attached to companies and contacts",
          ],
          visual: "pipeline",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "Execution",
          title: "From conversation to closed deal.",
          description:
            "Sales work is follow-up work. Aderiqo connects every meeting, task and email to the opportunities they serve, so momentum never depends on memory.",
          bullets: [
            "Tasks and follow-ups with owners and due dates",
            "Meetings scheduled and linked to deals",
            "Email communication in context",
            "AI-assisted updates and next-step suggestions",
          ],
          visual: "cards",
          cards: [
            { title: "Deal stages", description: "Move opportunities through your process with full context at every step." },
            { title: "Revenue tracking", description: "See pipeline value and revenue by stage, owner and period." },
            { title: "Follow-up discipline", description: "Task-driven follow-ups keep every deal moving." },
            { title: "Pipeline Q&A", description: "Ask Aderiqo AI about your pipeline instead of building reports." },
          ],
        },
      ]}
      ctaTitle="Give your sales team an intelligent pipeline."
      ctaSubtitle="Book a demo and see Aderiqo Sales in action."
    />
  );
}