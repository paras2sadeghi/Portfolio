"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RoundFillMagneticLinkProps {
  href: string;
  children: string;
  /** "md" is the original home-intro circle; "sm" fits inline captions. */
  size?: "sm" | "md";
  /** Opens in a new tab with rel="noreferrer" — for links off the site. */
  external?: boolean;
}

const SIZE_CLASSES: Record<"sm" | "md", string> = {
  md: "h-[12.5rem] w-[12.5rem] text-sm md:h-[14rem] md:w-[14rem] md:text-base",
  sm: "h-20 w-20 text-[11px] md:h-24 md:w-24 md:text-xs",
};

/**
 * Dennis `btn btn-round` + `btn-click magnetic` + `btn-fill` (home-intro CTA).
 */
export default function RoundFillMagneticLink({
  href,
  children,
  size = "md",
  external = false,
}: RoundFillMagneticLinkProps) {
  const reduced = useReducedMotion();
  const ref = useMagnetic<HTMLAnchorElement>({
    strength: size === "sm" ? 0.22 : 0.38,
    radius: size === "sm" ? 70 : 140,
    enabled: !reduced,
  });

  return (
    <div className="btn btn-round inline-flex shrink-0">
      <Link
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={`btn-click magnetic group relative flex items-center justify-center overflow-hidden rounded-full border border-foreground/14 font-medium tracking-tight transition-[border-color] duration-500 hover:border-foreground/25 ${SIZE_CLASSES[size]}`}
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
