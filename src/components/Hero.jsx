import { ArrowRight, Play, TrendingUp, Users, Activity, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const sparklines = [
  { label: "Active users", value: "12,480", change: "+18.2%", data: [30, 44, 38, 58, 52, 70, 64, 84, 92], color: "#6366f1" },
  { label: "Revenue", value: "$48.2k", change: "+12.6%", data: [20, 30, 26, 40, 38, 52, 50, 64, 78], color: "#8b5cf6" },
  { label: "Retention", value: "94.1%", change: "+3.1%", data: [40, 42, 46, 44, 50, 54, 60, 62, 66], color: "#10b981" },
];

function Sparkline({ data, color }) {
  const w = 160;
  const h = 44;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / (max - min || 1)) * (h - 8) - 4}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ maxWidth: 160 }} aria-hidden="true">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`0,${h} ${pts} ${w},${h}`} fill={color} opacity="0.12" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background blobs + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white dark:from-ink-950 dark:via-ink-950 dark:to-ink-950" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary-400/30 blur-[120px] dark:bg-primary-500/20 animate-blob" />
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-violet-400/20 blur-[100px] animate-blob" />
        <div className="absolute top-64 -right-32 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-[100px] animate-blob" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-300/60 bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur dark:border-primary-400/20 dark:bg-white/5 dark:text-primary-300">
            <Sparkles size={13} />
            Now with AI-powered forecasting
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl lg:text-7xl dark:text-white">
            Turn product data into{" "}
            <span className="bg-gradient-to-r from-primary-600 via-violet-600 to-fuchsia-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              decisions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-800/70 dark:text-white/70">
            Insightly unifies your metrics, churns out beautiful dashboards, and predicts what
            happens next — so your team spends less time in spreadsheets and more time shipping.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 sm:w-auto dark:bg-white dark:text-ink-950 dark:hover:bg-primary-400"
            >
              Start free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink-800 backdrop-blur transition-colors hover:bg-white sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span className="grid size-6 place-items-center rounded-full bg-primary-500 text-white">
                <Play size={11} fill="currentColor" />
              </span>
              Watch demo
            </a>
          </div>

          <p className="mt-5 text-xs text-ink-800/50 dark:text-white/50">
            Free for 14 days · No credit card required
          </p>
        </Reveal>

        {/* Dashboard mockup */}
        <Reveal delay={150} className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-x-8 -top-10 -bottom-16 -z-10 rounded-[2rem] bg-gradient-to-b from-primary-500/20 via-violet-500/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-primary-900/10 dark:border-white/10 dark:bg-ink-800">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 border-b border-black/5 bg-slate-50 px-4 py-3 dark:border-white/5 dark:bg-ink-900">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 hidden rounded-md bg-black/5 px-3 py-0.5 text-[11px] text-ink-800/50 sm:block dark:bg-white/10 dark:text-white/50">
                app.insightly.io/overview
              </span>
            </div>
            {/* Mock body */}
            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-ink-800/50 dark:text-white/50">Overview</p>
                  <p className="font-display text-xl font-bold text-ink-950 dark:text-white">
                    Good morning, Amara 👋
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/10 dark:text-primary-300">
                    Last 30 days
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {sparklines.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-black/5 bg-slate-50/60 p-4 transition-transform duration-200 hover:-translate-y-1 dark:border-white/5 dark:bg-white/5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-ink-800/50 dark:text-white/50">{s.label}</p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <TrendingUp size={10} />
                        {s.change}
                      </span>
                    </div>
                    <p className="mt-1.5 font-display text-2xl font-bold text-ink-950 dark:text-white">
                      {s.value}
                    </p>
                    <div className="mt-2">
                      <Sparkline data={s.data} color={s.color} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-black/5 bg-slate-50/60 px-5 py-4 text-xs text-ink-800/60 dark:border-white/5 dark:bg-white/5 dark:text-white/60">
                <span className="inline-flex items-center gap-2 font-medium text-ink-950 dark:text-white">
                  <span className="grid size-6 place-items-center rounded-md bg-violet-500 text-white">
                    <Activity size={13} />
                  </span>
                  AI Insight: Revenue is trending up 23% next month — focus spend on retention.
                </span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-4 top-24 hidden animate-float items-center gap-2 rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:flex dark:border-white/10 dark:bg-ink-800/90">
            <span className="grid size-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-500">
              <Users size={16} />
            </span>
            <div>
              <p className="text-xs font-bold text-ink-950 dark:text-white">+2,340 users</p>
              <p className="text-[10px] text-ink-800/50 dark:text-white/50">this week</p>
            </div>
          </div>
          <div className="absolute -right-4 bottom-16 hidden animate-float-slow items-center gap-2 rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:flex dark:border-white/10 dark:bg-ink-800/90">
            <span className="grid size-8 place-items-center rounded-lg bg-primary-500/15 text-primary-500">
              <TrendingUp size={16} />
            </span>
            <div>
              <p className="text-xs font-bold text-ink-950 dark:text-white">Forecast: 99.2%</p>
              <p className="text-[10px] text-ink-800/50 dark:text-white/50">model confidence</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
