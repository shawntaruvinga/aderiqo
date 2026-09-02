import { pageMeta } from "@/lib/site";
import { Eyebrow, PrimaryButton, SecondaryButton, Section, SectionHeading, CtaBanner } from "@/components/marketing/ui";
import { AiExperience } from "@/components/marketing/ai-experience";
import { Reveal } from "@/components/marketing/reveal";

export const metadata = pageMeta({
  title: "Aderiqo AI — Conversational CRM",
  description:
    "Aderiqo AI is a CRM-native assistant: natural-language CRM actions, context awareness, multi-step workflows, relationship intelligence, memory and confirmation before sensitive actions. Ask anything about Aderiqo.",
  path: "/ai",
});

const CAPABILITIES = [
  {
    category: "EXPLORE",
    question: "What is Aderiqo?",
    description: "Understand the platform, its modules, and how AI is built into the CRM — not bolted on.",
  },
  {
    category: "UNDERSTAND",
    question: "How does Aderiqo work?",
    description: "See how companies, contacts, opportunities, tasks, calendar and email connect in one workspace.",
  },
  {
    category: "SOLVE",
    question: "How can Aderiqo help my business?",
    description: "Get guidance matched to your situation — sales, prospecting, service, or operations.",
  },
  {
    category: "DISCOVER",
    question: "What can Aderiqo AI do?",
    description: "Multi-step workflows, conversational context, pipeline questions, and follow-up management.",
  },
  {
    category: "EVALUATE",
    question: "Is Aderiqo right for my team?",
    description: "Compare Aderiqo against spreadsheets, patchwork tools, and traditional CRMs.",
  },
];

const BUSINESS_PROBLEMS = [
  {
    problem: "Lost follow-ups",
    signal: "My sales team keeps losing track of follow-ups.",
    answer:
      "Aderiqo brings customer relationships, opportunities, tasks and calendar activity into one connected workspace. Follow-ups stay attached to the customer record, with owners and due dates — so nothing falls through.",
  },
  {
    problem: "Scattered customer data",
    signal: "Our customer information lives in ten different places.",
    answer:
      "Aderiqo is a connected CRM: companies, contacts, opportunities, tasks, meetings and emails share one data model. Open any account and see the full relationship history in one place.",
  },
  {
    problem: "Manual pipeline tracking",
    signal: "We track deals in spreadsheets and lose visibility.",
    answer:
      "Aderiqo's revenue intelligence turns everyday CRM activity into pipeline visibility, revenue trends and deal progression — built from your actual data, not exported reports.",
  },
];

export default function AiPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* HERO — Split layout: brand + CTAs LEFT, live AI RIGHT         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="hero-grid absolute inset-0" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — brand, headline, CTAs */}
            <div>
              <Eyebrow dark>ADERIQO AI</Eyebrow>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
                Meet the intelligence behind Aderiqo.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Explore the platform, understand how it works, and discover how Aderiqo can help your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton href="/demo" external className="min-w-44">
                  Book a demo
                </PrimaryButton>
                <SecondaryButton href="/contact" dark className="min-w-44">
                  Contact us
                </SecondaryButton>
              </div>
            </div>

            {/* Right column — large interactive AI interface */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-acyan/10 via-electric/10 to-aviolet/10 blur-2xl"
              />
              <div className="relative">
                <AiExperience />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AI IN ACTION — business problem → understanding → capability   */}
      {/* ============================================================ */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="AI in action"
            title="Aderiqo AI understands your business problems."
            subtitle="It does not just match keywords. It connects your situation to the Aderiqo capabilities that solve it."
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {BUSINESS_PROBLEMS.map((item, i) => (
            <Reveal key={item.problem} delay={i * 120}>
              <div className="grid gap-6 rounded-2xl border border-line bg-white p-6 shadow-card sm:grid-cols-[auto_1fr] sm:gap-8 lg:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-xl">
                  ✨
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                    {item.problem}
                  </p>
                  <p className="mt-1 text-sm italic text-ink-soft">"{item.signal}"</p>
                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-mist p-4">
                    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/10 text-[11px] font-bold text-electric">
                      ✓
                    </span>
                    <p className="text-sm leading-relaxed text-ink">{item.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================================================ */}
      {/* WHAT YOU CAN ASK — capability categories                      */}
      {/* ============================================================ */}
      <Section className="bg-gradient-to-b from-white to-mist">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Capabilities"
            title="What you can ask Aderiqo AI."
            subtitle="The public assistant explains the full Aderiqo platform. In the authenticated CRM, Aderiqo AI acts on your real records — always with your confirmation."
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.category} delay={i * 80}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <p className="text-xs font-semibold tracking-wide text-electric uppercase">
                  {cap.category}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">"{cap.question}"</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================================================ */}
      {/* PRODUCT CONTEXT — how AI fits into the platform               */}
      {/* ============================================================ */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="CRM-native AI"
              title="AI that lives inside your CRM."
              subtitle="Aderiqo AI is not a chatbot bolted onto a CRM. It understands companies, contacts, opportunities, tasks, calendar and email — because it operates on the same data model."
            />
            <div className="mt-6 space-y-4">
              {[
                "Context across the whole conversation — not just the last message",
                "Multi-step workflows that create and update real records",
                "Sensitive actions always require your confirmation",
                "Answers grounded in your actual pipeline and customer data",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/10 text-[11px] font-bold text-electric"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryButton href="/demo" external className="min-w-44">
                See it in a demo
              </PrimaryButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-2xl border border-line bg-mist p-6 shadow-card sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold tracking-wide text-electric uppercase">You</span>
                </div>
                <div className="rounded-xl rounded-br-sm bg-electric/10 px-4 py-3 text-sm text-ink">
                  "Create a contact for John at Acme. He&apos;s the CTO and his email is john@acme.com."
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold tracking-wide text-acyan uppercase">Aderiqo AI</span>
                </div>
                <div className="rounded-xl rounded-bl-sm border border-line bg-white px-4 py-3 text-sm text-ink">
                  <p className="mb-2">I&apos;ll create John as a contact at Acme Industries.</p>
                  <ul className="space-y-1.5 text-ink-soft">
                    <li className="flex items-center gap-2">
                      <span aria-hidden className="brand-gradient flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">
                        ✓
                      </span>
                      Acme matched to existing company
                    </li>
                    <li className="flex items-center gap-2">
                      <span aria-hidden className="brand-gradient flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">
                        ✓
                      </span>
                      Contact created: John, CTO
                    </li>
                    <li className="flex items-center gap-2">
                      <span aria-hidden className="brand-gradient flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">
                        ✓
                      </span>
                      Email set to john@acme.com
                    </li>
                  </ul>
                  <p className="mt-2.5 border-t border-line pt-2.5 font-semibold text-ink">
                    John has been added to Acme Industries.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <CtaBanner
        title="Put AI to work inside your CRM."
        subtitle="See Aderiqo AI act on real customer data in a guided demo."
      />
    </>
  );
}
