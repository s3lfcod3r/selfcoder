"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import ParticleField from "./ParticleField";
import LogoHeroAnim from "./LogoHeroAnim";
import { useLang } from "./LanguageProvider";

// Base reveal delay. Intro preloader was removed, so content appears almost
// immediately — just a short stagger, no multi-second wait.
const D = 0.15;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <ParticleField />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/shield.png"
          alt=""
          width={920}
          height={1140}
          aria-hidden="true"
          className="absolute right-[-24%] top-[14%] block w-[32rem] max-w-none opacity-[0.05] blur-[1px] animate-float-slow sm:right-[-14%] sm:w-[40rem] lg:right-[-8%] lg:top-1/2 lg:w-[46rem] lg:-translate-y-1/2"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[rgba(8,12,17,0.6)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
      </div>

      <div className="pointer-events-none absolute -right-20 top-12 h-96 w-96 rounded-full bg-teal/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-ice/10 blur-[120px]" />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <h1 className="font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: D + 0.08 }}
                  className="block"
                >
                  {t.hero.line1}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: D + 0.2 }}
                  className="block"
                >
                  <span className="text-gradient">{t.hero.accent}</span>
                  {t.hero.accentRest}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: D + 0.4 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-muted)]"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: D + 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projekte"
                className="group inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-medium text-[#04140f] transition-transform hover:scale-[1.03] glow-teal"
              >
                {t.hero.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#philosophie"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-7 py-3.5 font-medium text-ink transition-colors hover:border-ice hover:bg-[rgba(157,189,208,0.08)]"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: D }}
            className="relative order-first flex h-[280px] w-full flex-col items-center justify-center gap-2 sm:h-[480px] lg:order-none"
          >
            <LogoHeroAnim flipInterval={10} />
            <div
              className="drop-shadow-[0_0_24px_rgba(51,167,140,0.35)]"
              style={{ animation: "breatheonly 10s ease-in-out infinite" }}
            >
              <span className="font-wordmark block whitespace-nowrap text-[clamp(2.25rem,9vw,5.5rem)] font-extrabold leading-none tracking-tight">
                <span className="text-ice">Self</span><span className="text-teal">Coder</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-line)] bg-[rgba(10,15,20,0.55)] backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[var(--color-line)] px-6 sm:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={i} className="px-4 py-5 text-center sm:text-left">
              <div className="font-display text-3xl font-semibold text-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[var(--color-faint)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
