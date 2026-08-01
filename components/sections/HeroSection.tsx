"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/animations/SplitText";
import MagneticButton from "@/components/animations/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE } from "@/utils/motion";
import { profile, hero } from "@/lib/content";

/**
 * Opening frame. The entrance is one orchestrated timeline (rule, portrait,
 * meta) rather than several independent reveals, so the section resolves as a
 * single gesture. On scroll the whole block drifts and fades, handing off to
 * the work section instead of simply ending.
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const ruleRef = useRef<HTMLDivElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const intro = gsap.timeline({ delay: 0.15 });

      intro
        .fromTo(
          ruleRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.4, ease: GSAP_EASE, transformOrigin: "left" }
        )
        .fromTo(
          portraitRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: GSAP_EASE },
          0.25
        )
        .fromTo(
          metaRef.current?.children ?? [],
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: GSAP_EASE,
            stagger: 0.08,
          },
          0.75
        );

      // Exit: the hero recedes as the next section arrives.
      gsap.to(contentRef.current, {
        yPercent: -12,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16"
    >
      <div ref={contentRef} className="mx-auto max-w-[1600px]">
        <SplitText
          as="h1"
          text={profile.name}
          split="chars"
          immediate
          delay={0.35}
          duration={1.3}
          className="block text-[16vw] font-semibold leading-[0.86] tracking-[-0.04em] md:text-[12vw]"
        />

        <div
          ref={ruleRef}
          className="mt-6 h-px w-full origin-left bg-foreground/20 md:mt-8"
        />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <div ref={metaRef}>
              <div className="overflow-hidden">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  {profile.role} — {profile.location}
                </p>
              </div>
              <div className="mt-8 overflow-hidden md:mt-10">
                <p className="max-w-xl text-[1.6rem] font-medium leading-[1.28] tracking-tight md:text-[2.3rem]">
                  Turning complex healthcare and SaaS workflows into interfaces
                  people actually trust.
                </p>
              </div>
              <div className="mt-8 overflow-hidden">
                <p className="max-w-md text-[15px] leading-relaxed text-muted">
                  {hero.body}
                </p>
              </div>
              <div className="mt-10 overflow-hidden">
                <MagneticButton
                  href="#work"
                  className="inline-flex items-center gap-3 rounded-full border border-foreground/15 px-8 py-4 text-sm font-medium transition-colors duration-500 hover:bg-foreground hover:text-background"
                >
                  <span>Selected work</span>
                  <span aria-hidden>↓</span>
                </MagneticButton>
              </div>
            </div>
          </div>

          <div
            ref={portraitRef}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm will-change-[clip-path]"
            style={{ clipPath: "inset(100% 0% 0% 0%)" }}
          >
            <Image
              src="/images/portrait-library.jpg"
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
