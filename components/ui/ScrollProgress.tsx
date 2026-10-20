"use client";

import { useEffect, useRef } from "react";

/**
 * Hairline reading-progress bar under the nav, for long pages like case
 * studies. Pure scroll position, so it also works with motion reduced.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = barRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-12 z-[91] h-[2px] md:top-14">
      <div
        ref={barRef}
        className="h-full origin-left bg-accent-pink"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
