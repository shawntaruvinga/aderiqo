import { pageMeta } from "@/lib/site";
import { PageHero, Section } from "@/components/marketing/ui";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: "Aderiqo terms of service.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the Aderiqo platform and website."
      />
      <Section>
        <div className="prose-legal mx-auto max-w-3xl">
          <p className="text-sm text-ink-soft">Last updated: January 2026</p>
          <h2>1. Agreement</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Aderiqo
            platform and website, provided by ArdenzaTech (&quot;ArdenzaTech&quot;,
            &quot;we&quot;, &quot;us&quot;). By creating an account or using Aderiqo, you agree to
            these Terms.
          </p>
          <h2>2. The service</h2>
          <p>
            Aderiqo is an AI-powered CRM and business operating platform. Features may evolve over
            time; we may add, change or remove functionality as the product develops.
          </p>
          <h2>3. Your account and data</h2>
          <p>
            You are responsible for the content and customer data you store in Aderiqo, for
            maintaining the confidentiality of your credentials, and for activity that occurs under
            your account. Data you store belongs to your organization.
          </p>
          <h2>4. Acceptable use</h2>
          <p>
            You agree not to use Aderiqo for unlawful purposes, to infringe the rights of others, or
            to attempt to gain unauthorized access to the platform or other customers&apos; data.
          </p>
          <h2>5. AI features</h2>
          <p>
            Aderiqo AI assists with CRM actions based on your data. AI-generated output and actions
            should be reviewed by you; sensitive actions require your confirmation before they are
            applied. You remain responsible for decisions made using the platform.
          </p>
          <h2>6. Intellectual property</h2>
          <p>
            Aderiqo, the Aderiqo brand and the platform software are the property of ArdenzaTech.
            Your data remains yours.
          </p>
          <h2>7. Termination</h2>
          <p>
            Either party may end the relationship in accordance with the applicable plan or
            agreement. Upon termination, your data will be handled in accordance with our privacy
            practices and any separate agreement.
          </p>
          <h2>8. Liability</h2>
          <p>
            To the extent permitted by law, ArdenzaTech is not liable for indirect or consequential
            damages arising from use of the platform. Nothing in these Terms limits liability that
            cannot be limited by law.
          </p>
          <h2>9. Changes</h2>
          <p>
            We may update these Terms from time to time. Material changes will be communicated
            through the platform or by email.
          </p>
          <h2>10. Contact</h2>
          <p>
            Questions about these Terms? <a href="/contact">Contact us</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
