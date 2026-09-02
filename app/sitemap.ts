import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/product",
  "/features",
  "/ai",
  "/crm",
  "/sales",
  "/contacts",
  "/companies",
  "/tasks",
  "/calendar",
  "/email",
  "/prospecting",
  "/intelligence",
  "/integrations",
  "/security",
  "/solutions",
  "/pricing",
  "/resources",
  "/about",
  "/contact",
  "/demo",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: route === "" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}