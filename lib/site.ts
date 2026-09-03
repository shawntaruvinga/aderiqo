import type { Metadata } from "next";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.ardenzatech.com";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aderiqo.com";
/** Parent company website (informational/trust destination, not a conversion funnel). */
export const ARDENZATECH_URL = "https://ardenzatech.com";

export function appPath(path: string) {
  return `${APP_URL}${path}`;
}

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Aderiqo`,
      description,
      url,
      siteName: "Aderiqo",
      type: "website",
      images: [{ url: "/logo.png", width: 512, height: 512, alt: "Aderiqo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Aderiqo`,
      description,
      images: ["/logo.png"],
    },
  };
}

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  {
    label: "Product",
    href: "/product",
    children: [
      { label: "Platform overview", href: "/product", description: "One intelligent workspace for your whole business" },
      { label: "Aderiqo AI", href: "/ai", description: "Conversational CRM that works with you" },
      { label: "CRM", href: "/crm", description: "Companies, contacts and opportunities" },
      { label: "Sales", href: "/sales", description: "Pipeline and deal management" },
      { label: "Intelligence", href: "/intelligence", description: "Revenue and business insights" },
      { label: "Integrations", href: "/integrations", description: "Connected workflows" },
      { label: "Security", href: "/security", description: "Enterprise security principles" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Sales teams", href: "/solutions#sales-teams" },
      { label: "Small businesses", href: "/solutions#small-businesses" },
      { label: "Startups", href: "/solutions#startups" },
      { label: "Professional services", href: "/solutions#professional-services" },
      { label: "Technology companies", href: "/solutions#technology" },
      { label: "Agencies", href: "/solutions#agencies" },
      { label: "Healthcare", href: "/solutions#healthcare" },
      { label: "Education", href: "/solutions#education" },
      { label: "Retail", href: "/solutions#retail" },
    ],
  },
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "Companies", href: "/companies" },
      { label: "Contacts", href: "/contacts" },
      { label: "Opportunities & sales", href: "/sales" },
      { label: "Tasks", href: "/tasks" },
      { label: "Calendar", href: "/calendar" },
      { label: "Email", href: "/email" },
      { label: "Prospecting", href: "/prospecting" },
      { label: "Revenue intelligence", href: "/intelligence" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Resource hub", href: "/resources" },
      { label: "Platform overview", href: "/product" },
      { label: "See a demo", href: "/demo" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Aderiqo", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "Book a demo", href: "/demo" },
    ],
  },
];

export const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Aderiqo AI", href: "/ai" },
      { label: "CRM", href: "/crm" },
      { label: "Sales", href: "/sales" },
      { label: "Contacts", href: "/contacts" },
      { label: "Companies", href: "/companies" },
      { label: "Intelligence", href: "/intelligence" },
      { label: "Prospecting", href: "/prospecting" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales teams", href: "/solutions#sales-teams" },
      { label: "Startups", href: "/solutions#startups" },
      { label: "Small businesses", href: "/solutions#small-businesses" },
      { label: "Professional services", href: "/solutions#professional-services" },
      { label: "Enterprise", href: "/solutions#technology" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Features", href: "/features" },
      { label: "Book a demo", href: "/demo" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];