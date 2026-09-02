import Link from "next/link";
import { pageMeta } from "@/lib/site";
import { PageHero, Section, CtaBanner } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

export const metadata = pageMeta({
  title: "Resources",
  description:
    "The Aderiqo resource hub: product education, AI and CRM guides, sales resources and business intelligence — plus direct help from our team.",
  path: "/resources",
});

const CATEGORIES = [
  {
    icon: "📚",
    title: "Product",
    description: "Understand the Aderiqo platform: modules, architecture and how everything connects.",
    links: [
      { label: "Platform overview", href: "/product" },
      { label: "All features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    icon: "🤖",
    title: "AI",
    description: "Learn how Aderiqo AI works inside the CRM — actions, workflows and intelligence.",
    links: [{ label: "Aderiqo AI", href: "/ai" }],
  },
  {
    icon: "🏢",
    title: "CRM & Sales",
    description: "Practical guidance on running companies, contacts and pipeline in Aderiqo.",
    links: [
      { label: "Core CRM", href: "/crm" },
      { label: "Sales & pipeline", href: "/sales" },
      { label: "Companies", href: "/companies" },
      { label: "Contacts", href: "/contacts" },
    ],
  },
  {
    icon: "🧭",
    title: "Work & communication",
    description: "Organize everyday work — follow-ups, meetings and customer email.",
    links: [
      { label: "Tasks", href: "/tasks" },
      { label: "Calendar", href: "/calendar" },
      { label: "Email", href: "/email" },
    ],
  },
  {
    icon: "📈",
    title: "Business intelligence",
    description: "Turn pipeline activity into revenue and business insight.",
    links: [
      { label: "Revenue intelligence", href: "/intelligence" },
      { label: "Prospecting", href: "/prospecting" },
    ],
  },
  {
    icon: "🛟",
    title: "Help",
    description: "Get direct answers from the Aderiqo team — no ticket queues required.",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Book a demo", href: "/demo" },
      { label: "Security", href: "/security" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn your way around Aderiqo."
        subtitle="Product education, AI and CRM guidance, and direct access to our team. Every link leads somewhere real — no placeholders."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 50}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-card">
                <div aria-hidden className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-xl">
                  {cat.icon}
                </div>
                <h2 className="text-lg font-semibold text-ink">{cat.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{cat.description}</p>
                <ul className="mt-4 space-y-2">
                  {cat.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-sm font-medium text-electric hover:underline">
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Need something specific?"
        subtitle="Tell us what you're trying to learn or accomplish — we'll point you in the right direction."
      />
    </>
  );
}