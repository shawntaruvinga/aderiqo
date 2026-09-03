import { pageMeta, ARDENZATECH_URL } from "@/lib/site";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

export const metadata = pageMeta({
  title: "About Aderiqo — Built by ArdenzaTech",
  description:
    "Aderiqo is an AI-powered B2B sales platform developed by ArdenzaTech. Learn about the product vision, the connected-sales philosophy, and the team behind Aderiqo.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We're building the CRM we always wanted to use."
        subtitle="Aderiqo is an AI-powered B2B sales platform developed by ArdenzaTech — built on a simple conviction: the CRM should do the work, not just store it."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="The company"
            title="Aderiqo is developed by ArdenzaTech."
            subtitle="ArdenzaTech builds practical software for how businesses actually operate. Aderiqo is its flagship product: a connected sales platform that starts with disciplined CRM foundations and makes them intelligent."
          />
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              Most teams don&apos;t suffer from a lack of tools — they suffer from fragmentation. Customer
              records in one place, conversations in another, tasks in a third, reporting in a
              fourth. Every handoff loses context, and every context loss costs time, follow-up and
              eventually revenue.
            </p>
            <p>
              Aderiqo takes the opposite approach. Companies, contacts, opportunities, tasks,
              calendar, email, prospecting and revenue intelligence share one data model. That shared
              foundation is what makes AI genuinely useful: when Aderiqo AI acts, it acts on the same
              connected records your team works in — not on a bolt-on chatbot&apos;s guess.
            </p>
            <p>
              Aderiqo represents ArdenzaTech&apos;s product-focused approach: helping organizations manage
              relationships, sales, operations and revenue in one intelligent workspace. To learn
              more about the company behind the product,{" "}
              <a
                href={ARDENZATECH_URL}
                rel="noopener"
                className="font-semibold text-electric hover:underline"
              >
                explore ArdenzaTech
                <span aria-hidden> ↗</span>
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Our philosophy"
              title="CRM first. AI makes the CRM intelligent."
              subtitle="The product is not merely an AI chatbot. Aderiqo is a serious business platform where AI is deeply integrated into the CRM."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-5">
              {[
                ["Structure before intelligence", "AI can only be as good as the data model beneath it. We build the CRM properly first."],
                ["Delegation with control", "Aderiqo AI acts on real records, but sensitive actions always require human confirmation."],
                ["One connected context", "Every company, contact, deal, task, meeting and email belongs to one customer graph."],
                ["Insight as a byproduct", "When work happens in one workspace, business intelligence stops being a month-end project."],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-mist">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            center
            eyebrow="Product history"
            title="From Clovexa to Aderiqo."
            subtitle="Aderiqo was formerly known as Clovexa during its early development. As the platform evolved, we introduced a new name and identity that better represents the product we're building today."
          />
          <Reveal className="mt-10">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-line bg-white p-8 shadow-card sm:flex-row sm:justify-center sm:gap-6">
              {[
                { name: "Clovexa", note: "Early development", muted: true },
                { name: "Aderiqo", note: "Today's platform" },
                { name: "Aderiqo AI", note: "Native AI capability" },
              ].map((step, i) => (
                <div key={step.name} className="flex items-center gap-6 sm:gap-4">
                  {i > 0 ? (
                    <span aria-hidden className="brand-gradient bg-clip-text text-xl font-bold text-transparent">
                      ↓
                    </span>
                  ) : null}
                  <div className="text-center">
                    <p className={`text-lg font-semibold ${step.muted ? "text-ink-soft" : "text-ink"}`}>
                      {step.name}
                    </p>
                    <p className="text-xs text-ink-soft">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-8 space-y-4 text-center text-base leading-relaxed text-ink-soft">
            <p>
              Aderiqo is built and operated by ArdenzaTech. The technology, vision and product
              continue forward under the Aderiqo name.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          center
          eyebrow="The problem we solve"
          title="Customer data shouldn't live in ten different places."
          subtitle="Aderiqo brings customers, sales, conversations, tasks and business intelligence together in one intelligent workspace — so teams think in outcomes instead of navigating screens."
        />
      </Section>

      <CtaBanner
        title="Join us on the journey."
        subtitle="See what an AI-powered, CRM-first business platform can do for your team."
      />
    </>
  );
}
