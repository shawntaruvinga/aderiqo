import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Prospecting — Lead Discovery & Enrichment",
  description:
    "Find the companies worth talking to. Aderiqo prospecting: prospect discovery, company research, decision-maker discovery, lead enrichment and CRM capture with AI assistance.",
  path: "/prospecting",
});

export default function ProspectingPage() {
  return (
    <FeaturePage
      eyebrow="Prospecting"
      title="Find the companies worth talking to."
      subtitle="Aderiqo's Prospector helps you discover relevant companies, research them, identify the decision-makers and capture them into your CRM — with AI assisting at every step."
      sections={[
        {
          eyebrow: "Discovery",
          title: "Build a target list that deserves outreach.",
          description:
            "Search for companies by the attributes that matter to your business, then research each prospect before the first conversation.",
          bullets: [
            "Prospect discovery by industry, size and market",
            "Company research before outreach",
            "Decision-maker discovery within target companies",
            "Shortlists you can work through systematically",
          ],
          visual: "cards",
          cards: [
            { title: "Lead enrichment", description: "Enrich records with contact and company information." },
            { title: "Email verification", description: "Keep your outreach list healthy and deliverable." },
            { title: "One-click CRM capture", description: "Turn a prospect into a company and contact record instantly." },
            { title: "AI-assisted search", description: "Aderiqo AI helps refine and act on prospecting work." },
          ],
        },
        {
          dark: true,
          flip: true,
          eyebrow: "Into the CRM",
          title: "From prospect to pipeline, connected.",
          description:
            "Captured prospects don't sit in a spreadsheet. They become companies and contacts in your CRM, ready for tasks, meetings, opportunities and revenue intelligence.",
          bullets: [
            "Prospects captured directly into the CRM",
            "Records linked to your existing account structure",
            "Prospecting activity visible to the whole team",
            "AI workflows connect prospecting to follow-up",
          ],
          visual: "pipeline",
        },
      ]}
      ctaTitle="Fill your pipeline with the right companies."
      ctaSubtitle="Book a demo of the Aderiqo Prospector."
    />
  );
}