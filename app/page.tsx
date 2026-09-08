import Link from "next/link";
import { pageMeta, SITE_URL, ARDENZATECH_URL } from "@/lib/site";
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
  title: "Aderiqo — AI-Powered B2B Sales Platform",
  description:
    "Aderiqo is an AI-powered B2B sales platform built and operated by ArdenzaTech. Bring companies, contacts, pipeline, tasks, calendar, email, prospecting and revenue intelligence together in one connected workspace.",
  path: "/",
});

const MOMENTS = [
  { q: "Where did that prospect's information go?", a: "Scattered across spreadsheets, inboxes and notes — nobody can find the latest context." },
  { q: "Did anyone follow up with them?", a: "A prospect said “next week”. Now it's three weeks later and the trail went cold." },
  { q: "Which deals are actually moving?", a: "Without a connected pipeline, managers find out what's stuck when it's already lost." },
  { q: "Why is this opportunity still in the same stage?", a: "Nobody updated the record — updating the CRM is the last thing on a busy rep's list." },
  { q: "Where is the latest customer conversation?", a: "It's in someone's inbox, not attached to the customer everyone else works from." },
  { q: "Why are we updating five different systems?", a: "Every tool has its own version of the customer — and your team retypes all of them." },
];

const AUDIENCES = [
  { icon: "🤝", title: "Sales teams", desc: "Keep customer information, opportunities and follow-ups connected — and spend the day selling instead of administrating." },
  { icon: "📊", title: "Sales managers", desc: "Get a clearer view of pipeline activity — which deals are moving, which are stuck and where revenue is coming from." },
  { icon: "🚀", title: "Founders & business owners", desc: "See what's happening across your customer and sales operation without chasing your team for updates." },
  { icon: "📈", title: "Growing companies", desc: "Build a connected sales workflow that scales — without adding another layer of disconnected tools." },
];

const AI_EXAMPLES = [
  "Find opportunities with no recent activity.",
  "Create a follow-up task for Acme Corp next Tuesday.",
  "Show me our active opportunities.",
  "Schedule a meeting with Sarah.",
  "Update this opportunity to negotiation.",
  "Create Acme, add John as a contact, and schedule a follow-up.",
];

const FUTURE_EXAMPLES = [
  "Prepare my day — what needs my attention?",
  "Draft follow-up emails for the opportunities at risk.",
  "Turn this week's customer wins into three LinkedIn posts.",
  "Plan content for next week based on what we delivered.",
  "Summarize my pipeline and suggest priorities.",
];

const STEPS = [
  ["1", "Connect your business", "Create your organization and bring your companies, contacts and opportunities into one workspace."],
  ["2", "Aderiqo understands your context", "AI learns your customers, pipeline and priorities — so recommendations are grounded in your actual business."],
  ["3", "AI identifies what matters", "From pipeline risks to follow-ups, Aderiqo surfaces the work that moves revenue forward."],
  ["4", "You take action with Aderiqo", "Create records, update deals, schedule meetings and run workflows — with AI handling the busywork."],
];

const MODULES = [
  { group: "CRM", icon: "🏢", items: ["Companies", "Contacts", "Opportunities"], desc: "Centralized records with relationship and revenue context on every account.", href: "/crm" },
  { group: "Sales", icon: "📈", items: ["Pipeline", "Prospecting", "Revenue Intelligence"], desc: "Find the right companies, manage deals and understand what's moving.", href: "/sales" },
  { group: "Productivity", icon: "⚡", items: ["Tasks", "Calendar", "Follow-ups"], desc: "Work that moves deals forward, tied to the customers it belongs to.", href: "/tasks" },
  { group: "Intelligence", icon: "🤖", items: ["Aderiqo AI", "Insights"], desc: "Conversational CRM that creates records, answers questions and manages work with you.", href: "/ai" },
];

const CURRENT_CAPABILITIES = [
  "AI-powered CRM: companies, contacts, opportunities and pipeline",
  "Aderiqo AI acting on real CRM records with confirmation",
  "Prospecting: discover, research and capture new accounts",
  "Tasks, calendar and email connected to customer records",
  "Revenue intelligence from live pipeline activity",
  "Organization isolation, role-based access and audit logging",
];

const COMING_NEXT = [
  "Deeper AI actions across email and communication",
  "Expanded productivity and workflow automation",
  "Content assistance tied to business activity",
  "More autonomous AI workflows with user control",
];

