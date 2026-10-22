"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
        // Starts at its natural size: the old 1.08 resting zoom enlarged an
        // already low-resolution source and made it look soft.
        { yPercent: 0, scale: 1 },
        {
          yPercent: 18,
          scale: 1.06,
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
      {/* Photograph — unoptimized only in dev, so a dev-server restart can't
          race the /_next/image optimizer on this 3MB source PNG. In
          production this flag was disabling Next's image pipeline entirely,
          shipping the full 3MB file with no resizing/compression to every
          visitor and directly slowing down the very first paint. */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-wide.png"
          alt={profile.name}
          fill
          preload
          quality={90}
          unoptimized={process.env.NODE_ENV !== "production"}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Scrim: keeps white overlay type legible over the bright florals */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45"
      />

      {/* Availability pill, left */}
      <div className="absolute bottom-[44vh] left-0 z-20 md:bottom-[28vh]">
        <Link
          href="/contact"
          data-hero-fade
          className="group flex items-center gap-4 rounded-r-full bg-ink/95 py-3 pl-6 pr-6 backdrop-blur-sm transition-colors hover:bg-ink md:gap-5 md:py-4 md:pl-9 md:pr-4"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
            <span className="absolute inset-0 animate-ping rounded-full bg-accent-green opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-accent-green" />
          </span>
          <span className="text-white">
            <span className="block text-[13px] font-medium leading-[1.35] md:text-sm">
              {profile.availability}
            </span>
            <span className="block text-[12px] leading-[1.35] text-white/60 md:text-[13px]">
              {profile.workplace}
            </span>
          </span>
          <span className="relative hidden h-10 w-10 shrink-0 items-center justify-center md:flex rounded-full bg-white/10 transition-transform duration-500 group-hover:rotate-45 md:h-12 md:w-12">
            <Globe />
          </span>
        </Link>
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
              {profile.name}&nbsp;·&nbsp;
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
