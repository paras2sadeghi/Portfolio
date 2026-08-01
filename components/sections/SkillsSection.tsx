"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/animations/SplitText";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CAPABILITIES = [
  {
    title: "Product & UX design",
    detail:
      "Research, flows, wireframes, and high-fidelity interfaces for web and mobile.",
    tools: ["Figma", "FigJam", "Prototyping"],
  },
  {
    title: "Design systems",
    detail:
      "Component libraries and tokens that keep a growing product consistent and quick to build.",
    tools: ["Tokens", "Variants", "Documentation"],
  },
  {
    title: "Front-end collaboration",
    detail:
      "Comfortable in the codebase, so handoff is fast and what ships matches what was designed.",
    tools: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Research & validation",
    detail:
      "Interviews, usability testing, and analytics review to check the design against reality.",
    tools: ["Interviews", "Usability tests", "Analytics"],
  },
];

/**
 * Capability rows. Each row lifts on scroll and its rule draws outward on
 * hover — a small interaction that rewards reading down the list.
 */
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-capability]",
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
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
          text="What I do"
          className="text-[9vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[5vw]"
        />

        <div className="mt-14 md:mt-24">
          {CAPABILITIES.map((item) => (
            <div
              key={item.title}
              data-capability
              className="group border-t border-foreground/12 py-8 md:py-12"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
                <h3 className="text-2xl font-medium tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-4xl md:group-hover:translate-x-3">
                  {item.title}
                </h3>
                <div>
                  <p className="max-w-lg text-base leading-relaxed text-muted">
                    {item.detail}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-foreground/12 px-3.5 py-1.5 text-xs text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-foreground/12" />
        </div>
      </div>
    </section>
  );
}
