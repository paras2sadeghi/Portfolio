"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface NavFillLinkProps {
  href: string;
  children: ReactNode;
  /** On hero: inverted fill for mix-blend bar. After scroll: standard ink fill. */
  theme?: "hero" | "bar";
  onClick?: () => void;
}

export default function NavFillLink({
  href,
  children,
  theme = "bar",
  onClick,
}: NavFillLinkProps) {
  const isHash = href.startsWith("#");
  const className =
    "nav-btn-click group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full border px-4 text-sm font-medium transition-[border-color,color] duration-300 " +
    (theme === "hero"
      ? "border-white/25 text-white"
      : "border-foreground/12 text-foreground");

  const fillClass =
    "btn-fill pointer-events-none absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
    (theme === "hero"
      ? "bg-white translate-y-full group-hover:translate-y-0"
      : "bg-foreground translate-y-full group-hover:translate-y-0");

  const labelClass =
    "relative z-10 transition-colors duration-300 " +
    (theme === "hero"
      ? "group-hover:text-ink"
      : "group-hover:text-background");

  const inner = (
    <>
      <span aria-hidden className={fillClass} />
      <span className={labelClass}>{children}</span>
    </>
  );

  if (isHash) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {inner}
    </Link>
  );
}
