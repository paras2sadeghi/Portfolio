"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Custom cursor: a small dot that tracks 1:1 and a ring that trails with easing.
 * The ring grows and the dot hides over interactive targets, which is what
 * makes links feel "grabbable" without any per-link wiring.
 *
 * Skipped entirely on touch devices and for reduced-motion users.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    setVisible(true);

    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select';
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest(INTERACTIVE)));
    };

    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      gsap.killTweensOf([dot, ring]);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
    >
      <div
        ref={ringRef}
        className="absolute left-0 top-0 rounded-full border border-foreground/40"
        style={{
          width: 34,
          height: 34,
          marginLeft: -17,
          marginTop: -17,
          transform: "translate(-100px, -100px)",
          transition: "width 300ms cubic-bezier(0.16,1,0.3,1), height 300ms cubic-bezier(0.16,1,0.3,1), margin 300ms cubic-bezier(0.16,1,0.3,1), background-color 300ms ease",
          ...(active
            ? {
                width: 58,
                height: 58,
                marginLeft: -29,
                marginTop: -29,
                backgroundColor: "rgba(10,10,10,0.06)",
              }
            : null),
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full bg-foreground"
        style={{
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          transform: "translate(-100px, -100px)",
          opacity: active ? 0 : 1,
          transition: "opacity 250ms ease",
        }}
      />
    </div>
  );
}
