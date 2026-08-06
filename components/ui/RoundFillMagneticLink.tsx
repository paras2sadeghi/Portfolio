"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RoundFillMagneticLinkProps {
  href: string;
  children: string;
}

/**
 * Dennis `btn btn-round` + `btn-click magnetic` + `btn-fill` (home-intro CTA).
 */
export default function RoundFillMagneticLink({
  href,
  children,
}: RoundFillMagneticLinkProps) {
  const reduced = useReducedMotion();
  const ref = useMagnetic<HTMLAnchorElement>({
    strength: 0.38,
    radius: 140,
    enabled: !reduced,
  });

  return (
    <div className="btn btn-round inline-flex">
      <Link
        ref={ref}
        href={href}
        className="btn-click magnetic group relative flex h-[12.5rem] w-[12.5rem] items-center justify-center overflow-hidden rounded-full border border-foreground/14 text-sm font-medium tracking-tight transition-[border-color] duration-500 hover:border-foreground/25 md:h-[14rem] md:w-[14rem] md:text-base"
      >
        <span
          aria-hidden
          className="btn-fill round-fill-wave pointer-events-none absolute bg-foreground"
        />
        <span className="relative z-10 max-w-[10ch] text-center leading-snug transition-colors duration-500 group-hover:text-background">
          {children}
        </span>
      </Link>
    </div>
  );
}
