"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HorizontalScrollOptions {
  sectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLElement | null>;
  enabled?: boolean;
}

/**
 * Pins a section and converts vertical scroll into horizontal travel of an
 * inner track. Distance is measured from real layout width rather than a
 * hardcoded number, so adding a card never desyncs the pin length.
 *
 * Disabled below the md breakpoint — horizontal hijacking on a phone fights
 * the user's natural scroll and is a common accessibility complaint.
 */
export function useHorizontalScroll({
  sectionRef,
  trackRef,
  enabled = true,
}: HorizontalScrollOptions) {
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || !enabled) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // Pin length equals the horizontal distance, so travel feels 1:1.
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => context.revert();
  }, [sectionRef, trackRef, enabled]);
}
