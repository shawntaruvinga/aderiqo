import { useEffect } from "react";

function maskBodyScroll(open: boolean) {
  if (typeof document === "undefined") return;
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

export function ComingSoonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    maskBodyScroll(open);
    return () => maskBodyScroll(false);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aderiqo coming soon"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-navy-950 p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-acyan shadow-lg">
          <span className="text-2xl">🚀</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white">
          Aderiqo is Coming Soon
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          We&apos;re putting the finishing touches on Aderiqo. The application is currently in private
          development and will be available to the public soon.
        </p>
        <p className="mt-2 text-sm text-slate-400">Stay tuned.</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
