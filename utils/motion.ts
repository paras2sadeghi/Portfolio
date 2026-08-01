/**
 * Shared motion language for the whole site.
 * One place to tune easing + duration so every section feels related.
 */

// expo-out — the signature editorial deceleration
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

// GSAP string equivalents
export const GSAP_EASE = "expo.out";
export const GSAP_EASE_SOFT = "power3.out";
export const GSAP_EASE_INOUT = "power2.inOut";

export const DURATION = {
  fast: 0.6,
  base: 1,
  slow: 1.4,
  cinematic: 1.8,
} as const;

export const STAGGER = {
  tight: 0.03,
  base: 0.055,
  loose: 0.09,
} as const;

/** Single source of truth for the reduced-motion decision. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Clamp helper for scroll-driven interpolation. */
export function clamp(value: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, value));
}

/** Linear interpolation, used by the cursor and magnetic hooks. */
export function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount;
}
