import Link from "next/link";
import { pageMeta } from "@/lib/site";
import { PageHero, Section, SectionHeading, PrimaryButton, SecondaryButton } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Aderiqo plans are designed around your business. Contact sales, book a demo or get started to find the right plan for your team.",
  path: "/pricing",
});

const OPTIONS = [
  {
    title: "Get started",
    body: "Aderiqo is in its final refinement phase. Register your interest for early access and our team will be in touch when the platform is ready for you.",
    action: { label: "Join early access", href: "/early-access" },
    highlight: false,
  },
  {
    title: "Book a demo",
    body: "See Aderiqo end to end — CRM, Aderiqo AI, prospecting and revenue intelligence — with a guided walkthrough tailored to your use cases.",
    action: { label: "Book a demo", href: "/demo" },
    highlight: true,
  },
  {
    title: "Contact sales",
    body: "Larger teams and specific requirements? Talk to us about deployment, onboarding and a plan designed around your organization.",
    action: { label: "Contact sales", href: "/contact" },
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans designed around your business."
        subtitle="We're building Aderiqo with early customers to make sure the platform fits the way they work. Tell us about your team and we'll shape the right plan together."
      />
      <Section>
        <SectionHeading
          center
          eyebrow="How to start"
          title="Three ways to begin with Aderiqo."
          subtitle="Final packaged pricing is being established. Rather than publish numbers that don't reflect your reality yet, we start with your needs."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {OPTIONS.map((opt, i) => (
            <Reveal key={opt.title} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-xl p-7 ${
                  opt.highlight
                    ? "bg-navy-950 text-white shadow-lift"
                    : "border border-line bg-white shadow-card"
                }`}
              >
                {opt.highlight ? (
                  <span
                    aria-hidden
                    className="brand-gradient absolute inset-x-0 top-0 h-1 rounded-t-xl"
                  />
                ) : null}
                <h2 className={`text-xl font-semibold ${opt.highlight ? "text-white" : "text-ink"}`}>
                  {opt.title}
                </h2>
                <p className={`mt-3 flex-1 text-sm leading-relaxed ${opt.highlight ? "text-slate-300" : "text-ink-soft"}`}>
                  {opt.body}
                </p>
                <div className="mt-6">
                  {opt.highlight ? (
                    <PrimaryButton href={opt.action.href} className="w-full justify-center">
                      {opt.action.label}
                    </PrimaryButton>
                  ) : (
                    <SecondaryButton href={opt.action.href} className="w-full justify-center">
                      {opt.action.label}
                    </SecondaryButton>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading center title="What every plan includes." />
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "Full CRM: companies, contacts, opportunities",
              "Aderiqo AI conversational workflows",
              "Tasks, calendar and email in context",
              "Prospecting and lead enrichment",
              "Revenue intelligence and dashboards",
              "Organization isolation and role-based access",
              "Audit logging and secure APIs",
              "Onboarding support from our team",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-line bg-mist px-4 py-3 text-sm text-ink">
                <span aria-hidden className="brand-gradient mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-ink-soft">
          Have pricing questions?{" "}
          <Link href="/contact" className="font-semibold text-electric hover:underline">
            Contact us
          </Link>{" "}
          or{" "}
          <Link href="/demo" className="font-semibold text-electric hover:underline">
            book a demo
          </Link>
          .
        </p>
      </Section>
    </>
  );
}