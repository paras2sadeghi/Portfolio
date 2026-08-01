"use client";

/**
 * Scroll smoothing now lives in ScrollProvider (Lenis bound to GSAP
 * ScrollTrigger). Mounting the old SmoothScroll here as well would spawn a
 * second Lenis instance and desync every scrubbed timeline.
 */
export default function Providers({ children }) {
  return <>{children}</>;
}
