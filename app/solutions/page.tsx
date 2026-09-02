import Link from "next/link";
import { pageMeta } from "@/lib/site";
import { PageHero, Section, CtaBanner } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

export const metadata = pageMeta({
  title: "Solutions",
  description:
    "How teams use Aderiqo: sales teams, small businesses, startups, professional services, technology companies, agencies, healthcare, education and retail.",
  path: "/solutions",
});

const SOLUTIONS = [
  {
    id: "sales-teams",
    icon: "📈",
    title: "Sales teams",
    body: "Keep the pipeline current without the data-entry tax. Aderiqo AI creates records, schedules follow-ups and answers pipeline questions, so sellers spend their time selling.",
    points: ["Pipeline and deal stages", "Task-driven follow-up", "Conversational CRM updates"],
  },
  {
    id: "small-businesses",
    icon: "🏪",
    title: "Small businesses",
    body: "One workspace instead of a patchwork of tools. Customers, calendar, tasks and email live together — and the owner finally has a clear view of revenue.",
    points: ["Everything in one place", "Low admin overhead", "Clear revenue visibility"],
  },
  {
    id: "startups",
    icon: "🚀",
    title: "Startups",
    body: "Move fast without outgrowing your CRM. Capture prospects, run the pipeline with AI assistance and get revenue insight from day one — no dedicated ops team required.",
    points: ["AI-assisted prospecting", "Fast setup", "Insight without reporting overhead"],
  },
  {
    id: "professional-services",
    icon: "🤝",
    title: "Professional services",
    body: "Manage client relationships as carefully as the work itself. Track every client, engagement and follow-up with full relationship context.",
    points: ["Client and contact records", "Meeting and follow-up tracking", "Relationship intelligence"],
  },
  {
    id: "technology",
    icon: "💻",
    title: "Technology companies",
    body: "Long pipelines, many stakeholders and rich communication histories. Aderiqo keeps the whole customer graph — companies, contacts, deals and conversations — connected.",
    points: ["Multi-stakeholder accounts", "Pipeline at scale", "Conversational business Q&A"],
  },
  {
    id: "agencies",
    icon: "🎨",
    title: "Agencies",
    body: "Manage multiple client accounts, keep every conversation in context and never miss a follow-up across a busy client portfolio.",
    points: ["Client portfolio management", "Task and meeting coordination", "Communication history per client"],
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare organizations",
    body: "Coordinate partner and supplier relationships, referrals and administrative follow-up in one organized workspace, with role-based access control.",
    points: ["Organized relationship records", "Role-based access", "Task and meeting coordination"],
  },
  {
    id: "education",
    icon: "🎓",
    title: "Education",
    body: "Manage partner institutions, employers and stakeholder relationships with clear records, structured follow-up and shared visibility across teams.",
    points: ["Institution and contact records", "Structured follow-up", "Team-wide visibility"],
  },
  {
    id: "retail",
    icon: "🛍️",
    title: "Retail",
    body: "Track supplier and partner relationships, coordinate buying conversations and keep revenue context attached to every account.",
    points: ["Supplier account management", "Pipeline for partnerships", "Revenue context per account"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for the way your team works."
        subtitle="Aderiqo adapts to how different teams win and keep customers. Find the workflows that match yours."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 40}>
              <article id={s.id} className="h-full scroll-mt-24 rounded-xl border border-line bg-white p-6 shadow-card">
                <div aria-hidden className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-xl">
                  {s.icon}
                </div>
                <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span aria-hidden className="brand-gradient mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-ink-soft">
            Don't see your industry? <Link href="/contact" className="font-semibold text-electric hover:underline">Tell us about your workflows</Link> — we'll show you how Aderiqo fits.
          </p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}