import { Star } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const testimonials = [
  {
    quote:
      "We replaced 4 BI tools with Insightly. The AI forecasting flagged a churn risk two weeks before our old stack would have even noticed.",
    name: "Amara Okafor",
    role: "Head of Growth · Nimbus",
    initials: "AO",
    color: "from-primary-500 to-violet-500",
  },
  {
    quote:
      "Our CEO asks for numbers during standups now. Insightly answers in seconds instead of 'let me check with the analyst'. Huge quality-of-life win.",
    name: "Daniel Reyes",
    role: "Data Lead · Vertex",
    initials: "DR",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "The plain-English querying is unreal. Non-technical teammates build their own dashboards — our analytics backlog dropped by 80%.",
    name: "Maya Chen",
    role: "Product Manager · Orbit",
    initials: "MC",
    color: "from-amber-500 to-orange-500",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50/60 py-24 scroll-mt-20 sm:py-32 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl dark:text-white">
            Loved by teams who live in data
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/10 dark:border-white/5 dark:bg-ink-800 dark:hover:border-primary-500/30"
            >
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-800/80 dark:text-white/80">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950 dark:text-white">{t.name}</p>
                  <p className="text-xs text-ink-800/50 dark:text-white/50">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
