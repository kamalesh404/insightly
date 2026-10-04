import { LineChart, ShieldCheck, Zap, BarChart3, Bell, Blocks } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const features = [
  {
    icon: LineChart,
    title: "Real-time dashboards",
    desc: "Streams update as your data changes. No refresh button, no stale numbers, no context switching.",
    tint: "from-primary-500 to-violet-500",
  },
  {
    icon: Zap,
    title: "AI forecasting",
    desc: "Our models predict churn, revenue, and demand weeks ahead — with confidence you can act on.",
    tint: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Blocks,
    title: "50+ integrations",
    desc: "Plug into Postgres, Stripe, Segment, Snowflake, and more in minutes. Your stack, already wired.",
    tint: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "SQL-free exploration",
    desc: "Ask questions in plain English and get answers with charts. Analysts move faster, leaders stay curious.",
    tint: "from-amber-500 to-orange-500",
  },
  {
    icon: Bell,
    title: "Smart alerts",
    desc: "Get pinged only when something matters — anomalies, goals hit, or thresholds crossed. Quiet by default.",
    tint: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    desc: "SOC 2 Type II, SSO/SAML, row-level permissions, and full audit logs. Your data stays yours.",
    tint: "from-sky-500 to-blue-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400">
          Features
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl dark:text-white">
          Everything you need to see clearly
        </h2>
        <p className="mt-4 text-lg text-ink-800/60 dark:text-white/60">
          A complete analytics toolkit that replaces six tools — designed for teams that want
          answers, not chores.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal
            key={f.title}
            delay={i * 80}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-primary-500/30"
          >
            <div className="absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-primary-400/10 to-fuchsia-400/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />
            <span
              className={`relative inline-grid size-12 place-items-center rounded-xl bg-gradient-to-br ${f.tint} text-white shadow-lg`}
            >
              <f.icon size={22} />
            </span>
            <h3 className="relative mt-5 font-display text-lg font-semibold text-ink-950 dark:text-white">
              {f.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-800/60 dark:text-white/60">
              {f.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
