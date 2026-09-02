import type { ReactNode } from "react";

/** Shared app-window chrome used by all product mockups. */
export function AppWindow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900 text-left shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 bg-navy-850 px-4 py-2.5">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-amagenta/70" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-aviolet/70" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-acyan/70" />
        <span className="ml-3 text-xs font-medium text-slate-400">{title}</span>
      </div>
      <div className="flex text-[11px] leading-normal text-slate-300">
        <aside aria-hidden className="hidden w-36 shrink-0 border-r border-white/10 bg-navy-950/60 p-3 sm:block">
          {["Dashboard", "Aderiqo AI", "Companies", "Contacts", "Opportunities", "Calendar", "Tasks", "Emails"].map(
            (item, i) => (
              <div
                key={item}
                className={`mb-1 rounded-md px-2 py-1.5 ${
                  i === 0 ? "brand-gradient font-semibold text-white" : "text-slate-400"
                }`}
              >
                {item}
              </div>
            )
          )}
        </aside>
        <div className="min-w-0 flex-1 p-4">{children}</div>
      </div>
    </div>
  );
}

function Kpi({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <p className="text-[10px] tracking-wide text-slate-400 uppercase">{label}</p>
      <p className={`mt-1 text-base font-bold ${tone}`}>{value}</p>
    </div>
  );
}

