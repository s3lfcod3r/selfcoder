"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLang } from "./LanguageProvider";
import type { ProjectItem } from "@/lib/i18n";

function Card({ p, i }: { p: ProjectItem; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 14 });
  const sy = useSpring(my, { stiffness: 120, damping: 14 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  function move(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function leave() {
    mx.set(0);
    my.set(0);
  }

  const bar =
    p.accent === "teal"
      ? "from-teal to-ice"
      : p.accent === "ice"
        ? "from-ice to-teal"
        : "from-teal via-ice to-teal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-elev)] p-7 transition-colors hover:border-[var(--color-line-strong)]"
    >
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${bar} opacity-60`} />
      <Image
        src="/shield.png"
        alt=""
        width={920}
        height={1140}
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-8 h-36 w-auto opacity-[0.08] transition-opacity duration-500 group-hover:opacity-30"
      />

      <div className="mb-5 flex items-center justify-end">
        <span className="font-mono text-xs text-[var(--color-faint)]">0{i + 1}</span>
      </div>

      <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
      <p className="mt-1 text-sm font-medium text-teal">{p.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {p.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[var(--color-line)] bg-white/[0.02] px-3 py-2"
          >
            <div className="text-[10px] uppercase tracking-wider text-[var(--color-faint)]">{m.label}</div>
            <div className="text-sm font-medium text-ink">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-[var(--color-line)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
          >
            {s}
          </span>
        ))}
      </div>

      <a
        href={`https://github.com/s3lfcod3r/${p.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-[var(--color-line)] px-3 py-2 font-mono text-xs text-[var(--color-muted)] transition-colors hover:border-teal hover:text-teal"
      >
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projekte" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <div className="mb-3 flex items-center gap-3 text-sm font-medium text-teal">
          <span className="h-px w-8 bg-teal" /> {t.projects.tag}
        </div>
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.projects.heading}
        </h2>
        <p className="mt-4 text-lg text-[var(--color-muted)]">{t.projects.sub}</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p, i) => (
          <Card key={p.slug} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
