"use client";

import { useEffect, useState } from "react";

/**
 * Live reduced-motion subscription. Unlike a one-shot read, this reacts if the
 * user flips the OS setting mid-session, so animations can degrade immediately.
 *
 * Starts as false on both server and client and reads the real setting after
 * mount, so the first client render always matches the server HTML (reading
 * it during render caused hydration errors for reduced-motion users).
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
