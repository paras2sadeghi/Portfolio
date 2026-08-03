"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/animations/SplitText";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { aboutStory, capabilities, experience } from "@/lib/content";

/**
 * Layered story block. Paragraphs animate independently and the portrait
 * parallaxes at a different rate, so the section has internal depth instead of
 * arriving as one flat card.
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

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
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
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
        <SplitText
          as="h2"
          text="About"
          className="text-[9vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[5vw]"
        />

        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div className="relative min-h-[28rem] overflow-hidden rounded-sm bg-ink text-white md:min-h-[36rem]">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.24),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(135deg,#0a0a0a,#24201b_52%,#f2efe7_165%)]"
            />
            <div
              aria-hidden
              className="absolute inset-x-10 top-10 h-px bg-white/25"
            />
            <div
              aria-hidden
              className="absolute bottom-0 right-0 h-2/3 w-2/3 rounded-tl-full border-l border-t border-white/20"
            />
            <div className="absolute inset-x-8 bottom-8">
              <p className="font-display text-[13vw] font-medium uppercase leading-[0.82] tracking-[-0.055em] text-white md:text-[7vw]">
                Design
                <br />
                with
                <br />
                structure
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-14 md:pt-10">
            {aboutStory.map((paragraph, i) => (
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
                  {experience.map((item) => (
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
