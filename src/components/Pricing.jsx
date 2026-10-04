import { Check } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "/mo",
    blurb: "For side projects and early experiments.",
    features: ["Up to 10k events/mo", "3 dashboards", "7-day data retention", "Community support"],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Growth",
    price: "49",
    period: "/mo",
    blurb: "For startups that need real answers, fast.",
    features: [
      "Up to 1M events/mo",
      "Unlimited dashboards",
      "AI forecasting",
      "1-year data retention",
      "Plain-English queries",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "For orgs with serious scale and security needs.",
    features: [
      "Unlimited events",
      "SSO / SAML & SCIM",
      "Row-level permissions",
      "Dedicated success manager",
      "99.99% uptime SLA",
      "On-prem / VPC deploy",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400">
          Pricing
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl dark:text-white">
          Simple pricing, real ROI
        </h2>
        <p className="mt-4 text-lg text-ink-800/60 dark:text-white/60">
          Start free, upgrade when you grow. Cancel anytime — no lock-in, no surprises.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 100}
            className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
              p.featured
                ? "bg-gradient-to-b from-primary-600 to-violet-700 text-white shadow-2xl shadow-primary-600/30 lg:-my-4 lg:py-12"
                : "border border-black/10 bg-white text-ink-950 dark:border-white/10 dark:bg-ink-800 dark:text-white"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-primary-600 shadow">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">{p.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold tracking-tight">{p.price}</span>
              {p.period && (
                <span className={`text-sm ${p.featured ? "text-white/70" : "text-ink-800/50 dark:text-white/50"}`}>
                  {p.period}
                </span>
              )}
            </div>
            <p className={`mt-2 text-sm ${p.featured ? "text-white/80" : "text-ink-800/60 dark:text-white/60"}`}>
              {p.blurb}
            </p>

            <ul className="mt-7 flex-1 space-y-3.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                      p.featured ? "bg-white/20 text-white" : "bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400"
                    }`}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#top"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                p.featured
                  ? "bg-white text-primary-700 hover:bg-primary-50"
                  : "bg-ink-950 text-white hover:bg-primary-600 dark:bg-white dark:text-ink-950 dark:hover:bg-primary-300"
              }`}
            >
              {p.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
