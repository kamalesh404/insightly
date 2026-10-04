import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal.jsx";

function Counter({ target, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 4000, suffix: "+", label: "Companies onboard" },
  { target: 2.4, suffix: "B", decimals: 1, label: "Events tracked daily" },
  { target: 99.99, suffix: "%", decimals: 2, label: "Uptime SLA" },
  { target: 12, suffix: "min", label: "To first dashboard" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-violet-600 to-fuchsia-600 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_50%,white,transparent_40%),radial-gradient(circle_at_80%_30%,white,transparent_40%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">
              <Counter target={s.target} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-2 text-sm font-medium text-white/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
