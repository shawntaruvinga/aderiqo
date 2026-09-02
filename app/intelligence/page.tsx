import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Revenue Intelligence — Pipeline & Business Insights",
  description:
    "Revenue and business intelligence in Aderiqo: pipeline visibility, revenue trends, opportunity analysis, sales performance and activity intelligence from your real CRM data.",
  path: "/intelligence",
});

export default function IntelligencePage() {
  return (
    <FeaturePage
      eyebrow="Revenue intelligence"
      title="Know what's happening before it becomes a problem."
      subtitle="Aderiqo turns everyday CRM activity into business intelligence — pipeline visibility, revenue trends, opportunity analysis and sales performance in one intelligence layer."
      sections={[
        {
          eyebrow: "Pipeline visibility",
          title: "See your pipeline clearly.",
          description:
            "Understand your pipeline by stage, owner and period. Spot stalled opportunities and uneven workloads while there's still time to act.",
          bullets: [
            "Pipeline visibility across every stage and owner",
            "Revenue trends over time",
            "Opportunity analysis and deal progression",
            "Activity intelligence — the work behind the numbers",
          ],
          visual: "intelligence",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "Business insights",
          title: "Insight that leads to action.",
          description:
            "Reports shouldn't be a month-end archaeology project. Aderiqo generates insight from live data, and Aderiqo AI answers business questions in conversation.",
          bullets: [
            "Business insights generated from your real data",
            "Conversational analysis with Aderiqo AI",
            "Sales performance at a glance",
            "Reports and dashboards without manual work",
          ],
          visual: "cards",
          cards: [
            { title: "Revenue trends", description: "Track revenue movement across periods." },
            { title: "Deal analysis", description: "Understand progression and velocity across stages." },
            { title: "Activity intelligence", description: "Connect effort — tasks, meetings, emails — to outcomes." },
            { title: "Ask, don't build", description: "Query your business intelligence in plain language." },
          ],
        },
      ]}
      ctaTitle="Turn pipeline data into business intelligence."
      ctaSubtitle="Book a demo of Aderiqo Revenue Intelligence."
    />
  );
}