"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { conceptProjects, shippedProjects, workHref } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Item = (typeof shippedProjects)[number];

const ALL = [...shippedProjects, ...conceptProjects];

/**
 * The /work archive: shipped work first, explorations below. On desktop a
 * preview card follows the cursor over the list and slides between project
 * images as you move row to row, so every name has a picture without the list
 * losing its typographic weight.
 */
export default function WorkList() {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || !window.matchMedia("(pointer: fine)").matches) return;
    const xTo = gsap.quickTo(preview, "x", { duration: reduced ? 0 : 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(preview, "y", { duration: reduced ? 0 : 0.55, ease: "power3.out" });
    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useEffect(() => {
    const preview = previewRef.current;
    const strip = stripRef.current;
    if (!preview || !strip) return;
    gsap.to(preview, {
      scale: active === null ? 0.6 : 1,
      opacity: active === null ? 0 : 1,
      duration: reduced ? 0 : 0.45,
      ease: "power3.out",
    });
    if (active !== null) {
      gsap.to(strip, {
        yPercent: (-100 / ALL.length) * active,
        duration: reduced ? 0 : 0.7,
        ease: "expo.out",
      });
    }
  }, [active, reduced]);

  const row = (item: Item, index: number, globalIndex: number, small = false) => (
    <Link
      key={item.slug}
      href={workHref(item.slug)}
      onPointerEnter={() => setActive(globalIndex)}
      onFocus={() => setActive(globalIndex)}
      onBlur={() => setActive(null)}
      className={`group grid border-t border-foreground/12 md:grid-cols-[5rem_1fr_auto] md:items-baseline md:gap-10 ${
        small ? "py-6 md:py-7" : "py-7 md:py-9"
      } transition-opacity duration-500 ${
        active !== null && active !== globalIndex ? "md:opacity-35" : ""
      }`}
    >
      <span className="mb-3 text-xs uppercase tracking-[0.2em] text-muted md:mb-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3
          className={`font-display font-medium leading-[0.95] tracking-[-0.045em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 ${
            small ? "text-3xl md:text-[3.6vw]" : "text-4xl md:text-[5.8vw]"
          }`}
        >
          {item.name}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:hidden">
          {item.card.subtitle}
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-8 text-xs uppercase tracking-[0.18em] text-muted md:mt-0 md:grid md:w-[26rem] md:grid-cols-[1fr_auto_1rem] md:gap-8 md:text-right">
        <span>{item.discipline}</span>
        <span>{item.year}</span>
        <span
          aria-hidden
          className="text-lg leading-none opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-1 group-hover:opacity-100"
        >
          ↗
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <section aria-labelledby="work-shipped" onPointerLeave={() => setActive(null)}>
        <GroupHeading
          id="work-shipped"
          title="Selected work"
          count={shippedProjects.length}
          note="Shipped with real teams and real users."
        />
        <div className="border-b border-foreground/12">
          {shippedProjects.map((item, i) => row(item, i, i))}
        </div>
      </section>

      <section
        aria-labelledby="work-explorations"
        className="mt-24 md:mt-36"
        onPointerLeave={() => setActive(null)}
      >
        <GroupHeading
          id="work-explorations"
          title="Explorations"
          count={conceptProjects.length}
          note="Self-initiated concepts where I chase an idea past the brief."
        />
        <div className="border-b border-foreground/12">
          {conceptProjects.map((item, i) =>
            row(item, i, shippedProjects.length + i, true)
          )}
        </div>
      </section>

      {/* Cursor preview: a window onto a vertical strip of every project. */}
      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[17rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] [@media(pointer:fine)]:md:block"
      >
        <div ref={stripRef} className="w-full" style={{ height: `${ALL.length * 100}%` }}>
          {ALL.map((item) => (
            <div
              key={item.slug}
              className="relative w-full"
              style={{ height: `${100 / ALL.length}%`, backgroundColor: item.tileBg }}
            >
              <Image
                src={item.thumbnail}
                alt=""
                fill
                unoptimized={process.env.NODE_ENV !== "production"}
                sizes="24rem"
                className="object-contain p-5"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function GroupHeading({
  id,
  title,
  count,
  note,
}: {
  id: string;
  title: string;
  count: number;
  note: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
      <h2 id={id} className="font-display text-2xl font-medium tracking-[-0.03em] md:text-3xl">
        {title}{" "}
        <span className="align-top text-sm tabular-nums text-muted">
          ({String(count).padStart(2, "0")})
        </span>
      </h2>
      <p className="text-sm text-muted">{note}</p>
    </div>
  );
}
