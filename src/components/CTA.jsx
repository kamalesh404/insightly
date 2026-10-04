import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 via-violet-600 to-fuchsia-600 px-6 py-16 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_15%_20%,white,transparent_40%),radial-gradient(circle_at_85%_80%,white,transparent_40%)]" />
        <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl animate-blob" />

        <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Start seeing clearly today
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Join 4,000+ companies making faster decisions with Insightly. Free for 14 days — no
          credit card, no setup headaches.
        </p>

        <form
          className="relative mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            Work email
          </label>
          <div className="relative flex-1">
            <Mail
              size={16}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-white/60"
            />
            <input
              id="cta-email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/30 bg-white/10 py-3.5 pr-4 pl-11 text-sm text-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/15 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-700 shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <p className="relative mt-4 text-xs text-white/60">Free for 14 days · Cancel anytime</p>
      </Reveal>
    </section>
  );
}
