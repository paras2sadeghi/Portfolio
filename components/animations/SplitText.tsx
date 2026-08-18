"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE, STAGGER } from "@/utils/motion";

interface SplitTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Word-level is calmer for long copy; char-level suits short display lines. */
  split?: "words" | "chars";
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Play on mount instead of waiting for the element to scroll into view. */
  immediate?: boolean;
}

/**
 * Mask-and-rise text reveal. Each unit sits inside an overflow-hidden wrapper
 * and slides up from below the mask — no opacity fade, which is what keeps it
 * feeling editorial rather than like a generic fade-in.
 */
export default function SplitText({
  text,
  as: Tag = "span",
  className = "",
  split = "words",
  delay = 0,
  stagger,
  duration = 1,
  immediate = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const units =
    split === "chars" ? Array.from(text) : text.split(" ").map((w) => w);

  useEffect(() => {
    // Immediate mode skips the animated mask entirely (see render below), so
    // there is nothing left to animate here.
    if (immediate) return;

    const el = containerRef.current;
    if (!el || reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const targets = el.querySelectorAll<HTMLElement>("[data-split-unit]");
    if (!targets.length) return;

    const tween = gsap.fromTo(
      targets,
      { yPercent: 115 },
      {
        yPercent: 0,
        duration,
        delay,
        ease: GSAP_EASE,
        stagger: stagger ?? (split === "chars" ? STAGGER.tight : STAGGER.base),
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced, delay, duration, stagger, split, immediate, text]);

  if (reduced || immediate) {
    // Plain render, no mask/transform. The animated version raced a later
    // hydration/streaming pass on at least one Cache Components route, which
    // could silently reset the GSAP-driven transform back to its
    // pre-animation state and leave the text permanently invisible —
    // immediate mode exists specifically for content that must never be
    // gated on that timing, so it isn't worth the flourish here.
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={containerRef} className={className}>
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          className="inline-flex overflow-hidden"
          // Padding keeps descenders (g, y, p) from being clipped by the mask.
          style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
        >
          <span
            data-split-unit
            className="inline-block will-change-transform"
            style={{ transform: "translateY(115%)" }}
          >
            {unit === " " ? " " : unit}
          </span>
          {split === "words" && i < units.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
