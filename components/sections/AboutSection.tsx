"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/animations/SplitText";
import AboutVisualPanel from "@/components/sections/AboutVisualPanel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { aboutStory, capabilities, experience } from "@/lib/content";
import Link from "next/link";

/**
 * Homepage about teaser — full story lives at /about.
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    // Plays on mount rather than scroll-into-view. This section sits below
    // PinnedShowcase's pin, which adds ~2400px to the document after any
    // trigger positioned here first measures itself — a scroll-triggered
    // reveal can end up permanently masked depending on refresh timing.
    // The section starts off-screen at mount either way, so nothing is lost.
    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-about-reveal]",
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.14,
        }
      );
    }, section);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SplitText
            as="h2"
            text="About"
            className="text-[9vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[5vw]"
            immediate
          />
          <Link
            href="/about"
            data-about-reveal
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Full story ↗
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <AboutVisualPanel reduced={reduced} />

          <div className="flex flex-col gap-10 md:gap-14 md:pt-10">
            {aboutStory.slice(0, 2).map((paragraph, i) => (
              <p
                key={i}
                data-about-reveal
                className={
                  i === 0
                    ? "max-w-2xl text-2xl font-medium leading-[1.35] tracking-tight md:text-[2rem]"
                    : "max-w-xl text-base leading-relaxed text-muted md:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}

            <div data-about-reveal className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted">
                  Experience
                </p>
                <div className="flex flex-col gap-5">
                  {experience.slice(0, 3).map((item) => (
                    <div
                      key={`${item.role}-${item.org}`}
                      className="border-t border-foreground/12 pt-4"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-medium tracking-tight">
                          {item.role}
                        </h3>
                        <span className="text-xs uppercase tracking-[0.16em] text-muted">
                          {item.year}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted">{item.org}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted">
                  Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-foreground/12 px-3.5 py-1.5 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
