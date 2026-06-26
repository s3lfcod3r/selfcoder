"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="kontakt" className="relative overflow-hidden border-t border-[var(--color-line)] py-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-md">
            <Image src="/logo-wide.png" alt="SelfCoder" width={180} height={52} className="h-9 w-auto" />
            <p className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight">
              {t.hero.line1} <span className="text-gradient">{t.hero.accent}</span>
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://github.com/s3lfcod3r"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-ink transition-colors hover:text-teal"
            >
              GitHub <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <button
              type="button"
              onClick={() => {
                const user = "info";
                const domain = "selfcoder.de";
                window.location.href = `mailto:${user}@${domain}`;
              }}
              className="text-left text-[var(--color-muted)] transition-colors hover:text-ink"
            >
              info <span aria-hidden="true">(at)</span> selfcoder.de
            </button>
            <a href="#top" className="text-[var(--color-muted)] transition-colors hover:text-ink">
              {t.footer.backToTop}
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-faint)] sm:flex-row sm:items-center">
          <span className="flex items-center gap-3">
            © 2026 SelfCoder · selfcoder.de
            <a href="/datenschutz" className="transition-colors hover:text-ink">
              Datenschutz
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
