import Link from "next/link";
import { pageMeta, appPath } from "@/lib/site";
import { Reveal } from "@/components/marketing/reveal";
import {
  Section,
  SectionHeading,
  Eyebrow,
  PrimaryButton,
  SecondaryButton,
  CheckList,
  CtaBanner,
} from "@/components/marketing/ui";
import {
  HeroMock,
  AiConversationMock,
  PipelineMock,
  IntelligenceMock,
  ContactsMock,
} from "@/components/marketing/mockups";

export const metadata = pageMeta({
  title: "Aderiqo — AI-Powered CRM",
  description:
    "AI-powered CRM that brings customers, sales, conversations, tasks and business intelligence together in one intelligent workspace. CRM first. AI makes the CRM intelligent.",
  path: "/",
});

const MODULES = [
  "CRM", "AI", "Sales", "Prospecting", "Tasks", "Calendar", "Email", "Revenue Intelligence",
];

const FRAGMENTS = [
  { icon: "👤", label: "Customer records" },
  { icon: "✉️", label: "Emails" },
  { icon: "📅", label: "Meetings" },
  { icon: "✅", label: "Tasks" },
  { icon: "📝", label: "Notes" },
  { icon: "💼", label: "Opportunities" },
  { icon: "📊", label: "Reports" },
  { icon: "🔁", label: "Follow-ups" },
];

