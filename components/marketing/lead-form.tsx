"use client";

import { useState, type FormEvent } from "react";

type Variant = "contact" | "demo" | "early-access";

const inputCls =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-electric focus:outline-none";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";
const errorCls = "mt-1 block text-xs font-medium text-amagenta";

const SIZE_OPTIONS = ["1–10", "11–50", "51–200", "201–1000", "1000+"];

type FieldErrors = Partial<Record<"name" | "email" | "company" | "jobTitle" | "size" | "message", string>>;

function validate(variant: Variant, data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name?.trim()) errors.name = "Please enter your full name.";
  const email = data.email?.trim() ?? "";
  if (!email) errors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (!data.company?.trim()) errors.company = "Please enter your company name.";
  if (variant === "contact" && !data.message?.trim()) errors.message = "Please tell us how we can help.";
  return errors;
}

const SUCCESS_COPY: Record<Variant, { title: string; body: string }> = {
  demo: {
    title: "Demo request received",
    body: "Your demo request has been received. Our team will be in touch shortly.",
  },
  "early-access": {
    title: "You're on the list",
    body: "You're on the list. We'll be in touch when Aderiqo is ready for you.",
  },
  contact: {
    title: "Message sent",
    body: "Thank you. Our team will get back to you shortly at the email address you provided.",
  },
};

export function LeadForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const isDemo = variant === "demo";
  const isEarlyAccess = variant === "early-access";
  const success = SUCCESS_COPY[variant];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return; // protection against duplicate submissions
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const errors = validate(variant, data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: variant }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  function fieldProps(field: keyof FieldErrors) {
    return {
      "aria-invalid": fieldErrors[field] ? true : undefined,
      "aria-describedby": fieldErrors[field] ? `${field}-error` : undefined,
    };
  }

  function fieldError(field: keyof FieldErrors) {
    return fieldErrors[field] ? (
      <span id={`${field}-error`} className={errorCls} role="alert">
        {fieldErrors[field]}
      </span>
    ) : null;
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-electric/30 bg-electric/5 p-8 text-center"
      >
        <div
          aria-hidden
          className="brand-gradient mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl text-white"
        >
          ✓
        </div>
        <h2 className="text-xl font-semibold text-ink">{success.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{success.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-6 shadow-card sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" className={inputCls} placeholder="Jane Cooper" {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputCls} placeholder="Acme Industries" {...fieldProps("company")} />
          {fieldError("company")}
        </div>
        <div className={isDemo ? "" : "sm:col-span-2"}>
          <label htmlFor="email" className={labelCls}>Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputCls} placeholder="jane@acme.com" {...fieldProps("email")} />
          {fieldError("email")}
        </div>
        {isDemo || isEarlyAccess ? (
          <div>
            <label htmlFor="jobTitle" className={labelCls}>
              Job title{isEarlyAccess ? <span className="font-normal text-ink-soft"> (optional)</span> : ""}
            </label>
            <input id="jobTitle" name="jobTitle" type="text" autoComplete="organization-title" className={inputCls} placeholder="Head of Sales" {...fieldProps("jobTitle")} />
          </div>
        ) : null}
        {isDemo ? (
          <div>
            <label htmlFor="size" className={labelCls}>
              Company size <span className="font-normal text-ink-soft">(optional)</span>
            </label>
            <select id="size" name="size" className={inputCls} defaultValue="">
              <option value="">Select company size</option>
              {SIZE_OPTIONS.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            {isDemo
              ? "What would you like to accomplish with Aderiqo?"
              : isEarlyAccess
                ? "Anything you'd like us to know?"
                : "Message"}
            {isDemo || isEarlyAccess ? <span className="font-normal text-ink-soft"> (optional)</span> : ""}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputCls}
            placeholder={
              isDemo
                ? "Tell us about your team, your current tools and what you want to improve…"
                : isEarlyAccess
                  ? "Team size, current tools, what you're hoping Aderiqo will do for you…"
                  : "How can we help?"
            }
            {...fieldProps("message")}
          />
          {fieldError("message")}
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" aria-live="polite" className="mt-4 rounded-lg bg-amagenta/10 px-4 py-3 text-sm text-amagenta">
          Something went wrong sending your request. Please try again or email us directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="brand-gradient mt-6 w-full rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending…"
          : isDemo
            ? "Request Demo"
            : isEarlyAccess
              ? "Join Early Access"
              : "Send message"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        We use your details only to respond to your enquiry. See our{" "}
        <a href="/privacy" className="text-electric hover:underline">privacy policy</a>.
      </p>
    </form>
  );
}