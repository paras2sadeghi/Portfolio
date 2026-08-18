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

    const scrollToHash = (hash: string, immediate = false) => {
      const destination = document.querySelector(hash);
      if (!destination) return false;
      lenis.scrollTo(destination as HTMLElement, {
        offset: -40,
        duration: immediate ? 0 : 1.5,
      });
      return true;
    };

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      if (hash.length < 2) return;

      // Cross-page section links (e.g. /#work from a case study) use default nav.
      if (href.startsWith("/") && href.length > 1 && hashIndex > 0) return;

      if (!scrollToHash(hash)) return;
      event.preventDefault();
    };
    document.addEventListener("click", onAnchorClick);

    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash, true));
    }

    ScrollTrigger.refresh();

    // Pinned sections and late-loading media change the document height after
    // the first refresh, which leaves every trigger below them holding stale
    // start/end positions — their reveals then never fire. Re-measure once the
    // page has actually settled.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", onLoad);
      window.clearTimeout(settle);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [enabled]);
}
