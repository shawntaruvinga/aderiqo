import type { Metadata } from "next";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.ardenzatech.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aderiqo.ardenzatech.com";
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
      title,
      description,
      url,
      siteName: "Aderiqo",
      type: "website",
      images: [{ url: "/og.png", width: 1254, height: 1254, alt: "Aderiqo — AI-powered B2B sales platform by ArdenzaTech" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
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
      { label: "Platform overview", href: "/product", description: "The connected sales operating environment" },
      { label: "Aderiqo AI", href: "/ai", description: "AI embedded in the CRM workflow" },
      { label: "CRM", href: "/crm", description: "Companies, contacts and opportunities" },
      { label: "Pipeline & deals", href: "/sales", description: "Opportunity management for sales teams" },
      { label: "Companies & contacts", href: "/companies", description: "Customer records in one place" },
      { label: "Tasks & calendar", href: "/tasks", description: "Follow-ups with owners and due dates" },
      { label: "Email in context", href: "/email", description: "Customer communication on the record" },
      { label: "Prospecting", href: "/prospecting", description: "Discover and capture new accounts" },
      { label: "Revenue intelligence", href: "/intelligence", description: "Insight from live pipeline activity" },
      { label: "All features", href: "/features", description: "The complete capability list" },
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
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Resource hub", href: "/resources" },
      { label: "All features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "See a demo", href: "/demo" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
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