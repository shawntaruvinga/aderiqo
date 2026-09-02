import { pageMeta } from "@/lib/site";
import { FeaturePage } from "@/components/marketing/feature-page";

export const metadata = pageMeta({
  title: "Email — Customer Communication",
  description:
    "Customer email communication in Aderiqo: conversations in the context of your companies, contacts and deals, with AI-assisted drafting.",
  path: "/email",
});

export default function EmailPage() {
  return (
    <FeaturePage
      eyebrow="Email"
      title="Customer communication, in context."
      subtitle="Email is where customer relationships live day to day. Aderiqo keeps email communication connected to the companies, contacts and opportunities it belongs to."
      sections={[
        {
          eyebrow: "Communication",
          title: "Every conversation has its place.",
          description:
            "See email history alongside the records it relates to. When a contact writes, the account, the deal and the last touchpoint are already in view.",
          bullets: [
            "Email communication linked to customer records",
            "Conversation history on contacts and companies",
            "Communication context for every deal",
            "No copy-pasting between inbox and CRM",
          ],
          visual: "contacts",
        },
        {
          dark: true,
          flip: true,
          eyebrow: "AI-assisted email",
          title: "Draft faster, sound like yourself.",
          description:
            "Aderiqo AI helps draft customer emails using your CRM context — who the contact is, what the deal is about and what was promised last.",
          bullets: [
            "AI-assisted email drafting grounded in CRM context",
            "Consistent, professional customer communication",
            "Follow-ups drafted from task and meeting context",
            "You review and approve before anything is sent",
          ],
          visual: "cards",
          cards: [
            { title: "Contextual drafting", description: "AI writes with full knowledge of the relationship." },
            { title: "Linked history", description: "Every message connected to the customer record." },
            { title: "Follow-up emails", description: "Turn any task or meeting into a ready draft." },
            { title: "Human approval", description: "Nothing sends without you." },
          ],
        },
      ]}
      ctaTitle="Put your email where your CRM is."
      ctaSubtitle="See Aderiqo Email in a guided demo."
    />
  );
}