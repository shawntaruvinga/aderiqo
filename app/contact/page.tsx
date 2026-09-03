import { pageMeta } from "@/lib/site";
import { PageHero, Section } from "@/components/marketing/ui";
import { LeadForm } from "@/components/marketing/lead-form";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Contact the Aderiqo team. Tell us about your business and what you'd like to accomplish — we'll get back to you shortly.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Aderiqo team."
        subtitle="Questions about the platform, pricing, security or your specific workflows? Send us a message and we'll get back to you."
      />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-xl font-semibold text-ink">What happens next</h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
              <li className="flex gap-3">
                <span aria-hidden className="brand-gradient mt-1 h-1.5 w-1.5 shrink-0 rounded-full" />
                We read every message and reply personally — no automated funnels.
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="brand-gradient mt-1 h-1.5 w-1.5 shrink-0 rounded-full" />
                If you'd like to see the product, we'll suggest a{" "}
                <a href="/demo" className="font-medium text-electric hover:underline">guided demo</a>{" "}
                tailored to your use cases.
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="brand-gradient mt-1 h-1.5 w-1.5 shrink-0 rounded-full" />
                Security or procurement questions? We're happy to walk through our architecture with you.
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-line bg-mist p-6">
              <p className="text-sm font-semibold text-ink">Aderiqo by ArdenzaTech</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                AI-powered CRM and business operating platform, built by ArdenzaTech — a technology
                company building intelligent software.
              </p>
            </div>
          </div>
          <LeadForm variant="contact" />
        </div>
      </Section>
    </>
  );
}