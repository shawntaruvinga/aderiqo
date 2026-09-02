import Link from "next/link";
import { pageMeta } from "@/lib/site";
import { PageHero, Section, SectionHeading, FeatureGrid, CtaBanner } from "@/components/marketing/ui";

export const metadata = pageMeta({
  title: "Features",
  description:
    "Explore every Aderiqo feature: CRM, sales, contacts, companies, tasks, calendar, email, prospecting, revenue intelligence and Aderiqo AI.",
  path: "/features",
});

const GROUPS: { title: string; href: string; description: string; icon: string; points: string[] }[] = [
  { title: "CRM", href: "/crm", icon: "🏢", description: "The foundation of the platform.", points: ["Centralized company records", "Contact profiles with relationship context", "Opportunities and pipeline"] },
  { title: "Sales", href: "/sales", icon: "📈", description: "Pipeline that stays current.", points: ["Deal stages and ownership", "Revenue tracking", "Task-driven follow-up"] },
  { title: "Contacts", href: "/contacts", icon: "👥", description: "Relationship management done right.", points: ["Rich profiles", "Company relationships", "Follow-up context"] },
  { title: "Companies", href: "/companies", icon: "🏛️", description: "One record of truth per account.", points: ["Account management", "Revenue context", "Linked contacts"] },
  { title: "Tasks", href: "/tasks", icon: "✅", description: "Follow-ups that never slip.", points: ["Ownership and due dates", "Linked to customers", "AI-assisted creation"] },
  { title: "Calendar", href: "/calendar", icon: "🗓️", description: "Meetings with context.", points: ["Scheduling from records", "Meeting-linked context", "AI-assisted scheduling"] },
  { title: "Email", href: "/email", icon: "✉️", description: "Communication in context.", points: ["Linked conversations", "AI-assisted drafting", "Follow-up drafts"] },
  { title: "Prospecting", href: "/prospecting", icon: "🎯", description: "Find the right companies.", points: ["Discovery and research", "Decision-makers", "One-click CRM capture"] },
  { title: "Revenue intelligence", href: "/intelligence", icon: "💡", description: "Know before it's a problem.", points: ["Pipeline visibility", "Revenue trends", "Activity intelligence"] },
  { title: "Aderiqo AI", href: "/ai", icon: "🤖", description: "CRM-native intelligence.", points: ["Natural-language actions", "Multi-step workflows", "Confirmation on sensitive actions"] },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Every capability, one platform."
        subtitle="Aderiqo combines disciplined CRM foundations with AI-native workflows and business intelligence. Explore what each part of the platform does."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((group, i) => (
            <RevealItem key={group.href} delay={i * 50}>
              <Link
                href={group.href}
                className="block h-full rounded-xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div aria-hidden className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-xl">
                  {group.icon}
                </div>
                <h2 className="text-lg font-semibold text-ink">{group.title}</h2>
                <p className="mt-1 text-sm text-ink-soft">{group.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {group.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span aria-hidden className="brand-gradient mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-electric">Learn more →</p>
              </Link>
            </RevealItem>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}

import { Reveal } from "@/components/marketing/reveal";

function RevealItem({ children, delay }: { children: React.ReactNode; delay: number }) {
  return <Reveal delay={delay}>{children}</Reveal>;
}