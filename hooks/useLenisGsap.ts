"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Binds Lenis (which owns scroll position) to GSAP ScrollTrigger (which reads
 * it). Without this handshake ScrollTrigger reads the native scrollTop, which
 * Lenis has hijacked, and every pinned/scrubbed timeline drifts out of sync.
 *
 * Returns nothing — it is a side-effect hook mounted once near the app root.
 */
export function useLenisGsap(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      // Reduced motion: no smoothing, but ScrollTrigger still works natively.
      gsap.registerPlugin(ScrollTrigger);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    // Drive Lenis from GSAP's ticker so both share one rAF loop — two
    // competing loops is the usual cause of jittery scrub animations.
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const destination = document.querySelector(hash);
      if (!destination) return;
      event.preventDefault();
      lenis.scrollTo(destination as HTMLElement, {
        offset: -40,
        duration: 1.5,
      });
    };
    document.addEventListener("click", onAnchorClick);

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [enabled]);
}
