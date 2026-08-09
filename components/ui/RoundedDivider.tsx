"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * The curved sweep that introduces the dark closing section. A light ellipse
 * sits on top of the dark panel below it, so the dark section reads as having
 * a rounded top edge rather than a hard horizontal seam.
 *
 * The ellipse scales down as it scrolls into view, which flattens the curve
 * on approach and makes the transition feel like the page is folding over.
 */
export default function RoundedDivider() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const curveRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    const curve = curveRef.current;
    if (!wrap || !curve) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        curve,
        { scaleY: 1 },
        {
          scaleY: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="relative z-10 -mb-px h-[9vw] overflow-hidden bg-ink"
    >
      <div
        ref={curveRef}
        className="absolute inset-x-[-25%] bottom-0 h-[26vw] origin-bottom rounded-[50%] bg-background shadow-[0_2.5rem_5rem_rgba(0,0,0,0.35)] will-change-transform"
      />
    </div>
  );
}
