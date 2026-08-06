"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface NormalFillMagneticLinkProps {
  href: string;
  count: number;
}

/** Dennis `center-grid-btn-home` — `btn btn-normal` + magnetic + `btn-fill`. */
export default function NormalFillMagneticLink({
  href,
  count,
}: NormalFillMagneticLinkProps) {
  const reduced = useReducedMotion();
  const ref = useMagnetic<HTMLAnchorElement>({
    strength: 0.25,
    radius: 120,
    enabled: !reduced,
  });

  return (
    <div className="btn btn-normal inline-flex">
      <Link
        ref={ref}
        href={href}
        className="btn-click magnetic group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-foreground/14 px-8 text-sm font-medium tracking-tight transition-[border-color] duration-300 hover:border-foreground/25 md:h-[3.75rem] md:px-10 md:text-base"
      >
        <span
          aria-hidden
          className="btn-fill pointer-events-none absolute inset-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0"
        />
        <span className="btn-text relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-background">
          <span className="btn-text-inner change">More work</span>
          <span className="count-nr tabular-nums text-muted transition-colors duration-300 group-hover:text-background/70">
            {count}
          </span>
        </span>
      </Link>
    </div>
  );
}
