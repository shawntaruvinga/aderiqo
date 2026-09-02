import { PageHero, SplitSection, CtaBanner } from "./ui";
import {
  DashboardMock,
  AiMock,
  PipelineMock,
  IntelligenceMock,
  ContactsMock,
  TasksMock,
  CalendarMock,
} from "./mockups";
import type { ReactNode } from "react";

export type FeatureSection = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  visual?: "dashboard" | "ai" | "pipeline" | "intelligence" | "contacts" | "tasks" | "calendar" | "cards";
  cards?: { title: string; description: string }[];
  dark?: boolean;
  flip?: boolean;
  center?: boolean;
};

const VISUALS: Record<string, ReactNode> = {
  dashboard: <DashboardMock />,
  ai: <AiMock />,
  pipeline: <PipelineMock />,
  intelligence: <IntelligenceMock />,
  contacts: <ContactsMock />,
  tasks: <TasksMock />,
  calendar: <CalendarMock />,
};

export function FeaturePage({
  eyebrow,
  title,
  subtitle,
  sections,
  ctaTitle,
  ctaSubtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  sections: FeatureSection[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {sections.map((section) =>
        section.visual === "cards" || !section.visual ? (
          <SplitSection
            key={section.title}
            dark={section.dark}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            visual={
              <div className="grid gap-4 sm:grid-cols-2">
                {(section.cards ?? []).map((card) => (
                  <div key={card.title} className="rounded-xl border border-white/15 bg-white/5 p-5">
                    <p className="font-semibold text-white">{card.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{card.description}</p>
                  </div>
                ))}
              </div>
            }
          />
        ) : (
          <SplitSection
            key={section.title}
            dark={section.dark}
            flip={section.flip}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            bullets={section.bullets}
            visual={VISUALS[section.visual]}
          />
        )
      )}
      <CtaBanner title={ctaTitle} subtitle={ctaSubtitle} />
    </>
  );
}