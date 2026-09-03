import { pageMeta, ARDENZATECH_URL } from "@/lib/site";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/marketing/ui";
import { Reveal } from "@/components/marketing/reveal";

export const metadata = pageMeta({
  title: "Security",
  description:
    "Aderiqo security: secure authentication, organization isolation, role-based access control, tenant isolation, audit logging, AI action auditing and secure API authorization.",
  path: "/security",
});

const PRINCIPLES = [
  {
    title: "Secure authentication",
    description:
      "Every user signs in through secure authentication. Sessions and credentials are handled by hardened, industry-standard infrastructure.",
  },
  {
    title: "Organization isolation",
    description:
      "Your customer data belongs to your organization. Records are scoped to your organization and are never shared across customers.",
  },
  {
    title: "Role-based access control",
    description:
      "Roles determine what each team member can see and do. Administrative capabilities are separated from everyday CRM work.",
  },
  {
    title: "Tenant isolation",
    description:
      "The platform is designed with strict tenant isolation, so one customer's data can never be accessed by another.",
  },
  {
    title: "Audit logging",
    description:
      "Important actions across the workspace are logged, so administrators retain visibility over what changed and when.",
  },
  {
    title: "AI action auditing",
    description:
      "Aderiqo AI works inside your security model. Sensitive AI actions require user confirmation, and AI activity is designed to be auditable.",
  },
  {
    title: "Secure API authorization",
    description:
      "Every API request is authorized. Integrations and service credentials are kept server-side and never exposed to clients.",
  },
  {
    title: "Enterprise security architecture",
    description:
      "Aderiqo is built with enterprise security principles: least privilege by default, isolation between tenants and controlled access throughout.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Built with enterprise security principles."
        subtitle="Aderiqo is designed so your customer data stays yours — isolated, access-controlled and auditable, with AI that works inside the same security model."
      />
      <Section>
        <SectionHeading
          center
          eyebrow="Our approach"
          title="Security as architecture, not an afterthought."
          subtitle="Isolation, authorization and auditability are part of Aderiqo's foundation — from the data model to the AI layer."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card">
                <div aria-hidden className="brand-gradient mb-4 h-1 w-10 rounded-full" />
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-ink-soft">
          Aderiqo is developed and maintained by{" "}
          <a
            href={ARDENZATECH_URL}
            className="font-semibold text-ink transition hover:text-electric"
          >
            ArdenzaTech
            <span aria-hidden> ↗</span>
          </a>
          , combining software engineering with expertise across enterprise technology, cloud,
          cybersecurity and infrastructure.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-ink-soft">
          Note: Aderiqo is built with enterprise security principles. We make our security posture
          transparent and available on request — we do not claim third-party certifications on this
          page. If your procurement process requires specific documentation,{" "}
          <a href="/contact" className="font-semibold text-electric hover:underline">
            contact us
          </a>
          .
        </p>
      </Section>
      <CtaBanner
        title="Questions about security?"
        subtitle="Our team is happy to walk through Aderiqo's security architecture with you."
      />
    </>
  );
}