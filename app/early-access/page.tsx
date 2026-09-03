import { pageMeta } from "@/lib/site";
import { PageHero, Section } from "@/components/marketing/ui";
import { LeadForm } from "@/components/marketing/lead-form";

export const metadata = pageMeta({
  title: "Early Access",
  description:
    "Aderiqo is in its final product refinement phase. Register your interest for early access and our team will be in touch when the platform is ready for you.",
  path: "/early-access",
});

const POINTS = [
  "Full CRM: companies, contacts, opportunities and pipeline",
  "Aderiqo AI acting on your real records and workflows",
  "Prospecting, tasks, calendar and email in one workspace",
  "Onboarding and support directly from the Aderiqo team",
];

export default function EarlyAccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Early access"
        title="Get early access to Aderiqo."
        subtitle="We're completing the final refinements of the platform with a first group of customers. Register your interest and we'll reach out as soon as Aderiqo is ready for your team."
      />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-xl font-semibold text-ink">What early access includes</h2>
            <ul className="mt-5 space-y-4">
              {POINTS.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden
                    className="brand-gradient mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Early-access teams work directly with us to shape the platform, and receive
              onboarding and support from the Aderiqo team at every step.
            </p>
          </div>
          <LeadForm variant="early-access" />
        </div>
      </Section>
    </>
  );
}