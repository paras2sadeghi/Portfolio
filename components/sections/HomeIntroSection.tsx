"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundFillMagneticLink from "@/components/ui/RoundFillMagneticLink";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { homeIntro } from "@/lib/content";
import { GSAP_EASE } from "@/utils/motion";

/**
 * Dennis `home-intro`: manifesto column + aside copy + round magnetic btn-fill.
 */
export default function HomeIntroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-intro-line]",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          ease: GSAP_EASE,
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-intro-aside]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: GSAP_EASE,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="section home-intro px-6 py-20 md:px-10 md:py-32 lg:py-40"
      data-scroll-section
    >
      <div className="container medium mx-auto max-w-[1600px]">
        <div className="row grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 lg:gap-24">
          <div className="flex-col max-w-[58rem]">
            {homeIntro.lines.map((line) => (
              <div key={line} className="overflow-hidden">
                <p
                  data-intro-line
                  className="font-display text-[clamp(1.65rem,4.2vw,3.35rem)] font-medium leading-[1.1] tracking-[-0.035em] text-foreground"
                  style={reduced ? undefined : { opacity: 0 }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-col flex flex-col items-start gap-10 md:max-w-[14rem] md:pt-2 lg:max-w-[16rem]">
            <div className="text-wrap fade-in animate">
              <p
                data-intro-aside
                className="text-base leading-relaxed text-muted md:text-[1.05rem] md:leading-[1.55]"
                style={reduced ? undefined : { opacity: 0 }}
              >
                {homeIntro.aside}
              </p>
            </div>

            <div data-intro-aside style={reduced ? undefined : { opacity: 0 }}>
              <RoundFillMagneticLink href={homeIntro.ctaHref}>
                {homeIntro.ctaLabel}
              </RoundFillMagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
