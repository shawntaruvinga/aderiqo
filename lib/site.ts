import type { Metadata } from "next";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.ardenzatech.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aderiqo.ardenzatech.com";
/** Parent company website (informational/trust destination, not a conversion funnel). */
export const ARDENZATECH_URL = "https://ardenzatech.com";

/**
 * When true, public Login CTAs show a "Coming Soon" modal instead of redirecting
 * to the Aderiqo application. Flip to `false` when the app is ready for public access.
 */
export const APP_COMING_SOON = true;

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
      { label: "Platform overview", href: "/product", description: "Connected sales workspace" },
      { label: "Aderiqo AI", href: "/ai", description: "AI embedded in the CRM" },
      { label: "CRM", href: "/crm", description: "Companies, contacts and opportunities" },
      { label: "Pipeline & deals", href: "/sales", description: "Opportunity management" },
      { label: "Prospecting", href: "/prospecting", description: "Discover and capture accounts" },
      { label: "Revenue intelligence", href: "/intelligence", description: "Pipeline insight and trends" },
      { label: "All features", href: "/features", description: "Complete capability list" },
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
      { label: "Platform overview", href: "/product" },
      { label: "Aderiqo AI", href: "/ai" },
      { label: "CRM", href: "/crm" },
      { label: "Sales", href: "/sales" },
      { label: "Prospecting", href: "/prospecting" },
      { label: "Revenue intelligence", href: "/intelligence" },
      { label: "All features", href: "/features" },
    ],
  },
  {
    title: "Solutions",
    links: [
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
    title: "Resources",
    links: [
      { label: "Resource hub", href: "/resources" },
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Book a demo", href: "/demo" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Aderiqo", href: "/about" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/demo" },
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