"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

/**
 * A small entrance for the home intro, wrapped around server-rendered copy.
 * When the intro first comes into view, each headline line slides up out of
 * its own mask ([data-intro-line]), then the paragraph and link fade up
 * ([data-intro-fade]). Plays once.
 *
 * Uses an IntersectionObserver rather than a scroll trigger, so the copy can
 * never be left hidden by a trigger that measured a stale page height. The
 * copy is fully visible without JavaScript and for reduced motion.
 */
export default function IntroMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = gsap.utils.toArray<HTMLElement>("[data-intro-line]", root);
    const fades = gsap.utils.toArray<HTMLElement>("[data-intro-fade]", root);

    const ctx = gsap.context(() => {
      gsap.set(lines, { yPercent: 110 });
      gsap.set(fades, { y: 16, autoAlpha: 0 });
    }, root);

    const play = () =>
      ctx.add(() => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .to(lines, { yPercent: 0, duration: 1.1, stagger: 0.14 })
          .to(fades, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1 }, "-=0.6");
      });

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(root);

    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
