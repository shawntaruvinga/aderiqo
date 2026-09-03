import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-widest text-electric uppercase">404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="brand-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
