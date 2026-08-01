"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SplitText from "@/components/animations/SplitText";
import { featuredWork } from "@/lib/caseStudies";

interface WorkItem {
  slug: string;
  name: string;
  card: {
    category: string;
    subtitle: string;
    gradient: string;
    tags: string[];
  };
}

function ProjectCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group relative flex w-[78vw] shrink-0 flex-col md:w-[46vw] lg:w-[38vw]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <div
          className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          style={{ background: item.card.gradient }}
        />
        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          <span className="text-xs uppercase tracking-[0.2em] text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-foreground/12 pt-5">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {item.name}
        </h3>
        <span
          aria-hidden
          className="text-lg text-muted transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        >
          →
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-6">
        <p className="text-sm text-muted">{item.card.subtitle}</p>
        <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-muted">
          {item.card.category}
        </span>
      </div>
    </Link>
  );
}

/**
 * Pinned horizontal gallery. Vertical scroll drives lateral travel, so the
 * viewer is scrubbing a timeline rather than paging through a grid. Falls back
 * to a normal vertical stack on mobile and for reduced-motion users.
 */
export default function WorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useHorizontalScroll({
    sectionRef,
    trackRef,
    enabled: !reduced,
  });

  const items = featuredWork as WorkItem[];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center"
    >
      <div className="px-6 md:px-10">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-8">
          <SplitText
            as="h2"
            text="Selected work"
            className="text-[9vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[5vw]"
          />
          <span className="hidden shrink-0 pb-3 text-xs uppercase tracking-[0.2em] text-muted md:block">
            {items.length} projects — scroll
          </span>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex flex-col gap-16 px-6 md:mt-16 md:flex-row md:gap-10 md:px-10 md:will-change-transform"
      >
        {items.map((item, i) => (
          <ProjectCard key={item.slug} item={item} index={i} />
        ))}
        <div className="hidden shrink-0 md:block md:w-[10vw]" aria-hidden />
      </div>
    </section>
  );
}
