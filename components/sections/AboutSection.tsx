"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/animations/SplitText";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STORY = [
  "I started in cinema and UX writing, which is a strange route into product design and also the reason I think in sequences rather than screens.",
  "Storytelling taught me that structure carries meaning. A flow has pacing. An empty state is a beat. What you withhold matters as much as what you show.",
  "Today I work on healthcare and SaaS platforms, where the stakes are real and clarity is not decoration. The craft is making something complicated feel obvious.",
];

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
        "[data-story-line]",
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

        <div className="mt-14 grid grid-cols-1 gap-14 md:mt-24 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <ParallaxImage
            src="/images/portrait-garden.jpg"
            alt="Parastoo Sadeghi"
            className="aspect-[3/4] w-full rounded-sm"
            amount={14}
            sizes="(min-width: 768px) 40vw, 100vw"
            objectPosition="50% 40%"
          />

          <div className="flex flex-col gap-10 md:gap-14 md:pt-10">
            {STORY.map((paragraph, i) => (
              <p
                key={i}
                data-story-line
                className={
                  i === 0
                    ? "max-w-2xl text-2xl font-medium leading-[1.35] tracking-tight md:text-[2rem]"
                    : "max-w-xl text-base leading-relaxed text-muted md:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
