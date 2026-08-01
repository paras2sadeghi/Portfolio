"use client";

import { useEffect, useState } from "react";

/**
 * Live reduced-motion subscription. Unlike a one-shot read, this reacts if the
 * user flips the OS setting mid-session, so animations can degrade immediately.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
