import { Zap, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Customers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Community", "Status", "Security"],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-slate-50/60 dark:border-white/5 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-ink-950 dark:text-white">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 text-white">
                <Zap size={18} strokeWidth={2.5} />
              </span>
              Insightly
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-800/60 dark:text-white/60">
              AI-powered analytics that turns your product data into decisions. Made for teams who
              ship.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-black/10 text-ink-800/60 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:text-white/60 dark:hover:text-primary-400"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-widest text-ink-950 uppercase dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-ink-800/60 transition-colors hover:text-ink-950 dark:text-white/60 dark:hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-xs text-ink-800/50 sm:flex-row dark:border-white/5 dark:text-white/50">
          <p>© {new Date().getFullYear()} Insightly Labs, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-ink-950 dark:hover:text-white">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-ink-950 dark:hover:text-white">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-ink-950 dark:hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
