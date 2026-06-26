"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/** Intro overlay: the emblem assembles, a bar fills, then the curtain lifts. */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-bg)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <Image
              src="/shield.png"
              alt="SelfCoder"
              width={84}
              height={104}
              priority
              className="animate-float-slow drop-shadow-[0_10px_30px_rgba(51,167,140,0.4)]"
            />
            <div className="h-px w-44 overflow-hidden rounded-full bg-[var(--color-line)]">
              <motion.div
                initial={{ x: "-101%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
                className="h-full w-full bg-gradient-to-r from-teal to-ice"
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-faint)]">
              selfcoder
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
