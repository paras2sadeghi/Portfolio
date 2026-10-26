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
 * 2. Image settle: each poster eases from 109% to a resting 104% inside its
 *    frame as it appears, like a lens finding focus.
 * 3. Hover: the poster tilts a few degrees toward the cursor and its image
 *    drifts slightly the other way (mouse only). The arrow's pink fill and
 *    nudge are plain CSS in SelectedWork.
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
      // Images rest at 104% so the hover drift never shows an edge; the
      // settle eases in from 109%.
      gsap.set(images, { scale: 1.09 });

      gsap
        .timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        })
        .to(rule, { scaleX: 1, duration: 0.9, ease: "power2.inOut" })
        .to(tiles, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1 }, "-=0.45")
        .to(images, { scale: 1.04, duration: 1.4, stagger: 0.1 }, "<");
    }, root);

    // Hover tilt, mouse and trackpad only.
    const cleanups: (() => void)[] = [];
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      tiles.forEach((tile) => {
        const frame = tile.querySelector<HTMLElement>("[data-sw-frame]");
        const img = tile.querySelector<HTMLElement>("[data-sw-img]");
        if (!frame || !img) return;
        const rotX = gsap.quickTo(frame, "rotationX", { duration: 0.6, ease: "power3.out" });
        const rotY = gsap.quickTo(frame, "rotationY", { duration: 0.6, ease: "power3.out" });
        const imgX = gsap.quickTo(img, "x", { duration: 0.8, ease: "power3.out" });
        const imgY = gsap.quickTo(img, "y", { duration: 0.8, ease: "power3.out" });
        gsap.set(frame, { transformPerspective: 1000 });

        const move = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const r = frame.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          // Kept small so edges stay close to the grid lines.
          rotY(px * 2.5);
          rotX(-py * 2.5);
          imgX(-px * 10);
          imgY(-py * 10);
        };
        const leave = () => {
          rotX(0);
          rotY(0);
          imgX(0);
          imgY(0);
        };
        frame.addEventListener("pointermove", move);
        frame.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          frame.removeEventListener("pointermove", move);
          frame.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
