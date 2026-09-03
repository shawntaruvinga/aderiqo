"use client";

import { useEffect, useId, useState } from "react";

export type AvatarState = "idle" | "listening" | "thinking" | "responding" | "success";

export function AderiqoAIVisual({ state = "idle", size = "large" }: { state?: AvatarState; size?: "small" | "large" }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const uid = useId();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of media-query state after mount; avoids SSR hydration mismatch
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className={`aderiqo-ai-visual aderiqo-ai-visual--${state} aderiqo-ai-visual--${size} ${
        reducedMotion ? "aderiqo-ai-visual--reduced" : ""
      }`}
      aria-hidden="true"
    >
      <div className="aderiqo-ai-visual__stage">
        <div className="aderiqo-ai-visual__glow" />
        <div className="aderiqo-ai-visual__ring aderiqo-ai-visual__ring--outer" />
        <div className="aderiqo-ai-visual__ring aderiqo-ai-visual__ring--mid" />
        <div className="aderiqo-ai-visual__ring aderiqo-ai-visual__ring--inner" />
        <div className="aderiqo-ai-visual__core">
          <div className="aderiqo-ai-visual__inner">
            <span className="aderiqo-ai-visual__mark">✦</span>
          </div>
        </div>
        <div className="aderiqo-ai-visual__particles">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const radius = size === "small" ? 38 : 42;
            return (
              <span
                key={`${uid}-${i}`}
                className="aderiqo-ai-visual__particle"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  top: `${50 + radius * Math.sin(angle)}%`,
                  left: `${50 + radius * Math.cos(angle)}%`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