const AI_EXAMPLES = [
  "Create a contact for John at Acme.",
  "Show me our open opportunities.",
  "Schedule a follow-up with Sarah next Tuesday.",
  "Which deals are most likely to close this month?",
  "Create Acme, add John as a contact, and schedule a follow-up.",
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="hero-grid absolute inset-0" />
        <div
          aria-hidden
          className="brand-gradient absolute -top-40 left-1/2 h-[28rem] w-[70rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[140px]"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pt-24 lg:pb-28">
          <div>
            <p className="text-5xl font-bold tracking-tight text-gradient sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              ADERIQO
            </p>
            <div className="mt-3" />
            <Eyebrow dark>AI-powered CRM · by ArdenzaTech</Eyebrow>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
              Your business,{" "}
              <span className="text-gradient">intelligently connected.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Aderiqo is an AI-powered CRM that brings customers, sales,
              conversations, tasks and business intelligence together in one
              intelligent workspace.
            </p>
            <p className="mt-3 text-sm font-semibold tracking-wide text-slate-400 uppercase">
              CRM first. AI makes the CRM intelligent.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={appPath("/register")}
                className="brand-gradient inline-flex min-w-44 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
              >
                Get started <span aria-hidden>→</span>
              </a>
              <SecondaryButton href="/demo" dark className="min-w-44">
                Book a demo
              </SecondaryButton>
            </div>
            <Link
              href="/ai"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-acyan transition hover:text-white"
            >
              Explore Aderiqo AI <span aria-hidden>→</span>
            </Link>
          </div>
          <Reveal delay={150} className="animate-float-slow">
            <HeroMock />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------ TRUST / VALUE STRIP */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-widest text-ink-soft uppercase">
            One workspace that brings together
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {MODULES.map((m) => (
              <li key={m} className="rounded-full border border-line bg-mist px-4 py-1.5 text-sm font-medium text-ink">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------------------------------------------- PROBLEM */}
      <Section>
        <SectionHeading
          center
          eyebrow="The problem"
          title="Your customer data shouldn't live in ten different places."
          subtitle="Customer records, emails, meetings, tasks, notes, opportunities, reports and follow-ups. When every piece of context sits in a different tool, selling becomes administration — and insight arrives too late."
        />
        <div className="mx-auto mt-12 grid max-w-4xl items-center gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-mist p-6">
            <h3 className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
              Without Aderiqo
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {FRAGMENTS.map((f) => (
                <div key={f.label} className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink-soft">
                  <span aria-hidden>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl border border-electric/25 bg-white p-6 shadow-card">
            <div aria-hidden className="brand-gradient absolute -top-px left-6 h-px w-24" />
            <h3 className="text-sm font-semibold tracking-wide text-electric uppercase">With Aderiqo</h3>
            <p className="mt-4 text-lg font-semibold text-ink">One connected customer workspace.</p>
            <CheckList
              items={[
                "Every company, contact and conversation in one place",
                "Emails, meetings and tasks linked to the deals they serve",
                "AI that understands your CRM context and acts on it",
                "Insights generated from your actual pipeline activity",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------- AI-FIRST CRM */}
      <Section dark>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Aderiqo AI"
              title="Tell Aderiqo what needs to happen."
              subtitle="Aderiqo AI works inside the CRM — not as a chatbot bolted on. Describe what you need in plain language and it acts on your real customer records, step by step, with your confirmation before anything sensitive."
            />
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Create contacts & companies",
                "Update CRM records",
                "Manage opportunities",
                "Create tasks & follow-ups",
                "Schedule meetings",
                "Search CRM information",
                "Analyze pipeline & customers",
                "Run multi-step workflows",
              ].map((cap) => (
                <div key={cap} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                  <span aria-hidden className="brand-gradient h-1.5 w-1.5 shrink-0 rounded-full" />
                  {cap}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">
              Aderiqo AI understands conversational context across the exchange — so “schedule a
              follow-up with him” knows exactly who “him” is. You stay in control: sensitive actions
              always require your confirmation.
            </p>
            <div className="mt-6">
              <Link href="/ai" className="inline-flex items-center gap-2 font-semibold text-acyan transition hover:text-white">
                Ask Aderiqo AI on this site <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <AiConversationMock />
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------- PRODUCT SHOWCASE */}
      <Section>
        <SectionHeading
          center
          eyebrow="Product"
          title="Everything your business runs on, in one place."
          subtitle="From the first prospect to the closed deal — and everything in between."
        />
        <Reveal className="mt-12">
          <PipelineMock />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              group: "CRM",
              icon: "🏢",
              items: ["Companies", "Contacts", "Opportunities"],
              desc: "Centralized records with relationship and revenue context on every account.",
              href: "/crm",
            },
            {
              group: "Execution",
              icon: "⚡",
              items: ["Tasks", "Calendar", "Emails"],
              desc: "Follow-ups, meetings and communication connected to the customers they involve.",
              href: "/tasks",
            },
            {
              group: "Growth",
              icon: "🎯",
              items: ["Prospector", "Revenue Intelligence"],
              desc: "Find the right companies and know what's happening in your pipeline.",
              href: "/prospecting",
            },
            {
              group: "Intelligence",
              icon: "🤖",
              items: ["Aderiqo AI", "Insights"],
              desc: "Conversational CRM that creates records, answers questions and manages work with you.",
              href: "/ai",
            },
          ].map((mod, i) => (
            <Reveal key={mod.group} delay={i * 60}>
              <Link
                href={mod.href}
                className="block h-full rounded-xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-lg">
                    {mod.icon}
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-ink-soft uppercase">{mod.group}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mod.items.map((item) => (
                    <span key={item} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{mod.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/product" className="font-semibold text-electric hover:underline">
            Explore the full platform →
          </Link>
        </div>
      </Section>

      {/* ------------------------------------------------------- CRM */}
      <Section className="bg-mist">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Core CRM"
              title="The CRM foundations, done properly."
              subtitle="Aderiqo starts with disciplined customer data: companies, contacts, opportunities, tasks, calendar and email — all linked, all searchable, all in service of the relationship."
            />
            <CheckList
              items={[
                "Centralized company records with relationship and revenue context",
                "Contact profiles connected to their company, deals and history",
                "Opportunities with pipeline stages, value and ownership",
                "Tasks with follow-ups, owners and due dates",
                "Meetings and scheduling tied to real customer records",
                "Customer email communication in context",
              ]}
              columns={2}
            />
          </Reveal>
          <Reveal delay={120}>
            <ContactsMock />
          </Reveal>
        </div>
      </Section>

      {/* ----------------------------------------------- PROSPECTING */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <SectionHeading
              eyebrow="Prospecting"
              title="Find the companies worth talking to."
              subtitle="Aderiqo helps you discover relevant companies, research them, identify decision-makers and capture them into your CRM — with AI assisting at every step of the search."
            />
            <CheckList
              items={[
                "Prospect discovery by industry, size and market",
                "Company research before outreach",
                "Decision-maker discovery within target companies",
                "Lead enrichment for complete records",
                "One-click capture into companies and contacts",
                "AI-assisted prospecting workflows",
              ]}
            />
            <div className="mt-6">
              <Link href="/prospecting" className="font-semibold text-electric hover:underline">
                Learn more about prospecting →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:order-1">
            <div className="rounded-xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">Prospect shortlist</p>
              <div className="mt-4 space-y-2.5">
                {[
                  ["Acme Industries", "Manufacturing · 250 employees", "Strong fit"],
                  ["Northwind Group", "Logistics · 120 employees", "Good fit"],
                  ["Contoso Retail", "Retail · 80 employees", "Good fit"],
                ].map(([name, meta, fit]) => (
                  <div key={name} className="flex items-center justify-between rounded-lg border border-line bg-mist px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">{name}</p>
                      <p className="text-xs text-ink-soft">{meta}</p>
                    </div>
                    <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                      {fit}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-soft">
                Illustrative view of the Prospector in the Aderiqo application.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ----------------------------------------- REVENUE INTELLIGENCE */}
      <Section dark>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Revenue intelligence"
              title="Know what's happening in your pipeline before it becomes a problem."
              subtitle="Aderiqo turns everyday CRM activity into business insight — pipeline visibility, revenue trends, opportunity analysis and sales performance in one intelligence layer."
            />
            <CheckList
              dark
              items={[
                "Pipeline visibility across every stage and owner",
                "Revenue trends over time",
                "Opportunity analysis and deal progression",
                "Sales performance and activity intelligence",
                "Business insights generated from your real data",
              ]}
            />
            <div className="mt-6">
              <Link href="/intelligence" className="font-semibold text-acyan hover:text-white">
                Explore revenue intelligence →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <IntelligenceMock />
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------- WORKFLOW */}
      <Section>
        <SectionHeading
          center
          eyebrow="How work connects"
          title="An operating system for customer relationships."
          subtitle="Aderiqo connects the whole journey — so every step feeds the next, and nothing gets lost between tools."
        />
        <Reveal className="mt-12">
          <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-gradient-to-b from-mist to-white p-6 shadow-card sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["🎯", "Lead discovered", "Found in the Prospector"],
                ["🏢", "Company identified", "Captured as a record"],
                ["👤", "Contact created", "Decision-makers linked"],
                ["💼", "Opportunity created", "Pipeline started"],
                ["✅", "Follow-up scheduled", "Task with an owner"],
                ["🗓️", "Meeting held", "Context on the record"],
                ["✉️", "Conversation tracked", "Email in context"],
                ["📈", "Revenue tracked", "Insight from activity"],
              ].map(([icon, title, desc], i) => (
                <div key={title} className="relative rounded-xl border border-line bg-white p-4 shadow-card">
                  <span aria-hidden className="text-lg">{icon}</span>
                  <p className="mt-1.5 text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">{desc}</p>
                  <span
                    aria-hidden
                    className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 bg-clip-text text-sm font-bold text-transparent brand-gradient lg:block"
                  >
                    {i < 7 ? "→" : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="mx-auto mt-6 max-w-2xl text-center text-ink-soft">
          One request can do the work of many screens. “Create Acme, add John as a contact, and
          schedule a follow-up” — three connected records, created with context.
        </p>
      </Section>

      {/* -------------------------------- RELATIONSHIP INTELLIGENCE */}
      <Section dark>
        <SectionHeading
          center
          dark
          eyebrow="Relationship intelligence"
          title="Every customer is a network. Aderiqo understands the whole graph."
          subtitle="Companies, contacts, opportunities, tasks, meetings and emails are all related — and Aderiqo keeps those relationships visible so context is never lost."
        />
        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
            {[
              ["Company", "Who they are, what they buy, how much they're worth"],
              ["Contacts", "The people behind the account and their roles"],
              ["Opportunities", "The revenue attached to those relationships"],
              ["Tasks & meetings", "The work that moves deals forward"],
              ["Emails", "The conversations that carry the context"],
            ].map(([title, desc], i, arr) => (
              <div key={title} className="w-full">
                <div className="flex flex-col items-start gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
                  <span className="w-40 shrink-0 text-sm font-bold text-white">{title}</span>
                  <span className="text-sm text-slate-400">{desc}</span>
                </div>
                {i < arr.length - 1 ? (
                  <div aria-hidden className="brand-gradient mx-auto mt-3 h-px w-16 rounded-full" />
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* -------------------------------------------------- SECURITY */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Security"
              title="Built with enterprise security principles."
              subtitle="Aderiqo is designed so your customer data stays yours — isolated, access-controlled and auditable."
            />
            <CheckList
              items={[
                "Secure authentication for every user",
                "Organization-level isolation of customer data",
                "Role-based access control across the workspace",
                "Tenant isolation between customer organizations",
                "Audit logging of important actions",
                "AI action auditing — sensitive AI actions require confirmation",
                "Secure API authorization on every request",
              ]}
            />
            <div className="mt-6">
              <Link href="/security" className="font-semibold text-electric hover:underline">
                Read about security →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border border-line bg-mist p-8">
              <div aria-hidden className="brand-gradient mb-5 h-12 w-12 rounded-xl" />
              <p className="text-lg font-semibold text-ink">
                Your data is organized, isolated and access-controlled.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Every company, contact and conversation in Aderiqo belongs to your organization.
                Roles determine who sees what, and every sensitive action — including actions taken
                through Aderiqo AI — is designed to be confirmed and auditable.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------- INTEGRATIONS */}
      <Section className="bg-mist">
        <SectionHeading
          center
          eyebrow="Integrations"
          title="Connected to the tools your team already uses."
          subtitle="Aderiqo connects prospecting data, email delivery and enrichment services directly into your CRM workflow."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Prospecting data", "Lead and company discovery services power the Prospector."],
            ["Email enrichment", "Contact enrichment keeps records complete and current."],
            ["Email verification", "Verification keeps your outreach list healthy."],
            ["Email delivery", "Transactional email delivery for customer communication."],
            ["Aderiqo AI", "AI is native to the platform — no external chat add-ons."],
            ["API access", "Secure, authorized API access for connected workflows."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-line bg-white p-5 shadow-card">
              <p className="font-semibold text-ink">{title}</p>
              <p className="mt-1.5 text-sm text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/integrations" className="font-semibold text-electric hover:underline">
            See how integrations work →
          </Link>
        </div>
      </Section>

      {/* ---------------------------------------------- WHY ADERIQO */}
      <Section>
        <SectionHeading
          center
          eyebrow="Why Aderiqo"
          title="Less administration. More selling."
        />
        <Reveal className="mt-12 overflow-hidden rounded-xl border border-line shadow-card">
          <div className="grid text-sm sm:grid-cols-2">
            <div className="bg-mist p-6 sm:p-8">
              <h3 className="font-semibold text-ink-soft">A traditional CRM</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Manual data entry on every record",
                  "Disconnected tools for email, tasks and reporting",
                  "Too much navigation, too little selling",
                  "Reactive reporting — insight arrives after the fact",
                  "Automation limited to rigid rule builders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink-soft">
                    <span aria-hidden className="mt-0.5 text-slate-400">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-navy-950 p-6 text-white sm:p-8">
              <div aria-hidden className="brand-gradient absolute top-0 left-0 h-full w-0.5" />
              <h3 className="font-semibold">Aderiqo</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Conversational workflows — AI does the data entry with you",
                  "Connected customer context across the whole workspace",
                  "One workspace instead of ten tabs",
                  "Intelligent insights from live pipeline activity",
                  "AI-assisted execution on real CRM records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden className="brand-gradient mt-0.5 h-1.5 w-1.5 rounded-full" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* --------------------------------------------- HOW IT WORKS */}
      <Section dark>
        <SectionHeading
          center
          dark
          eyebrow="How it works"
          title="Up and running in four steps."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["1", "Connect your business", "Create your organization and invite your team."],
            ["2", "Bring relationships together", "Companies, contacts and opportunities in one workspace."],
            ["3", "Let Aderiqo AI help", "Delegate CRM actions and multi-step workflows in plain language."],
            ["4", "Turn activity into revenue", "Insights from real pipeline activity guide your next move."],
          ].map(([n, title, desc], i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="relative">
                <div
                  aria-hidden
                  className="brand-gradient mb-4 flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white"
                >
                  {n}
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ DEMO */}
      <Section className="bg-mist">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="See Aderiqo in action"
              title="A product tour, tailored to your business."
              subtitle="In a guided demo we walk through the CRM, Aderiqo AI and revenue intelligence using your use cases — companies and contacts, pipeline, prospecting, tasks and reporting."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/demo" className="min-w-44">Book a demo</PrimaryButton>
              <SecondaryButton href="/contact" className="min-w-44">Contact us</SecondaryButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <button
              type="button"
              onClick={undefined}
              className="group relative block w-full cursor-default overflow-hidden rounded-xl border border-line bg-navy-950 p-10 text-center shadow-card"
              aria-label="Product demo video placeholder"
            >
              <span
                aria-hidden
                className="brand-gradient mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white shadow-glow transition group-hover:scale-105"
              >
                ▶
              </span>
              <span className="block text-base font-semibold text-white">Aderiqo product tour</span>
              <span className="mt-1.5 block text-sm text-slate-400">
                Video coming soon — book a live demo today
              </span>
            </button>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------- FINAL CTA */}
      <p className="bg-navy-950 pt-6 text-center text-xs text-slate-500">
        Aderiqo is built by ArdenzaTech — evolving from the platform formerly known as Clovexa.
      </p>
      <CtaBanner />
    </>
  );
}
