"use client";

import Image from "next/image";

/**
 * The chosen hero treatment: Aurora glow + glint (01), gentle breathing (05),
 * and a slow coin-flip (09) every `flipInterval` seconds. Fully transparent.
 */
export default function LogoHeroAnim({ flipInterval = 10 }: { flipInterval?: number }) {
  return (
    <div style={{ perspective: 1100 }} className="relative flex items-center justify-center">
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-teal/25 blur-[110px] animate-pulse-glow" />
      <div className="pointer-events-none absolute h-52 w-52 translate-x-6 rounded-full bg-ice/15 blur-[80px]" />
      <div className="pointer-events-none absolute h-28 w-28 rounded-full bg-[#9fe8ff] blur-[36px] animate-flare" />

      <div className="animate-float-slow">
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            animation: `breatheflip ${flipInterval}s ease-in-out infinite`,
          }}
        >
          <Image
            src="/shield.png"
            alt="SelfCoder Emblem"
            width={920}
            height={1140}
            priority
            className="h-auto w-40 select-none drop-shadow-[0_25px_60px_rgba(51,167,140,0.5)] sm:w-72 xl:w-80"
          />
          <div className="glint-mask pointer-events-none absolute inset-0">
            <div className="glint-sweep" />
          </div>
        </div>
      </div>
    </div>
  );
}
