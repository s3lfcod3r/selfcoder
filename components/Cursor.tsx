"use client";

import { useEffect, useRef } from "react";

/** Custom magnetic cursor: a precise dot plus a lagging ring that swells on interactive elements. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("cursor-none");

    let dx = -100;
    let dy = -100;
    let rx = -100;
    let ry = -100;
    let hover = false;
    let visible = false;

    const move = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (!visible) {
        visible = true;
        if (dot.current) dot.current.style.opacity = "1";
        if (ring.current) ring.current.style.opacity = "1";
      }
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hover = !!t.closest("a, button, [data-cursor]");
    };
    const leave = () => {
      visible = false;
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };

    let raf = 0;
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      const s = hover ? 1.8 : 1;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      if (ring.current)
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${s})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        style={{ opacity: 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[95] h-1.5 w-1.5 rounded-full bg-teal-bright"
      />
      <div
        ref={ring}
        style={{ opacity: 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[95] h-9 w-9 rounded-full border border-ice/60 transition-[border-color,background-color] duration-200"
      />
    </>
  );
}