const LONG_TERM = [
  "Intelligent business automation across functions",
  "Connected marketing, content and social workflows",
  "Broader business integrations and data sources",
  "More proactive business guidance and execution",
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "ArdenzaTech",
        url: ARDENZATECH_URL,
        description:
          "ArdenzaTech builds practical software for how businesses operate. Aderiqo is its flagship product.",
        sameAs: [SITE_URL],
      },
      {
        "@type": "Brand",
        "@id": `${SITE_URL}/#brand`,
        name: "Aderiqo",
        description:
          "Aderiqo is an AI-powered B2B sales platform built and operated by ArdenzaTech.",
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Aderiqo",
        url: SITE_URL,
        description:
          "Aderiqo is an AI-powered B2B sales platform: CRM, prospecting, pipeline execution, revenue intelligence and AI-assisted workflows in one connected workspace.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/`,
        name: "Aderiqo — AI-Powered B2B Sales Platform",
        url: SITE_URL,
        description:
          "Aderiqo is an AI-powered B2B sales platform built and operated by ArdenzaTech. Bring companies, contacts, pipeline, tasks, calendar, email, prospecting and revenue intelligence together in one connected workspace.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#brand` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "Aderiqo",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description:
          "Aderiqo is an AI-powered B2B sales platform: CRM, prospecting, pipeline execution, revenue intelligence and AI-assisted workflows in one connected workspace.",
        brand: { "@id": `${SITE_URL}/#brand` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          description:
            "Plans are shaped with each customer. Contact sales or book a demo for pricing.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
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
              <span className="text-gradient">with intelligence built in.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Aderiqo brings your customers, sales pipeline, tasks, and business intelligence into one
              connected workspace — with AI helping you understand what matters and what to do next.
            </p>
            <p className="mt-3 text-sm font-semibold tracking-wide text-slate-400 uppercase">
              CRM first. AI makes the CRM intelligent.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/early-access"
                className="brand-gradient inline-flex min-w-44 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
              >
                Join early access <span aria-hidden>→</span>
              </a>
              <a
                href="/product"
                className="inline-flex min-w-44 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Explore Aderiqo
              </a>
            </div>
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
            {["CRM", "AI", "Sales", "Prospecting", "Tasks", "Calendar", "Email", "Revenue Intelligence"].map((m) => (
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
          title="Your tools don't know each other. Your business should."
          subtitle="CRM, email, calendar, tasks, spreadsheets, messaging, marketing, social, analytics — the problem isn't a lack of tools. It's that none of them understand the whole business."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOMENTS.map((m, i) => (
            <Reveal key={m.q} delay={i * 60}>
              <div className="h-full rounded-xl border border-line bg-white p-5 shadow-card">
                <p className="font-semibold text-ink">&ldquo;{m.q}&rdquo;</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-line bg-mist p-6">
          <h3 className="text-sm font-semibold tracking-wide text-ink-soft uppercase">The cost</h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {[
              "Salespeople waste time hunting for information",
              "Managers don't have a complete view of the pipeline",
              "Important details get lost between tools",
              "Teams duplicate the same work in different systems",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <span aria-hidden className="mt-0.5 text-amagenta">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* --------------------------------------------------- SOLUTION */}
      <Section dark>
        <SectionHeading
          center
          dark
          eyebrow="The solution"
          title="One workspace. One connected sales operation."
          subtitle="Aderiqo brings companies, contacts, opportunities, tasks, calendar, email, prospecting and revenue intelligence into one place — so the work connects instead of fragmenting."
        />
        <Reveal className="mt-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <ol className="space-y-3">
              {[
                ["A contact becomes an opportunity", "the relationship turns into pipeline"],
                ["The opportunity gets a task", "follow-up becomes part of the workflow"],
                ["The task connects to the calendar", "the meeting is on the record, not in someone's head"],
                ["The conversation stays with the customer", "email and notes live where the team works"],
                ["The pipeline reflects the latest activity", "managers see movement, not guesswork"],
                ["AI helps you work with all of it", "plain language in, real CRM actions out"],
              ].map(([title, desc], i, arr) => (
                <li key={title}>
                  <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
                    <span className="shrink-0 text-sm font-bold text-white">
                      <span aria-hidden className="brand-gradient mr-2 inline-block h-1.5 w-1.5 rounded-full" />
                      {title}
                    </span>
                    <span className="text-sm text-slate-400">{desc}</span>
                  </div>
                  {i < arr.length - 1 ? (
                    <div aria-hidden className="brand-gradient mx-auto my-2 h-px w-16 rounded-full" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          Aderiqo doesn&apos;t claim to replace every tool you use. It stops forcing your team to work
          across disconnected systems for the same customer — by making the core sales workflow one
          connected workspace.
        </p>
      </Section>

      {/* ----------------------------------------------- A DAY WITH ADERIQO */}
      <Section className="bg-mist">
        <SectionHeading
          center
          eyebrow="A day with Aderiqo"
          title="What it actually looks like to use it."
          subtitle="Not a feature list — a Tuesday."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          {[
            { time: "9:00 AM", title: "See what needs your attention.", desc: "Open tasks, today's meetings and opportunities waiting on you — in one view, not five tabs." },
            { time: "10:30 AM", title: "Update an opportunity without digging through screens.", desc: "Move a deal, log a note and set the next step on the same record your team already works from." },
            { time: "11:30 AM", title: "Ask Aderiqo AI to do the busywork.", desc: "“Create a task to follow up with Acme Corp next Tuesday.” Plain language in, connected CRM records out." },
            { time: "2:00 PM", title: "Review what actually moved today.", desc: "Pipeline activity, new conversations and changed deals — visible as they happen, not at month-end." },
            { time: "4:30 PM", title: "End the day knowing nothing was dropped.", desc: "Every follow-up has an owner and a due date, tied to the customer it belongs to." },
          ].map((d, i) => (
            <Reveal key={d.time} delay={i * 60}>
              <div className="relative flex gap-4 pb-6 sm:gap-6">
                {i < 4 ? (
                  <div aria-hidden className="absolute top-10 bottom-0 left-[27px] w-px bg-line sm:left-[43px]" />
                ) : null}
                <div
                  aria-hidden
                  className="brand-gradient z-10 flex h-9 w-14 shrink-0 items-center justify-center rounded-full px-2 text-[10px] font-bold text-white shadow-card sm:h-11 sm:w-[88px] sm:text-xs"
                >
                  {d.time}
                </div>
                <div className="flex-1 rounded-xl border border-line bg-white p-5 shadow-card">
                  <p className="font-semibold text-ink">{d.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------- AI-FIRST CRM */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Aderiqo AI"
              title="Your CRM knows the data. Aderiqo helps you understand it."
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
                <div key={cap} className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink">
                  <span aria-hidden className="brand-gradient h-1.5 w-1.5 shrink-0 rounded-full" />
                  {cap}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-ink-soft">
              Aderiqo AI understands conversational context across the exchange — so “schedule a
              follow-up with him” knows exactly who “him” is. You stay in control: sensitive actions
              always require your confirmation.
            </p>
            <div className="mt-6">
              <Link href="/ai" className="inline-flex items-center gap-2 font-semibold text-electric transition hover:text-electric-dark">
                Ask Aderiqo AI on this site <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <AiConversationMock />
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------- HOW IT WORKS */}
      <Section dark>
        <SectionHeading
          center
          dark
          eyebrow="How it works"
          title="Up and running in four steps."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([n, title, desc], i) => (
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

      {/* ------------------------------------------- PRODUCT SHOWCASE */}
      <Section>
        <SectionHeading
          center
          eyebrow="Current product"
          title="An AI-powered CRM, built properly."
          subtitle="Aderiqo starts with disciplined customer data — companies, contacts, opportunities, pipeline, tasks, calendar and email — all linked, all searchable, all in service of the relationship."
        />
        <Reveal className="mt-12">
          <PipelineMock />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {MODULES.map((mod, i) => (
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

      {/* ----------------------------------------------- PROSPECTING */}
      <Section className="bg-mist">
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
            <ContactsMock />
          </Reveal>
        </div>
      </Section>

      {/* ----------------------------------------- REVENUE INTELLIGENCE */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Revenue intelligence"
              title="Know what's happening in your pipeline before it becomes a problem."
              subtitle="Aderiqo turns everyday CRM activity into business insight — pipeline visibility, revenue trends, opportunity analysis and sales performance in one intelligence layer."
            />
            <CheckList
              items={[
                "Pipeline visibility across every stage and owner",
                "Revenue trends over time",
                "Opportunity analysis and deal progression",
                "Sales performance and activity intelligence",
                "Business insights generated from your real data",
              ]}
            />
            <div className="mt-6">
              <Link href="/intelligence" className="font-semibold text-electric hover:underline">
                Explore revenue intelligence →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <IntelligenceMock />
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------- THE FUTURE ASSISTANT */}
      <Section dark>
        <SectionHeading
          center
          dark
          eyebrow="The future"
          title="From CRM to your business assistant."
          subtitle="Today Aderiqo helps you manage your business. Our vision is to help you run more of it — with an intelligent layer that understands your work and acts with you."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-acyan uppercase mb-4">Vision examples</p>
            <div className="space-y-4">
              {FUTURE_EXAMPLES.map((ex) => (
                <div key={ex} className="flex items-start gap-3">
                  <span aria-hidden className="brand-gradient mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white">
                    ✦
                  </span>
                  <p className="text-sm italic text-slate-300">&ldquo;{ex}&rdquo;</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              These are directional examples of where Aderiqo is heading. They are not currently available
              functionality. Early Access members will help shape what comes next.
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------- SOCIAL + CONTENT VISION */}
      <Section>
        <SectionHeading
          center
          eyebrow="Coming next"
          title="Your business should be creating momentum while you're running it."
          subtitle="A future capability: Aderiqo can help turn your business activity into content — drafts, posts, and social presence — while you focus on the work itself."
        />
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-line bg-white p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">User request</p>
              <p className="mt-1 text-sm text-ink-soft italic">
                &ldquo;Turn this week's customer wins into three LinkedIn posts.&rdquo;
              </p>
            </div>
            <div aria-hidden className="hidden sm:block brand-gradient h-px w-8 rotate-90 self-center" />
            <div aria-hidden className="sm:hidden brand-gradient h-px w-8 self-center" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-electric">Aderiqo response</p>
              <p className="mt-1 text-sm text-ink-soft">
                &ldquo;Here are three drafts based on your recent activity — customer wins, new pipeline
                movement, and upcoming meetings. Review and send when ready.&rdquo;
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            Content and social media assistance is a planned capability. It is not currently available
            in Early Access.
          </p>
        </div>
      </Section>

      {/* --------------------------------------------------- AUDIENCES */}
      <Section className="bg-mist">
        <SectionHeading
          center
          eyebrow="Who Aderiqo is for"
          title="Built for the people who live in the sales workflow."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card">
                <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-lg">
                  {a.icon}
                </span>
                <p className="mt-4 font-semibold text-ink">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------- CURRENT VS COMING NEXT */}
      <Section>
        <SectionHeading
          center
          eyebrow="Roadmap"
          title="What's available now, what's coming next, and where we're headed."
          subtitle="We're building Aderiqo in the open with early customers. Here is the current state and the direction."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold tracking-wide text-electric uppercase mb-4">Current</p>
            <ul className="space-y-3">
              {CURRENT_CAPABILITIES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <span aria-hidden className="brand-gradient mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold tracking-wide text-acyan uppercase mb-4">Coming next</p>
            <ul className="space-y-3">
              {COMING_NEXT.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <span aria-hidden className="brand-gradient mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-mist p-6 shadow-card">
            <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase mb-4">Long-term vision</p>
            <ul className="space-y-3">
              {LONG_TERM.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span aria-hidden className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-line text-[9px] font-bold text-ink-soft">◈</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- SECURITY */}
      <Section dark>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Security"
              title="Built with enterprise security principles."
              subtitle="Aderiqo is designed so your customer data stays yours — isolated, access-controlled and auditable."
            />
            <CheckList
              dark
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
              <Link href="/security" className="font-semibold text-acyan hover:text-white transition">
                Read about security →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
              <div aria-hidden className="brand-gradient mb-5 h-12 w-12 rounded-xl" />
              <p className="text-lg font-semibold text-white">
                Your data is organized, isolated and access-controlled.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Every company, contact and conversation in Aderiqo belongs to your organization.
                Roles determine who sees what, and every sensitive action — including actions taken
                through Aderiqo AI — is designed to be confirmed and auditable.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------- EARLY ACCESS */}
      <Section>
        <SectionHeading
          center
          eyebrow="Early access"
          title="Be part of what comes next."
          subtitle="Aderiqo is in its final product refinement phase. Early Access members get the platform first, work directly with the team, and help shape the roadmap."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[
            "Access Aderiqo before wider launch",
            "Test the product with your real workflows",
            "Share feedback that shapes the roadmap",
            "Receive onboarding and support from the Aderiqo team",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-card">
              <span aria-hidden className="brand-gradient mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white">
                ✓
              </span>
              <span className="text-sm text-ink">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/early-access"
            className="brand-gradient inline-flex min-w-44 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            Join early access <span aria-hidden>→</span>
          </a>
          <p className="text-sm text-ink-soft">
            No credit card required. Our team will be in touch when Aderiqo is ready for you.
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------- FINAL CTA */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden
          className="brand-gradient absolute top-0 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        />
        <div className="relative mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Your business is already moving.
          </h2>
          <p className="mx-auto mt-4 text-2xl font-semibold text-gradient sm:text-3xl">Aderiqo is here to help you move smarter.</p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            Start with an AI-powered CRM built for how your team actually works. Help shape what comes next.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/early-access"
              className="brand-gradient inline-flex min-w-44 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              Join early access <span aria-hidden>→</span>
            </a>
            <a
              href="/demo"
              className="inline-flex min-w-44 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Aderiqo is built by ArdenzaTech — evolving from the platform formerly known as Clovexa.
          </p>
        </div>
      </section>
    </>
  );
}
