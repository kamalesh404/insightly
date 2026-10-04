import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most teams see their first dashboard within 15 minutes. Connect a data source with one of our 50+ integrations, and the AI suggests charts automatically.",
  },
  {
    q: "Do you support our stack?",
    a: "We connect natively to Postgres, MySQL, Snowflake, BigQuery, Redshift, Stripe, Segment, HubSpot, and 40+ more. If it speaks SQL or has a REST API, we can usually pull it in.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Insightly is SOC 2 Type II certified, encrypts data at rest and in transit, supports SSO/SAML, and offers row-level permissions and full audit logs on Enterprise.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Plans are month-to-month and you can cancel in two clicks from settings. Your data stays exportable — we never hold it hostage.",
  },
  {
    q: "What happens after the trial?",
    a: "The 14-day trial is free with full access to Growth features. When it ends you pick a plan, or drop to Starter (free) with no credit card required either way.",
  },
];

function FaqItem({ faq, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white transition-colors dark:border-white/5 dark:bg-white/[0.03]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-ink-950 dark:text-white">
          {faq.q}
        </span>
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-300 dark:bg-primary-500/15 dark:text-primary-400 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus size={15} />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-ink-800/70 dark:text-white/70">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-slate-50/60 scroll-mt-20 py-24 sm:py-32 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl dark:text-white">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqItem faq={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center text-sm text-ink-800/60 dark:text-white/60">
          Still curious?{" "}
          <a href="#top" className="font-semibold text-primary-600 underline-offset-4 hover:underline dark:text-primary-400">
            Talk to us →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
