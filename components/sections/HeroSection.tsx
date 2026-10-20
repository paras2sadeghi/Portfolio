"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE } from "@/utils/motion";
import { profile } from "@/lib/content";

/** Layer offset for the depth parallax: negative moves against the cursor. */
const depth = (k: number, axis: "xy" | "y" = "xy"): CSSProperties => ({
  translate: `${axis === "xy" ? `calc(var(--hx, 0px) * ${k})` : "0px"} calc(var(--hy, 0px) * ${k})`,
});

/**
 * Full-bleed portrait hero with the name running as a marquee across the base.
 * The photograph is the entire frame; everything else is an overlay on top of
 * it, which is what gives the section its editorial weight.
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  // Depth parallax: the mouse sets two CSS vars on the section (--hx/--hy,
  // a few pixels either way) and each layer multiplies them by its own
  // depth through the `translate` property, so this never fights the GSAP
  // transforms used for the entrance and scroll parallax. The photo moves
  // against the cursor, the type with it, which reads as depth.
  useEffect(() => {
    const section = sectionRef.current;
    if (reduced || !section) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const offset = { x: 0, y: 0 };
    const paint = () => {
      section.style.setProperty("--hx", `${offset.x}px`);
      section.style.setProperty("--hy", `${offset.y}px`);
    };
    const ease = { duration: 1.1, ease: "power3.out", onUpdate: paint };
    const xTo = gsap.quickTo(offset, "x", ease);
    const yTo = gsap.quickTo(offset, "y", ease);

    // Listen on the window: the fixed nav sits over the hero, and section
    // events would treat moving onto it as leaving.
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      if (e.clientY > rect.bottom) {
        xTo(0);
        yTo(0);
        return;
      }
      xTo(((e.clientX - rect.left) / rect.width - 0.5) * 32);
      yTo(((e.clientY - rect.top) / rect.height - 0.5) * 20);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(offset);
    };
  }, [reduced]);

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
      {/* Photograph — unoptimized only in dev, so a dev-server restart can't
          race the /_next/image optimizer on this 3MB source PNG. In
          production this flag was disabling Next's image pipeline entirely,
          shipping the full 3MB file with no resizing/compression to every
          visitor and directly slowing down the very first paint. */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <div className="absolute -inset-6" style={depth(-0.7)}>
          <Image
            src="/images/hero-wide.png"
            alt={profile.name}
            fill
            priority
            unoptimized={process.env.NODE_ENV !== "production"}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Scrim: keeps white overlay type legible over the bright florals */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45"
      />

      {/* Availability pill, left. Depth lives on the wrapper because GSAP's
          entrance tween on [data-hero-fade] resets `translate` on the element
          it animates; vertical only, since the pill is pinned to the edge. */}
      <div
        className="absolute bottom-[30vh] left-0 z-20 md:bottom-[28vh]"
        style={depth(1.1, "y")}
      >
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

      {/* Role, right */}
      <div
        style={depth(1)}
        className="absolute bottom-[21vh] right-6 z-20 text-right md:bottom-[28vh] md:right-10"
      >
        <p
          data-hero-fade
          className="font-display text-lg font-medium leading-snug text-white md:text-2xl"
        >
          Product
          <br />
          Designer
        </p>
      </div>

      {/* Name marquee */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pb-3 md:pb-5"
        style={depth(0.5)}
      >
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
