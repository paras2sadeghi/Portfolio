"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE } from "@/utils/motion";
import { profile } from "@/lib/content";

/**
 * Full-bleed portrait hero with the name running as a marquee across the base.
 * The photograph is the entire frame; everything else is an overlay on top of
 * it, which is what gives the section its editorial weight.
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      // Entrance: overlays rise once the photograph has settled.
      gsap.fromTo(
        "[data-hero-fade]",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: GSAP_EASE,
          stagger: 0.09,
          delay: 0.45,
        }
      );

      // Parallax: image drifts upward and scales as the hero scrolls away.
      gsap.fromTo(
        imageRef.current,
        { yPercent: 0, scale: 1.08 },
        {
          yPercent: 18,
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Photograph — unoptimized so dev restarts don't race the /_next/image optimizer on a 3MB PNG */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-wide.png"
          alt={profile.name}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Scrim: keeps white overlay type legible over the bright florals */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45"
      />

      {/* Location pill, left */}
      <div
        data-hero-fade
        className="absolute bottom-[30vh] left-0 z-20 flex items-center gap-5 rounded-r-full bg-ink/95 py-4 pl-6 pr-4 backdrop-blur-sm md:bottom-[28vh] md:py-5 md:pl-9 md:pr-5"
      >
        <p className="text-[13px] font-medium leading-[1.35] text-white md:text-sm">
          Located
          <br />
          in {profile.location}
        </p>
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 md:h-14 md:w-14">
          <Globe />
        </span>
      </div>

      {/* Role, right */}
      <div
        data-hero-fade
        className="absolute bottom-[30vh] right-6 z-20 text-right md:bottom-[28vh] md:right-10"
      >
        <p className="font-display text-lg font-medium leading-snug text-white md:text-2xl">
          Product
          <br />
          Designer
        </p>
      </div>

      {/* Name marquee */}
      <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pb-3 md:pb-5">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span
              key={copy}
              aria-hidden={copy === 1}
              className="font-display text-[13vw] font-medium uppercase leading-[0.82] tracking-[-0.035em] text-white"
            >
              {profile.name}&nbsp;—&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Wireframe globe: meridians in 3D space, spun on the Y axis. */
function Globe() {
  return (
    <span className="relative block h-6 w-6 md:h-7 md:w-7 [perspective:140px]">
      <span className="globe-spin absolute inset-0 [transform-style:preserve-3d]">
        <span className="absolute inset-0 rounded-full border border-white/70" />
        <span className="absolute inset-0 rounded-full border border-white/70 [transform:rotateY(60deg)]" />
        <span className="absolute inset-0 rounded-full border border-white/70 [transform:rotateY(120deg)]" />
        <span className="absolute inset-0 rounded-full border border-white/70 [transform:rotateX(90deg)]" />
        <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/70" />
      </span>
    </span>
  );
}
