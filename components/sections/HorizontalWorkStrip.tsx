"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, workHref } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Two rows of work thumbnails that drift horizontally as the page scrolls,
 * in opposite directions. The motion is scrubbed to scroll position rather
 * than looping on a timer, so the strip reads as one continuous gesture with
 * the rest of the page instead of animating on its own schedule.
 *
 * Tiles are duplicated so each row stays wider than the viewport at any drift
 * offset and never exposes an edge.
 */
export default function HorizontalWorkStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowOneRef = useRef<HTMLDivElement | null>(null);
  const rowTwoRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  const half = Math.ceil(projects.length / 2);
  const rows = [projects.slice(0, half), projects.slice(half)];

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const rowOne = rowOneRef.current;
    const rowTwo = rowTwoRef.current;
    if (!section || !rowOne || !rowTwo) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      };

      gsap.fromTo(
        rowOne,
        { xPercent: -6 },
        { xPercent: -20, ease: "none", scrollTrigger }
      );
      gsap.fromTo(
        rowTwo,
        { xPercent: -20 },
        { xPercent: -6, ease: "none", scrollTrigger }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      aria-label="Selected work"
      className="relative overflow-hidden bg-background py-16 md:py-24"
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          ref={rowIndex === 0 ? rowOneRef : rowTwoRef}
          className="mb-5 flex w-max gap-5 will-change-transform md:mb-7 md:gap-7"
        >
          {/* Duplicated so the row always overflows the viewport while drifting */}
          {[0, 1].map((copy) =>
            row.map((project) => (
              <Link
                key={`${copy}-${project.slug}`}
                href={workHref(project.slug)}
                aria-hidden={copy === 1}
                tabIndex={copy === 1 ? -1 : undefined}
                className="group relative block h-[26vw] w-[38vw] shrink-0 overflow-hidden rounded-xl md:h-[17vw] md:w-[25vw]"
                style={{ backgroundColor: project.tileBg }}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 38vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/65 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-4 md:text-sm">
                  {project.name}
                </span>
              </Link>
            ))
          )}
        </div>
      ))}
    </section>
  );
}
