"use client";

import { type ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  radius?: number;
  onClick?: () => void;
  external?: boolean;
}

/**
 * A link/button that drifts toward the cursor. The inner span moves at a
 * smaller ratio than the shell, which reads as weight rather than a slide.
 */
export default function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.32,
  radius = 80,
  onClick,
  external,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useMagnetic<HTMLAnchorElement>({
    strength,
    radius,
    enabled: !reduced,
  });
  const innerRef = useMagnetic<HTMLSpanElement>({
    strength: strength * 0.45,
    radius,
    enabled: !reduced,
  });

  const content = (
    <span ref={innerRef} className="pointer-events-none inline-block">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
