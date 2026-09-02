import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-navy-950 text-white" : "bg-white text-ink"} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase ${
        dark ? "text-acyan" : "text-electric"
      }`}
    >
      <span aria-hidden className="brand-gradient h-1.5 w-1.5 rounded-full" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `brand-gradient inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
        <span aria-hidden>→</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  dark = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition ${
    dark
      ? "border-white/25 text-white hover:border-white/60 hover:bg-white/10"
      : "border-ink/15 text-ink hover:border-electric hover:text-electric"
  } ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function CheckList({
  items,
  dark = false,
  columns = 1,
}: {
  items: string[];
  dark?: boolean;
  columns?: 1 | 2;
}) {
  return (
    <ul className={`mt-6 grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
              dark ? "brand-gradient text-white" : "bg-electric/10 text-electric"
            }`}
          >
            ✓
          </span>
          <span className={`leading-relaxed ${dark ? "text-slate-300" : "text-ink-soft"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <div className="group h-full rounded-xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
      {icon ? (
        <div
          aria-hidden
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-acyan/15 via-electric/10 to-aviolet/15 text-xl"
        >
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; description: string; icon?: string }[];
}) {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <FeatureCard {...item} />
        </Reveal>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

export function SplitSection({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  dark = false,
  flip = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  visual: ReactNode;
  dark?: boolean;
  flip?: boolean;
}) {
  return (
    <Section dark={dark}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={description} dark={dark} />
          {bullets ? <CheckList items={bullets} dark={dark} /> : null}
        </Reveal>
        <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
          {visual}
        </Reveal>
      </div>
    </Section>
  );
}

export function CtaBanner({
  title = "Your CRM should do more than store customer data.",
  subtitle = "Meet Aderiqo — one intelligent workspace for customer relationships, sales pipeline and everyday work.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="brand-gradient absolute top-0 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 text-2xl font-semibold text-gradient sm:text-3xl">Meet Aderiqo.</p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/demo" external className="min-w-44 justify-center">
            Get started
          </PrimaryButton>
          <SecondaryButton href="/contact" dark className="min-w-44 justify-center">
            Book a demo
          </SecondaryButton>
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Aderiqo by ArdenzaTech · CRM first. AI makes the CRM intelligent.
        </p>
      </div>
    </section>
  );
}

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Aderiqo home"
    >
      <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9" priority />
      <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        ADERIQO
      </span>
    </Link>
  );
}
