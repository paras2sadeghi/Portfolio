"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE } from "@/utils/motion";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Direction the curtain retracts toward. */
  from?: "bottom" | "left" | "right" | "top";
  /** Inner content counter-scales, so the image settles rather than pops. */
  scaleFrom?: number;
}

const CLIP_START: Record<string, string> = {
  bottom: "inset(100% 0% 0% 0%)",
  top: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

/**
 * Clip-path curtain reveal with a counter-scaling child. Animating clip-path
 * and transform only keeps this off the main-thread layout path.
 */
export default function ClipReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.4,
  from = "bottom",
  scaleFrom = 1.18,
}: ClipRevealProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner || reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: wrapper, start: "top 85%", once: true },
      delay,
    });

    timeline
      .fromTo(
        wrapper,
        { clipPath: CLIP_START[from] },
        { clipPath: "inset(0% 0% 0% 0%)", duration, ease: GSAP_EASE }
      )
      .fromTo(
        inner,
        { scale: scaleFrom },
        { scale: 1, duration: duration * 1.15, ease: GSAP_EASE },
        0
      );

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [reduced, delay, duration, from, scaleFrom]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ clipPath: CLIP_START[from], willChange: "clip-path" }}
    >
      <div ref={innerRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
