"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE_INOUT } from "@/utils/motion";

/**
 * Full-screen curtain that wipes top-to-bottom on every route change.
 *
 * Deliberately does not intercept link clicks. An earlier version tried to
 * cover the screen before navigating, then push the route itself — that
 * meant racing Next's own <Link> click handler (which runs via React's
 * event delegation) for who gets the event first. preventDefault() doesn't
 * stop other listeners from running, only stopPropagation() does, and even
 * that only stops propagation to *other nodes* — not sibling listeners
 * already on the same node. Getting this reliably ahead of Link, across
 * StrictMode's double-invoked effects in dev, was fragile in a way a page
 * transition doesn't need to be.
 *
 * Instead: on every pathname change, the curtain snaps to fully covering
 * with no transition inside useLayoutEffect — which runs synchronously
 * after the new page's DOM is committed but before the browser paints it.
 * So the very first frame of the new route is already hidden behind the
 * curtain, then it wipes down and off to reveal it. The direction is always
 * downward, so it reads as one continuous curtain rather than a bounce.
 *
 * Skips the very first mount (initial site load shouldn't wipe over itself)
 * and no-ops entirely under prefers-reduced-motion.
 */
export default function CurtainTransition() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
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
          hard straight line. Its own centre sits on the panel's bottom edge
          (translate-y-1/2), so the top half seals against the solid panel
          above it and the bottom half domes below as the curved edge that
          actually travels across the screen. It inherits the parent's
          transform for free, being a child, so no separate animation is
          needed here. */}
      <div className="absolute inset-x-0 bottom-0 h-[16vw] max-h-56 min-h-28 translate-y-1/2 rounded-[50%] bg-ink" />
    </div>
  );
}
