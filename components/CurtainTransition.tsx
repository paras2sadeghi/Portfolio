"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE_INOUT } from "@/utils/motion";

/**
 * Full-screen curtain that wipes top-to-bottom on every route change.
 *
 * Two phases, driven by two different signals:
 *
 * 1. Cover, optimistically, the moment an internal link is clicked. This
 *    listener never calls preventDefault()/stopPropagation() — it just
 *    starts a parallel animation — so it can't race Next's own <Link> click
 *    handler the way an earlier version of this component did when it tried
 *    to control navigation itself. Without this phase the curtain only
 *    appeared once the new route had *already* finished loading (see below),
 *    which meant an unpredictable silent gap after the click and then a
 *    sudden jump-cut to black — the "glitchy" part.
 * 2. Reveal once the new route actually commits, detected via usePathname()
 *    changing, inside useLayoutEffect so it runs synchronously before the
 *    browser paints the new page. Whatever the cover phase already did
 *    (nothing yet, mid-cover, or already fully covered), snapping to fully
 *    covered here is idempotent, then it wipes down and off to reveal.
 *
 * Skips the very first mount (initial site load shouldn't wipe over itself)
 * and no-ops entirely under prefers-reduced-motion.
 */
export default function CurtainTransition() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const coveringRef = useRef(false);
  // Tracks the last pathname this effect actually reacted to, not just
  // whether it has run before. A boolean "hasMounted" flag isn't safe here:
  // React's dev-mode Strict Mode invokes a fresh effect twice in a row for
  // the same commit (setup → cleanup → setup) before anything has really
  // changed. With a boolean, the first invocation would flip it to true and
  // return early as intended, but the second invocation would then see
  // "already mounted" and play the wipe over the page that just loaded —
  // a curtain flash on every fresh page load in dev. Comparing against the
  // actual pathname means the second same-pathname invocation is recognized
  // as a no-op replay, not a real navigation.
  const lastPathnameRef = useRef<string | null>(null);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reduced) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank") return;

      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      const overlay = overlayRef.current;
      if (!overlay || coveringRef.current) return;
      coveringRef.current = true;
      gsap.to(overlay, { yPercent: 0, duration: 0.4, ease: GSAP_EASE_INOUT });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [reduced]);

  useLayoutEffect(() => {
    if (reduced) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (lastPathnameRef.current === null) {
      lastPathnameRef.current = pathname;
      gsap.set(overlay, { yPercent: -100 });
      return;
    }

    if (lastPathnameRef.current === pathname) {
      return;
    }
    lastPathnameRef.current = pathname;
    coveringRef.current = false;

    gsap.set(overlay, { yPercent: 0 });
    const tween = gsap.to(overlay, {
      yPercent: 100,
      duration: 0.6,
      delay: 0.05,
      ease: GSAP_EASE_INOUT,
      onComplete: () => {
        gsap.set(overlay, { yPercent: -100 });
      },
    });

    return () => {
      tween.kill();
    };
  }, [pathname, reduced]);

  if (reduced) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden
      // Inline transform for the pre-hydration paint: without it the overlay
      // would render at its default (uncovered center) position for one
      // frame before the effect above parks it off-screen.
      style={{ transform: "translateY(-100%)" }}
      className="pointer-events-none fixed inset-0 z-[999] bg-ink will-change-transform"
    >
      {/* The leading edge of the wipe: a wide, round bulge rather than a
          hard straight line. The panel covers by sitting at yPercent 0 and
          reveals by sliding *down* and off, so the edge that's actually
          visible sweeping across the screen is the panel's top edge, not
          its bottom (which is already off-screen for the whole animation).
          Centring the bulge on the top edge (-translate-y-1/2) puts its
          upper half just ahead of the flat boundary, in the already-revealed
          area, so it reads as a soft curve leading the wipe rather than a
          hard line. It inherits the parent's transform for free, being a
          child, so no separate animation is needed here. */}
      <div className="absolute inset-x-0 top-0 h-[16vw] max-h-56 min-h-28 -translate-y-1/2 rounded-[50%] bg-ink" />
    </div>
  );
}
