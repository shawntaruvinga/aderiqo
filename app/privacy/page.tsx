import { pageMeta } from "@/lib/site";
import { PageHero, Section } from "@/components/marketing/ui";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Aderiqo and ArdenzaTech handle personal data and privacy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Aderiqo collects, uses and protects personal data."
      />
      <Section>
        <div className="prose-legal mx-auto max-w-3xl">
          <p className="text-sm text-ink-soft">Last updated: January 2026</p>
          <h2>1. Overview</h2>
          <p>
            This policy explains how ArdenzaTech (&quot;we&quot;, &quot;us&quot;) handles personal
            data in connection with the Aderiqo platform and the aderiqo.com website.
          </p>
          <h2>2. Data we collect</h2>
          <ul>
            <li>
              <strong>Website enquiries:</strong> when you contact us or book a demo, we collect the
              name, company, email address and message you provide.
            </li>
            <li>
              <strong>Platform data:</strong> when you use Aderiqo, we process the account and
              customer records your organization stores in the platform.
            </li>
            <li>
              <strong>Technical data:</strong> standard logs such as IP address and request
              timestamps, used for security and reliability.
            </li>
          </ul>
          <h2>3. How we use data</h2>
          <ul>
            <li>To respond to your enquiries and provide requested demos.</li>
            <li>To operate, secure and improve the platform.</li>
            <li>To communicate important service information.</li>
          </ul>
          <p>We do not sell personal data, and we do not use customer CRM data for advertising.</p>
          <h2>4. Customer data ownership</h2>
          <p>
            Data stored in Aderiqo belongs to your organization. It is scoped to your organization
            and is not shared across customers.
          </p>
          <h2>5. AI processing</h2>
          <p>
            Aderiqo AI processes your organization's CRM data to provide AI features within your
            workspace. AI actions on sensitive records require user confirmation, and AI activity is
            auditable within the platform.
          </p>
          <h2>6. Data retention</h2>
          <p>
            We keep enquiry data only as long as needed to handle your request and any follow-up.
            Platform data is retained in accordance with your plan or separate agreement.
          </p>
          <h2>7. Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct or delete your
            personal data. To exercise these rights, <a href="/contact">contact us</a>.
          </p>
          <h2>8. Security</h2>
          <p>
            Aderiqo applies enterprise security principles including authentication, organization
            isolation, role-based access control, tenant isolation, audit logging and secure API
            authorization. See our <a href="/security">security page</a> for details.
          </p>
          <h2>9. Changes</h2>
          <p>
            We may update this policy as the product evolves. Changes will be published on this page.
          </p>
          <h2>10. Contact</h2>
          <p>
            Privacy questions? <a href="/contact">Contact us</a>.
          </p>
        </div>
      </Section>
    </>
  );
}