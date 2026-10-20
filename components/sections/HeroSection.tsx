"use client";

import { useEffect, useRef, useState } from "react";
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
  const driftRef = useRef<HTMLDivElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);
  const [spotlight, setSpotlight] = useState(false);
  const reduced = useReducedMotion();

  // Cursor spotlight: around the pointer the photo stays at full colour while
  // the rest of the frame dims a touch, and the photo drifts a few pixels
  // against the cursor. Leaving the hero opens the light back up to the full
  // frame. Fine pointers only; touch and reduced motion see the plain photo.
  useEffect(() => {
    const section = sectionRef.current;
    const drift = driftRef.current;
    if (reduced || !section || !drift) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setSpotlight(true);

    const light = { x: section.clientWidth / 2, y: section.clientHeight / 2, r: 2400 };
    // Vars live on the spotlight layer itself, in its own (scaled, drifting)
    // coordinate space, so the light sits exactly under the cursor.
    const paint = () => {
      const el = spotRef.current;
      if (!el) return;
      el.style.setProperty("--spot-x", `${light.x}px`);
      el.style.setProperty("--spot-y", `${light.y}px`);
      el.style.setProperty("--spot-r", `${light.r}px`);
    };
    paint();
    const follow = { duration: 0.6, ease: "power3.out", onUpdate: paint };
    const xTo = gsap.quickTo(light, "x", follow);
    const yTo = gsap.quickTo(light, "y", follow);
    const dxTo = gsap.quickTo(drift, "x", { duration: 1.2, ease: "power3.out" });
    const dyTo = gsap.quickTo(drift, "y", { duration: 1.2, ease: "power3.out" });

    // The cursor is often already over the hero when the page loads, so no
    // pointerenter fires; open the light on the first movement instead.
    let lit = false;
    const onMove = (e: PointerEvent) => {
      if (!lit) onEnter();
      const rect = section.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const el = spotRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        xTo(((e.clientX - r.left) / r.width) * el.offsetWidth);
        yTo(((e.clientY - r.top) / r.height) * el.offsetHeight);
      }
      dxTo((px - 0.5) * -18);
      dyTo((py - 0.5) * -12);
    };
    const onEnter = () => {
      lit = true;
      gsap.to(light, { r: 340, duration: 0.9, ease: "expo.out", onUpdate: paint });
    };
    const onLeave = () => {
      lit = false;
      gsap.to(light, { r: 2400, duration: 1.1, ease: "power2.inOut", onUpdate: paint });
      dxTo(0);
      dyTo(0);
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerenter", onEnter);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerenter", onEnter);
      section.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(light);
      setSpotlight(false);
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
        <div ref={driftRef} className="absolute -inset-4 will-change-transform">
          <Image
            src="/images/hero-wide.png"
            alt={profile.name}
            fill
            priority
            unoptimized={process.env.NODE_ENV !== "production"}
            sizes="100vw"
            className={`object-cover object-center transition-[filter] duration-700 ${
              spotlight ? "brightness-[0.5] saturate-[0.6]" : ""
            }`}
          />
          {spotlight && (
            <div ref={spotRef} aria-hidden className="hero-spotlight absolute inset-0">
              <Image
                src="/images/hero-wide.png"
                alt=""
                fill
                unoptimized={process.env.NODE_ENV !== "production"}
                sizes="100vw"
                className="object-cover object-center brightness-[1.08] saturate-[1.12]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Scrim: keeps white overlay type legible over the bright florals */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45"
      />

      {/* Availability pill, left. A real link now, so it no longer reads as a
          button that does nothing. */}
      <Link
        href="/contact"
        data-hero-fade
        className="group absolute bottom-[30vh] left-0 z-20 flex items-center gap-4 rounded-r-full bg-ink/95 py-3 pl-6 pr-6 backdrop-blur-sm transition-colors hover:bg-ink md:bottom-[28vh] md:gap-5 md:py-4 md:pl-9 md:pr-4"
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

      {/* Role, right */}
      <div
        data-hero-fade
        className="absolute bottom-[21vh] right-6 z-20 text-right md:bottom-[28vh] md:right-10"
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
