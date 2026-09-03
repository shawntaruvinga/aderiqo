import { pageMeta } from "@/lib/site";
import { PageHero, Section } from "@/components/marketing/ui";
import { LeadForm } from "@/components/marketing/lead-form";

export const metadata = pageMeta({
  title: "Book a Demo",
  description:
    "Book a guided Aderiqo demo. See the CRM, Aderiqo AI, prospecting and revenue intelligence using your own use cases.",
  path: "/demo",
});

const AGENDA = [
  "Your current tools and workflows — what's working, what isn't",
  "A guided tour of the CRM: companies, contacts and pipeline",
  "Aderiqo AI acting on real records — creation, questions, workflows",
  "Prospecting, tasks, calendar and email in context",
  "Revenue intelligence and reporting",
  "Next steps and a plan designed around your business",
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo"
        title="See Aderiqo with your own use cases."
        subtitle="A guided, no-pressure walkthrough of the platform. We use your scenarios — not a canned script."
      />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-xl font-semibold text-ink">What a demo covers</h2>
            <ol className="mt-5 space-y-4">
              {AGENDA.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden
                    className="brand-gradient flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-ink-soft">
              Want to use Aderiqo right away?{" "}
              <a href="/early-access" className="font-medium text-electric hover:underline">
                Join early access
              </a>{" "}
              and our team will be in touch when the platform is ready for you.
            </p>
          </div>
          <LeadForm variant="demo" />
        </div>
      </Section>
    </>
  );
}