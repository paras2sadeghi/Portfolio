"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverPreview from "@/components/animations/HoverPreview";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  homeWorkPortfolio,
  WORK_PORTFOLIO_COUNT,
  workHref,
} from "@/lib/projects";
import { GSAP_EASE } from "@/utils/motion";

type WorkListItem = (typeof homeWorkPortfolio)[number];

function WorkRow({
  item,
  index,
  onPreview,
  onLeave,
}: {
  item: WorkListItem;
  index: number;
  onPreview: (item: WorkListItem, x: number, y: number) => void;
  onLeave: () => void;
}) {
  return (
    <Link
      href={workHref(item.slug)}
      data-work-row
      onMouseEnter={(event) => onPreview(item, event.clientX, event.clientY)}
      onMouseMove={(event) => onPreview(item, event.clientX, event.clientY)}
      onMouseLeave={onLeave}
      className="group grid border-t border-foreground/12 py-7 md:grid-cols-[5rem_1fr_auto] md:items-baseline md:gap-10 md:py-9"
    >
      <span className="mb-3 text-xs uppercase tracking-[0.2em] text-muted md:mb-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.045em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 md:text-[5.8vw]">
          {item.name}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:hidden">
          {item.card.subtitle}
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-8 text-xs uppercase tracking-[0.18em] text-muted md:mt-0 md:min-w-72">
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
}

/** Dennis-style vertical work list + floating hover preview (no row thumbnails). */
export default function WorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [preview, setPreview] = useState<WorkListItem | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-work-row]",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: GSAP_EASE,
          stagger: 0.08,
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
        }
      );
    }, section);

    return () => context.revert();
  }, [reduced]);

  const onPreview = (item: WorkListItem, x: number, y: number) => {
    setPreview(item);
    setPointer({ x: x + 110, y: y - 30 });
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-10 md:py-40"
    >
      <HoverPreview item={preview} x={pointer.x} y={pointer.y} />

      <div className="mx-auto max-w-[1600px]">
        <div className="border-b border-foreground/12">
          {homeWorkPortfolio.map((item, i) => (
            <WorkRow
              key={item.slug}
              item={item}
              index={i}
              onPreview={onPreview}
              onLeave={() => setPreview(null)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/12 px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            More work · {WORK_PORTFOLIO_COUNT}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