export function DashboardMock() {
  const bars = [42, 58, 50, 68, 62, 80, 74, 90, 84, 96, 88, 100];
  return (
    <AppWindow title="Aderiqo — Dashboard">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Kpi label="Open pipeline" value="€1.2M" tone="text-acyan" />
        <Kpi label="Won this quarter" value="€340K" tone="text-white" />
        <Kpi label="Active contacts" value="1,842" tone="text-aviolet" />
        <Kpi label="Open tasks" value="27" tone="text-amagenta" />
      </div>
      <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <p className="mb-2 text-[10px] tracking-wide text-slate-400 uppercase">Revenue trend</p>
        <div className="flex h-24 items-end gap-1.5" aria-hidden>
          {bars.map((h, i) => (
            <div
              key={i}
              className="brand-gradient flex-1 rounded-t-sm opacity-90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {[
          ["Acme Industries", "Proposal sent", "text-acyan"],
          ["Northwind Group", "Discovery call", "text-aviolet"],
          ["Contoso Retail", "Negotiation", "text-amagenta"],
        ].map(([name, stage, tone]) => (
          <div key={name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
            <span className="font-medium text-white">{name}</span>
            <span className={`font-semibold ${tone}`}>{stage}</span>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

export function AiMock() {
  return (
    <AppWindow title="Aderiqo AI">
      <div className="space-y-3">
        <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-electric/20 px-3 py-2 text-white">
          Create a contact for John at Acme.
        </div>
        <div className="w-fit max-w-[85%] rounded-lg rounded-bl-sm border border-white/10 bg-white/[0.05] px-3 py-2">
          <p className="font-semibold text-white">Done — John created at Acme Industries.</p>
          <p className="mt-1 text-slate-400">
            Added role: Operations Director · Linked to existing company record.
          </p>
        </div>
        <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-electric/20 px-3 py-2 text-white">
          Which deals are most likely to close this month?
        </div>
        <div className="w-fit max-w-[85%] rounded-lg rounded-bl-sm border border-white/10 bg-white/[0.05] px-3 py-2">
          <p className="font-semibold text-white">3 opportunities are on track:</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-slate-400">
            <li>Acme Industries — €120K (proposal sent, strong engagement)</li>
            <li>Northwind Group — €85K (negotiation stage)</li>
            <li>Contoso Retail — €60K (follow-up scheduled Friday)</li>
          </ul>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-navy-950/60 px-3 py-2">
          <span aria-hidden className="brand-gradient h-4 w-4 rounded-full" />
          <span className="text-slate-400">Ask Aderiqo AI anything…</span>
        </div>
      </div>
    </AppWindow>
  );
}

export function PipelineMock() {
  const cols: [string, [string, string][]][] = [
    ["Discovery", [["Northwind Group", "€45K"], ["Helios Ltd", "€22K"]]],
    ["Proposal", [["Acme Industries", "€120K"], ["Contoso Retail", "€60K"]]],
    ["Negotiation", [["Vertex Partners", "€85K"]]],
  ];
  return (
    <AppWindow title="Aderiqo — Opportunities">
      <div className="grid grid-cols-3 gap-2">
        {cols.map(([stage, deals]) => (
          <div key={stage}>
            <p className="mb-2 text-[10px] font-semibold tracking-wide text-slate-400 uppercase">{stage}</p>
            <div className="space-y-2">
              {deals.map(([name, value]) => (
                <div key={name} className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="mt-0.5 text-acyan">{value}</p>
                  <div aria-hidden className="brand-gradient mt-2 h-1 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

export function TasksMock() {
  const tasks: [string, string, boolean][] = [
    ["Send proposal to Acme Industries", "Today · Sales", false],
    ["Follow up with Sarah at Northwind", "Tomorrow · You", false],
    ["Prepare Q3 revenue review", "Friday · Leadership", false],
    ["Update company record: Contoso", "Done", true],
  ];
  return (
    <AppWindow title="Aderiqo — Tasks">
      <div className="space-y-2">
        {tasks.map(([title, meta, done]) => (
          <div key={title} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <span
              aria-hidden
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[9px] ${
                done ? "brand-gradient border-transparent text-white" : "border-slate-500"
              }`}
            >
              {done ? "✓" : ""}
            </span>
            <span className={`flex-1 ${done ? "text-slate-500 line-through" : "text-white"}`}>{title}</span>
            <span className="text-slate-400">{meta}</span>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

export function CalendarMock() {
  const events = [
    { day: 1, top: 10, h: 22, label: "Acme — demo call", tone: "from-acyan/60 to-acyan/20" },
    { day: 3, top: 42, h: 18, label: "Northwind follow-up", tone: "from-aviolet/60 to-aviolet/20" },
    { day: 4, top: 20, h: 26, label: "Pipeline review", tone: "from-electric/60 to-electric/20" },
  ];
  return (
    <AppWindow title="Aderiqo — Calendar">
      <div className="grid grid-cols-5 gap-1.5" aria-hidden>
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
          <div key={d} className="rounded-md border border-white/10 bg-white/[0.03] p-1.5 text-center text-[10px] text-slate-400">
            {d}
          </div>
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative h-32 rounded-md border border-white/10 bg-white/[0.02]">
            {events
              .filter((e) => e.day === i + 1)
              .map((e) => (
                <div
                  key={e.label}
                  className={`absolute inset-x-1 rounded bg-gradient-to-b ${e.tone} px-1.5 py-1 text-[9px] font-medium text-white`}
                  style={{ top: `${e.top}px`, minHeight: `${e.h}px` }}
                >
                  {e.label}
                </div>
              ))}
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

export function IntelligenceMock() {
  return (
    <AppWindow title="Aderiqo — Revenue Intelligence">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <p className="mb-2 text-[10px] tracking-wide text-slate-400 uppercase">Pipeline by stage</p>
          {[
            ["Discovery", "34%", "34%"],
            ["Proposal", "28%", "28%"],
            ["Negotiation", "22%", "22%"],
            ["Closing", "16%", "16%"],
          ].map(([label, w, text]) => (
            <div key={label} className="mb-1.5 flex items-center gap-2">
              <span className="w-20 text-slate-400">{label}</span>
              <div className="h-2 flex-1 rounded-full bg-white/10">
                <div className="brand-gradient h-2 rounded-full" style={{ width: w }} />
              </div>
              <span className="text-slate-300">{text}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <p className="mb-2 text-[10px] tracking-wide text-slate-400 uppercase">Insights</p>
          <ul className="space-y-2 text-slate-300">
            <li className="rounded-md bg-acyan/10 px-2.5 py-2">
              Deal velocity improved across the proposal stage this quarter.
            </li>
            <li className="rounded-md bg-aviolet/10 px-2.5 py-2">
              3 opportunities have had no activity in 14 days.
            </li>
            <li className="rounded-md bg-amagenta/10 px-2.5 py-2">
              Follow-ups completed on time: strong consistency this month.
            </li>
          </ul>
        </div>
      </div>
    </AppWindow>
  );
}

export function ContactsMock() {
  const rows: [string, string, string][] = [
    ["John Meyer", "Acme Industries", "Operations Director"],
    ["Sarah Chen", "Northwind Group", "Head of Procurement"],
    ["David Okafor", "Contoso Retail", "IT Manager"],
    ["Lena Fischer", "Vertex Partners", "Managing Partner"],
  ];
  return (
    <AppWindow title="Aderiqo — Contacts">
      <div className="overflow-hidden rounded-lg border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-white/[0.04] text-slate-400">
            <tr>
              <th className="px-3 py-2 font-medium">Name</th>
              <th className="px-3 py-2 font-medium">Company</th>
              <th className="hidden px-3 py-2 font-medium sm:table-cell">Role</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, company, role]) => (
              <tr key={name} className="border-t border-white/10">
                <td className="px-3 py-2">
                  <span
                    aria-hidden
                    className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-electric/25 text-[9px] font-bold text-white"
                  >
                    {name[0]}
                  </span>
                  <span className="font-medium text-white">{name}</span>
                </td>
                <td className="px-3 py-2 text-slate-300">{company}</td>
                <td className="hidden px-3 py-2 text-slate-400 sm:table-cell">{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppWindow>
  );
}

/** Realistic AI conversation demo showing multi-step record creation. */
export function AiConversationMock() {
  return (
    <AppWindow title="Aderiqo AI">
      <div className="space-y-3">
        <div className="ml-auto w-fit max-w-[88%] rounded-lg rounded-br-sm bg-electric/20 px-3 py-2 text-white">
          Create a contact for John at Acme. He&apos;s the CTO and his email is john@acme.com.
        </div>
        <div className="w-fit max-w-[88%] rounded-lg rounded-bl-sm border border-white/10 bg-white/[0.05] px-3 py-2">
          <ul className="space-y-1.5">
            {[
              "John identified",
              "Acme matched to Acme Industries",
              "Title: CTO",
              "Email: john@acme.com",
            ].map((step) => (
              <li key={step} className="flex items-center gap-2 text-slate-200">
                <span
                  aria-hidden
                  className="brand-gradient flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                >
                  ✓
                </span>
                {step}
              </li>
            ))}
          </ul>
          <p className="mt-2.5 border-t border-white/10 pt-2.5 font-semibold text-white">
            John has been added to Acme Industries.
          </p>
        </div>
        <div className="ml-auto w-fit max-w-[88%] rounded-lg rounded-br-sm bg-electric/20 px-3 py-2 text-white">
          Schedule a follow-up with him next Tuesday.
        </div>
        <div className="w-fit max-w-[88%] rounded-lg rounded-bl-sm border border-white/10 bg-white/[0.05] px-3 py-2">
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-slate-200">
              <span aria-hidden className="brand-gradient flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">✓</span>
              Follow-up task created for Tuesday
            </li>
            <li className="flex items-center gap-2 text-slate-200">
              <span aria-hidden className="brand-gradient flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white">✓</span>
              Linked to John · Acme Industries
            </li>
          </ul>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-navy-950/60 px-3 py-2">
          <span aria-hidden className="brand-gradient h-4 w-4 rounded-full" />
          <span className="text-slate-400">Tell Aderiqo what needs to happen…</span>
        </div>
      </div>
    </AppWindow>
  );
}

export function HeroMock() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="brand-gradient absolute -inset-6 rounded-3xl opacity-[0.18] blur-3xl"
      />
      <div className="relative scale-[1.02]">
        <DashboardMock />
      </div>

      {/* Floating AI card */}
      <div className="absolute -bottom-8 -left-4 hidden w-64 overflow-hidden rounded-xl border border-white/15 bg-navy-900/95 shadow-lift backdrop-blur sm:block lg:-left-12">
        <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2">
          <span aria-hidden className="brand-gradient h-4 w-4 rounded-full" />
          <span className="text-[11px] font-semibold text-white">Aderiqo AI</span>
        </div>
        <div className="space-y-1.5 px-3.5 py-3 text-[11px] text-slate-300">
          <p className="rounded-md bg-white/5 px-2 py-1.5 text-slate-200">
            Create a contact for John at Acme.
          </p>
          <p className="flex items-center gap-1.5 text-acyan">
            <span aria-hidden className="brand-gradient flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold text-white">✓</span>
            John added to Acme Industries
          </p>
        </div>
      </div>

      {/* Floating pipeline card */}
      <div className="absolute -top-8 -right-3 hidden w-52 overflow-hidden rounded-xl border border-white/15 bg-navy-900/95 shadow-lift backdrop-blur sm:block lg:-right-10">
        <div className="border-b border-white/10 px-3.5 py-2 text-[11px] font-semibold text-white">
          Opportunities
        </div>
        <div className="space-y-2 px-3.5 py-3">
          {[
            ["Acme Industries", "€120K", "w-[85%]"],
            ["Northwind Group", "€85K", "w-[60%]"],
            ["Contoso Retail", "€60K", "w-[40%]"],
          ].map(([name, value, w]) => (
            <div key={name} className="text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>{name}</span>
                <span className="font-semibold text-acyan">{value}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/10">
                <div aria-hidden className={`brand-gradient h-1.5 rounded-full ${w}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

