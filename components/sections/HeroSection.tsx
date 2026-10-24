"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE } from "@/utils/motion";
import { profile } from "@/lib/content";
import { HERO_BLUR } from "@/lib/heroBlur";

const NAME = profile.name.toUpperCase();

/**
 * Full-bleed portrait hero. The photograph is the whole frame; the name runs
 * as one slow loop across the base and is the page's main typographic
 * feature. Everything else is quiet: just a stationary role line above it.
 *
 * Accessibility: the real heading is the visually hidden h1 (the name is
 * announced exactly once). Every visible copy of the name, and the flower
 * separators, are aria-hidden decoration.
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
      <h1 className="sr-only">{profile.name}</h1>

      {/* Photograph. Unoptimized only in dev, so a dev-server restart can't
          race the /_next/image optimizer on this 3MB source PNG; production
          gets the optimized version. The crop keeps her in frame: on a tall
          phone viewport the image is much wider than the screen, so the focal
          point is pulled to where she stands (about 44% across). */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-wide.png"
          alt={`Portrait of ${profile.name} among flowering bougainvillea`}
          fill
          preload
          quality={90}
          // Shown instantly (a 349-byte blur of this same photo) until the
          // full image arrives, so the hero is never an empty black frame.
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          unoptimized={process.env.NODE_ENV !== "production"}
          sizes="100vw"
          className="object-cover object-[44%_center] md:object-center"
        />
      </div>

      {/* Scrim. Measured against the photo: the lower third is its brightest
          part (her white dress, sunlit leaves), so the bottom needs a firm
          gradient for the role line and name to hold their contrast. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0)_75%)]"
      />

      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col">
        {/* Stationary role line. */}
        <p
          data-hero-fade
          className="mb-3 px-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.5)] md:mb-4 md:px-10 md:text-[13px]"
        >
          Product designer · Vancouver
        </p>

        {/* Moving name (desktop, motion allowed). Two identical halves of two
            units each: NAME, flower, NAME, flower. The first unit sits
            complete inside the viewport before the loop begins. */}
        <div
          aria-hidden
          className="hero-name hero-name-moving overflow-x-clip pb-3 pl-6 md:pb-5 md:pl-10"
        >
          <div className="hero-name-track flex w-max whitespace-nowrap">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0">
                {[0, 1].map((unit) => (
                  <span
                    key={unit}
                    className="flex shrink-0 items-baseline font-display text-[9.2vw] font-medium uppercase leading-none tracking-[-0.035em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]"
                  >
                    <span>{NAME}</span>
                    <FlowerMark />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Static name (phones and reduced motion): complete and readable. */}
        <div
          aria-hidden
          className="hero-name-static px-6 pb-4 md:px-10 md:pb-5"
        >
          {/* The gap between the words is a margin, not a space character: a
              plain space would render at the container's 16px size and vanish
              next to 9vw type. */}
          <span className="block font-display text-[15.5vw] font-medium uppercase leading-[0.95] tracking-[-0.035em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)] md:mr-[0.26em] md:inline md:text-[9.2vw] md:leading-none">
            {profile.name.split(" ")[0].toUpperCase()}
          </span>
          <span className="block whitespace-nowrap font-display text-[15.5vw] font-medium uppercase leading-[0.95] tracking-[-0.035em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)] md:inline md:text-[9.2vw] md:leading-none">
            {profile.name.split(" ").slice(1).join(" ").toUpperCase()}
            {/* Tucked in close on phones so it never wraps under the name. */}
            <FlowerMark className="ml-[0.18em] mr-0 h-[0.6em] w-[0.6em] md:mx-[0.3em] md:h-[0.7em] md:w-[0.7em]" />
          </span>
        </div>
      </div>
    </section>
  );
}

/** The brand flower, used as the separator between repeats of the name. */
function FlowerMark({
  className = "mx-[0.3em] h-[0.7em] w-[0.7em]",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/brand/mark-128.png"
      alt=""
      aria-hidden
      width={128}
      height={128}
      // 3KB and always in the loop: load it up front so the separators
      // don't pop in as the name slides toward them.
      loading="eager"
      className={`inline-block self-baseline ${className}`}
    />
  );
}
