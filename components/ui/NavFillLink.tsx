"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface NavFillLinkProps {
  href: string;
  children: ReactNode;
  /** On hero: inverted fill for mix-blend bar. After scroll: standard ink fill. */
  theme?: "hero" | "bar";
  onClick?: () => void;
  /** Current page: the pill stays filled so you always know where you are. */
  active?: boolean;
}

export default function NavFillLink({
  href,
  children,
  theme = "bar",
  onClick,
  active = false,
}: NavFillLinkProps) {
  const isHash = href.startsWith("#");
  // The link itself is a 44px-tall touch target on phones; the visible pill
  // inside it stays small and delicate.
  const className =
    "nav-btn-click group relative inline-flex h-11 items-center md:h-auto";
  const pillClass =
    "relative inline-flex h-7 items-center justify-center overflow-hidden rounded-full border px-3 text-xs font-medium transition-[border-color,color] duration-300 md:h-8 md:px-3.5 md:text-sm " +
    (theme === "hero"
      ? "border-white/25 text-white"
      : "border-foreground/12 text-foreground");

  const fillClass =
    "btn-fill pointer-events-none absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
    (theme === "hero"
      ? "bg-white group-hover:translate-y-0"
      : "bg-foreground group-hover:translate-y-0") +
    (active ? " translate-y-0" : " translate-y-full");

  const labelClass =
    "relative z-10 transition-colors duration-300 " +
    (theme === "hero"
      ? "group-hover:text-ink"
      : "group-hover:text-background") +
    (active ? (theme === "hero" ? " text-ink" : " text-background") : "");

  const inner = (
    <span className={pillClass}>
      <span aria-hidden className={fillClass} />
      <span className={labelClass}>{children}</span>
    </span>
  );

  if (isHash) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={className}
    >
      {inner}
    </Link>
  );
}
