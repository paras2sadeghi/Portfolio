"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/animations/SplitText";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TIMELINE = [
  {
    year: "Now",
    role: "Lead Product Designer",
    org: "Flash Pharmacy",
    detail:
      "Leading design for healthcare platforms — complex clinical workflows turned into interfaces clinicians can move through quickly.",
  },
  {
    year: "2024",
    role: "Product Designer",
    org: "Sadax",
    detail:
      "Roobinium, an AI agent builder for crypto and DeFi tasks, designed to work equally well by voice or by text.",
  },
  {
    year: "2022",
    role: "Product Designer",
    org: "Sternx",
    detail:
      "Safes Family, a parental control app shipped on iOS and Android. 16 interviews, 40+ screens, live in both app stores.",
  },
  {
    year: "Start",
    role: "First app",
    org: "GreenGenie",
    detail:
      "A plant-care app built to learn by shipping something real. Where the habit of designing end to end started.",
  },
];

/**
 * Vertical timeline whose spine draws as the section scrolls. The line is the
 * progress indicator, so the reader's position in the story is always legible.
 */
export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "[data-timeline-entry]",
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
        }
      );
    }, section);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <SplitText
          as="h2"
          text="The path"
          className="text-[9vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[5vw]"
        />

        <div className="relative mt-14 pl-8 md:mt-24 md:pl-16">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-foreground/12 md:left-1" />
          <div
            ref={lineRef}
            className="absolute left-0 top-2 w-px origin-top bg-foreground md:left-1"
            style={{ height: "calc(100% - 16px)", transform: "scaleY(0)" }}
          />

          <div className="flex flex-col gap-14 md:gap-24">
            {TIMELINE.map((entry) => (
              <div
                key={entry.role + entry.org}
                data-timeline-entry
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-8 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-foreground md:-left-16"
                />
                <div className="grid grid-cols-1 gap-3 md:grid-cols-[140px_1fr] md:gap-12">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted md:pt-3">
                    {entry.year}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                      {entry.role}
                    </h3>
                    <p className="mt-1.5 text-sm uppercase tracking-[0.16em] text-muted">
                      {entry.org}
                    </p>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
