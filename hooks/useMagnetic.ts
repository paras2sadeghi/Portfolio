"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MagneticOptions {
  /** How far the element travels toward the cursor, as a fraction of offset. */
  strength?: number;
  /** Radius in px around the element where the pull begins. */
  radius?: number;
  enabled?: boolean;
}

/**
 * Magnetic hover: the element eases toward the cursor while it is nearby and
 * springs home on exit. Attaches to the *element* rather than tracking global
 * mouse position, so several magnets can coexist cheaply.
 */
export function useMagnetic<T extends HTMLElement>({
  strength = 0.35,
  radius = 90,
  enabled = true,
}: MagneticOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    // Pointer-coarse devices have no hover — skip the listeners entirely.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < rect.width / 2 + radius) {
        quickX(deltaX * strength);
        quickY(deltaY * strength);
      } else {
        quickX(0);
        quickY(0);
      }
    };

    const onLeave = () => {
      quickX(0);
      quickY(0);
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, [strength, radius, enabled]);

  return ref;
}
