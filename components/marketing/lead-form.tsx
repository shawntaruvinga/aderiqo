"use client";

import { useState, type FormEvent } from "react";

type Variant = "contact" | "demo";

const inputCls =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-electric focus:outline-none";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

export function LeadForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isDemo = variant === "demo";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
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
        <h2 className="text-xl font-semibold text-ink">
          {isDemo ? "Demo request received" : "Message sent"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Thank you. Our team will get back to you shortly at the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-6 shadow-card sm:p-8" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Full name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} placeholder="Jane Cooper" />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Company</label>
          <input id="company" name="company" type="text" required autoComplete="organization" className={inputCls} placeholder="Acme Industries" />
        </div>
        <div className={isDemo ? "" : "sm:col-span-2"}>
          <label htmlFor="email" className={labelCls}>Work email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="jane@acme.com" />
        </div>
        {isDemo ? (
          <div>
            <label htmlFor="size" className={labelCls}>Company size</label>
            <select id="size" name="size" required className={inputCls} defaultValue="">
              <option value="" disabled>Select company size</option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>201–1000</option>
              <option>1000+</option>
            </select>
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            {isDemo ? "What would you like to accomplish with Aderiqo?" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={inputCls}
            placeholder={
              isDemo
                ? "Tell us about your team, your current tools and what you want to improve…"
                : "How can we help?"
            }
          />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-lg bg-amagenta/10 px-4 py-3 text-sm text-amagenta">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="brand-gradient mt-6 w-full rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : isDemo ? "Book a demo" : "Send message"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        We use your details only to respond to your enquiry. See our{" "}
        <a href="/privacy" className="text-electric hover:underline">privacy policy</a>.
      </p>
    </form>
  );
}