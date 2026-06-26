"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";

function Terminal({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [shown, setShown] = useState<string[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (!inView) return;
    let li = 0;
    let ci = 0;
    let t: ReturnType<typeof setTimeout>;

    function step() {
      if (li >= lines.length) return;
      const line = lines[li];
      if (ci <= line.length) {
        setTyping(line.slice(0, ci));
        ci++;
        t = setTimeout(step, 26);
      } else {
        setShown((s) => [...s, line]);
        setTyping("");
        li++;
        ci = 0;
        t = setTimeout(step, 280);
      }
    }
    t = setTimeout(step, 300);
    return () => clearTimeout(t);
  }, [inView, lines]);

  return (
    <div ref={ref} className="overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[#070b0f] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-[var(--color-faint)]">selfcoder@homelab</span>
      </div>
      <div className="min-h-[160px] p-5 font-mono text-sm leading-7">
        {shown.map((l, idx) => (
          <div key={idx} className={l.startsWith("✔") ? "text-teal" : "text-ice-bright"}>
            {l}
          </div>
        ))}
        {typing && (
          <div className={typing.startsWith("✔") ? "text-teal" : "text-ice-bright"}>
            {typing}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-teal animate-pulse-glow" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Philosophy() {
  const { lang, t } = useLang();

  return (
    <section id="philosophie" className="relative border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-3 text-sm font-medium text-ice">
            <span className="h-px w-8 bg-ice" /> {t.philosophy.tag}
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.philosophy.heading}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted)]">{t.philosophy.sub}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.philosophy.principles.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-elev)] p-5"
              >
                <div className="font-display text-lg font-semibold text-ink">{p.t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Terminal key={lang} lines={t.philosophy.terminal} />
        </motion.div>
      </div>
    </section>
  );
}
