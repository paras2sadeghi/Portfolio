"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/animations/MagneticButton";
import SplitText from "@/components/animations/SplitText";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { profile } from "@/lib/content";

/**
 * Closing frame. A slow marquee gives the section ambient life, and the CTA is
 * the largest magnetic target on the page so the final action is unmissable.
 */
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      // Two copies of the phrase scroll as one loop; -50% lands exactly on
      // the seam so the repeat is invisible.
      gsap.to(marquee, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-foreground/12 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <SplitText
          as="p"
          text="Have something worth building?"
          className="max-w-3xl text-[2rem] font-medium leading-[1.2] tracking-tight md:text-[3.4rem]"
        />

        <div className="mt-14 flex flex-wrap items-center gap-6 md:mt-20">
          <MagneticButton
            href={`mailto:${profile.email}`}
            strength={0.4}
            radius={120}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-12 py-7 text-base font-medium text-background transition-colors duration-500 md:px-16 md:py-9 md:text-lg"
          >
            Start a conversation
          </MagneticButton>

          <div className="flex flex-col gap-1 text-sm text-muted">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden md:mt-40">
        <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span
              key={copy}
              aria-hidden={copy === 1}
              className="text-[13vw] font-semibold leading-none tracking-[-0.03em] text-foreground/10"
            >
              Product design — Healthcare — SaaS — Product design — Healthcare — SaaS —&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
