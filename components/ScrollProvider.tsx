"use client";

import { type ReactNode } from "react";
import { useLenisGsap } from "@/hooks/useLenisGsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Single mount point for the scroll system. Kept separate from the sections so
 * there is exactly one Lenis instance and one ScrollTrigger registration.
 */
export default function ScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  useLenisGsap(!reduced);
  return <>{children}</>;
}
