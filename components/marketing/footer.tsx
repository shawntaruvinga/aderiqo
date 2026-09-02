import Link from "next/link";
import { FOOTER_LINKS, appPath } from "@/lib/site";
import { Logo } from "./ui";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              AI-powered CRM and business operating platform. CRM first. AI makes the CRM
              intelligent.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              An AI-powered CRM by <span className="font-semibold text-slate-200">ArdenzaTech</span>
            </p>
          </div>
          {FOOTER_LINKS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © 2026 ArdenzaTech. Aderiqo is a product of ArdenzaTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 transition hover:text-white">
              Terms
            </Link>
            <a href={appPath("/login")} className="text-sm text-slate-500 transition hover:text-white">
              Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}