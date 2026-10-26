"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Motion for the Selected work grid, wrapped around server-rendered markup
 * so every link and image is in the HTML whether or not this runs.
 *
 * 1. Staggered reveal: the heading rule draws left to right, then the three
 *    posters rise 24px and fade in, 0.1s apart. Plays once.
 * 2. Image settle: each poster eases from 105% to 100% inside its frame as
 *    it appears, like a lens finding focus.
 *
 * The hover state (the arrow's pink fill and nudge) is plain CSS in
 * SelectedWork.
 *
 * Nothing moves for people who prefer reduced motion.
 */
export default function SelectedWorkMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const rule = root.querySelector<HTMLElement>("[data-sw-rule]");
    const tiles = gsap.utils.toArray<HTMLElement>("[data-sw-tile]", root);
    const images = gsap.utils.toArray<HTMLElement>("[data-sw-img]", root);

    const ctx = gsap.context(() => {
      gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(tiles, { y: 24, autoAlpha: 0 });
      gsap.set(images, { scale: 1.05 });

      gsap
        .timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        })
        .to(rule, { scaleX: 1, duration: 0.9, ease: "power2.inOut" })
        .to(tiles, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1 }, "-=0.45")
        .to(images, { scale: 1, duration: 1.4, stagger: 0.1 }, "<");
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
