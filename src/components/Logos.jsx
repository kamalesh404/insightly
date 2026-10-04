import { Reveal } from "./Reveal.jsx";

const logos = ["Acme", "Nimbus", "Vertex", "Orbit", "Pulse", "Quantum", "Lumen", "Drift"];

export default function Logos() {
  return (
    <section className="border-y border-black/5 bg-slate-50/50 py-12 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-widest text-ink-800/40 uppercase dark:text-white/40">
            Trusted by data teams at 4,000+ companies
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div
            className="mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            aria-hidden="true"
          >
            <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display text-lg font-semibold whitespace-nowrap text-ink-800/30 dark:text-white/25"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
