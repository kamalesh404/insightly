import { useEffect, useState } from "react";
import { Menu, X, Zap, Moon, Sun } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/70"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-ink-950 dark:text-white">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 text-white shadow-lg shadow-primary-500/30">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          Insightly
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-800/70 transition-colors hover:text-ink-950 dark:text-white/70 dark:hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="grid size-9 place-items-center rounded-full border border-black/10 text-ink-800 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#pricing"
            className="hidden rounded-full bg-ink-950 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 sm:inline-flex dark:bg-white dark:text-ink-950 dark:hover:bg-primary-400"
          >
            Start free
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-black/10 text-ink-800 md:hidden dark:border-white/10 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white/95 px-5 py-4 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink-950/95">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-ink-950 px-5 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-ink-950"
              >
                Start free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
