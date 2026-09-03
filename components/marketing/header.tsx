"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV, appPath } from "@/lib/site";
import { Logo } from "./ui";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-white/10 bg-navy-950/90 text-white backdrop-blur-md"
          : "border-transparent bg-navy-950 text-white"
      }`}
      ref={navRef}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo dark />
        <DesktopNav open={open} setOpen={setOpen} />
        <DesktopCtas />
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            {mobileOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h16M3 11h16M3 16.5h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>
      {mobileOpen ? <MobileMenu onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  );
}

function DesktopNav({ open, setOpen }: { open: string | null; setOpen: (v: string | null) => void }) {
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {NAV.map((item) => (
        <li key={item.label} className="relative">
          {item.children ? (
            <>
              <button
                type="button"
                aria-expanded={open === item.label}
                aria-haspopup="true"
                onClick={() => setOpen(open === item.label ? null : item.label)}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
                <svg
                  aria-hidden
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  className={`transition-transform ${open === item.label ? "rotate-180" : ""}`}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                </svg>
              </button>
              {open === item.label ? (
                <div className="absolute top-full left-0 mt-1 w-80 rounded-xl border border-white/10 bg-navy-900 p-2 shadow-lift">
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(null)}
                          className="block rounded-lg px-3 py-2.5 transition hover:bg-white/10"
                        >
                          <span className="text-sm font-medium text-white">{child.label}</span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-slate-400">{child.description}</span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          ) : (
            <Link
              href={item.href!}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

function DesktopCtas() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <a
        href={appPath("/login")}
        className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:text-white"
      >
        Login
      </a>
      <Link
        href="/demo"
        className="rounded-lg border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
      >
        Book a demo
      </Link>
      <Link
        href="/early-access"
        className="brand-gradient rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        Get started
      </Link>
    </div>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [section, setSection] = useState<string | null>(null);
  return (
    <div className="border-t border-white/10 bg-navy-950 lg:hidden">
      <nav
        aria-label="Mobile navigation"
        className="mx-auto max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-4 sm:px-6"
      >
        <ul className="space-y-1">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={section === item.label}
                    onClick={() => setSection(section === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white"
                  >
                    {item.label}
                    <span aria-hidden className="text-slate-400">
                      {section === item.label ? "−" : "+"}
                    </span>
                  </button>
                  {section === item.label ? (
                    <ul className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            onClick={onNavigate}
                            className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <Link
                  href={item.href!}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 pb-6">
          <a
            href={appPath("/login")}
            className="rounded-lg border border-white/25 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Login
          </a>
          <Link
            href="/demo"
            onClick={onNavigate}
            className="rounded-lg border border-white/25 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Book a demo
          </Link>
          <Link
            href="/early-access"
            onClick={onNavigate}
            className="brand-gradient rounded-lg px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get started
          </Link>
        </div>
      </nav>
    </div>
  );
}
