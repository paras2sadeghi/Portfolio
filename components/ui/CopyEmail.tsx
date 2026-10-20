"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Email address as a mailto link with a small "Copy" control beside it.
 * The confirmation is announced politely to screen readers and reverts on
 * its own; if the clipboard is unavailable the address stays selectable.
 */
export default function CopyEmail({
  email,
  className = "",
}: {
  email: string;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2000);
  };

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <a
        href={`mailto:${email}`}
        className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="relative rounded-full border border-white/25 px-3 py-1 text-xs text-white/85 transition-colors after:absolute after:-inset-2 after:content-[''] hover:border-white/60 hover:text-white"
      >
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy"}
      </button>
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? "Email address copied" : ""}
      </span>
    </span>
  );
}
