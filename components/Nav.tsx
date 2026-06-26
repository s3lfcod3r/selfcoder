"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import type { Lang } from "@/lib/i18n";

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-[var(--color-line-strong)] p-0.5 text-xs font-medium">
      {(["de", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === l ? "bg-teal text-[#04140f]" : "text-[var(--color-muted)] hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.projects, href: "#projekte" },
    { label: t.nav.philosophy, href: "#philosophie" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[var(--color-line)] bg-[rgba(8,12,17,0.82)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 md:hidden" aria-label="SelfCoder">
          <Image src="/logo-wide.png" alt="SelfCoder" width={150} height={44} priority className="h-8 w-auto" />
        </a>

        <div
          className={`hidden items-center gap-8 transition-opacity duration-300 md:flex ${
            pastHero ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[var(--color-muted)] transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <LangToggle />
          </div>

          <a
            href="https://github.com/s3lfcod3r"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-sm text-ink transition-colors hover:border-teal hover:bg-[rgba(51,167,140,0.1)] md:inline-flex"
          >
            GitHub
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menü"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] md:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-4 rounded bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-ink transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-4 rounded bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--color-line)] md:hidden"
          >
            <div className="flex flex-col px-6 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--color-line)] py-3 text-base text-ink transition-colors hover:text-teal"
                >
                  {l.label}
                </a>
              ))}

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[var(--color-muted)]">Sprache</span>
                <LangToggle />
              </div>

              <a
                href="https://github.com/s3lfcod3r"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-[#04140f]"
              >
                GitHub <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
