import { type ReactNode } from "react";

/**
 * CurtainTransition (mounted once in the root layout) is the site's one page
 * transition: it fully covers the screen before a route's first paint and
 * wipes off over ~0.65s. This wrapper used to run its own 0.8s fade/slide on
 * top of that, which meant the content was still visibly animating in for
 * ~150ms after the curtain had already cleared. Kept as a plain pass-through
 * so route components have a stable place to opt back into a transition
 * without reintroducing that race.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
