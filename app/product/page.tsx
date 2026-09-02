import Link from "next/link";
import { pageMeta } from "@/lib/site";
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureGrid,
  SplitSection,
  CtaBanner,
} from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";
import { DashboardMock, AiMock, IntelligenceMock } from "@/components/marketing/mockups";

export const metadata = pageMeta({
  title: "Product — The Aderiqo Platform",
  description:
    "Aderiqo is an AI-powered CRM and business operating platform: CRM, sales, tasks, calendar, email, prospecting, revenue intelligence and AI-native workflows in one workspace.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One intelligent workspace for your whole business."
        subtitle="Aderiqo brings CRM, sales, tasks, calendar, email, prospecting and revenue intelligence together — with AI built into the core, not bolted on."
      />

      <Section>
        <SectionHeading
          center
          eyebrow="Overview"
          title="CRM first. AI makes the CRM intelligent."
          subtitle="Aderiqo is a serious business platform. The CRM is the foundation; Aderiqo AI works inside it — acting on real records, reasoning over your customer graph and turning activity into insight."
        />
        <Reveal className="mt-12">
          <DashboardMock />
        </Reveal>
      </Section>

      <Section dark>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="AI-native"
              title="Built around conversational work."
              subtitle="Describe the outcome — create a record, answer a question, run a multi-step workflow — and Aderiqo AI does the work inside your CRM, with confirmation before sensitive actions."
            />
          </Reveal>
          <Reveal delay={120}>
            <AiMock />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          center
          eyebrow="Modules"
          title="Everything Aderiqo brings together."
        />
        <FeatureGrid
          items={[
            { icon: "🏢", title: "CRM", description: "Companies, contacts and opportunities with full relationship context.", href: undefined },
            { icon: "📈", title: "Sales", description: "Pipeline and deal management from discovery to close." },
            { icon: "🤖", title: "Aderiqo AI", description: "Conversational CRM actions, workflows and answers." },
            { icon: "🎯", title: "Prospecting", description: "Discovery, research, decision-makers and CRM capture." },
            { icon: "✅", title: "Tasks", description: "Follow-ups, ownership and due dates that never slip." },
            { icon: "🗓️", title: "Calendar", description: "Meetings and scheduling connected to customer records." },
            { icon: "✉️", title: "Email", description: "Customer communication in the context of your CRM." },
            { icon: "💡", title: "Revenue intelligence", description: "Pipeline, trends and business insight from live data." },
            { icon: "🔒", title: "Security", description: "Organization isolation, RBAC, audit logging and secure APIs." },
          ].map(({ icon, title, description }) => ({ icon, title, description }))}
        />
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          {[
            ["CRM", "/crm"], ["Sales", "/sales"], ["Aderiqo AI", "/ai"], ["Prospecting", "/prospecting"],
            ["Tasks", "/tasks"], ["Calendar", "/calendar"], ["Email", "/email"], ["Intelligence", "/intelligence"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="text-electric hover:underline">
              {label} →
            </Link>
          ))}
        </div>
      </Section>

      <SplitSection
        dark
        flip
        eyebrow="Business intelligence"
        title="From activity to insight to revenue."
        description="Because every module shares one data model, Aderiqo's intelligence layer sees the whole picture — pipeline health, activity, revenue trends and business insight without manual reporting."
        bullets={[
          "Pipeline visibility and revenue trends",
          "Opportunity and performance analysis",
          "Insight generated from real activity",
          "Conversational business Q&A with Aderiqo AI",
        ]}
        visual={<IntelligenceMock />}
      />

      <CtaBanner
        title="See the whole platform working together."
        subtitle="Book a guided demo of Aderiqo — CRM, AI, prospecting and intelligence."
      />
    </>
  );
}