"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIntro } from "@/lib/content";
import { bougainvilleaClips } from "@/lib/motif";
import { projects, workHref } from "@/lib/projects";
import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GSAP_EASE } from "@/utils/motion";

/**
 * One pinned frame that runs in two acts.
 *
 * Act one is scroll-driven: the intro copy travels right-to-left across the
 * frame as the page is scrolled. Act two takes over in the same frame — the
 * horizontal travel stops and a chevron-driven carousel of the work fades in.
 *
 * The carousel is navigated by its controls, not by scroll, so scrolling on
 * past simply releases the pin and continues down the page. That keeps the
 * section from holding a visitor hostage through ten projects.
 *
 * Desktop only: pinning fights touch gestures, so small screens get the same
 * content as an ordinary stacked section.
 */
export default function PinnedShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const flowerTopRef = useRef<HTMLDivElement | null>(null);
  const flowerBottomRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  const count = projects.length;
  const project = projects[index];

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Cross-fade the frame on slide change.
  useEffect(() => {
    if (reduced) return;
    const frame = frameRef.current;
    if (!frame) return;
    const tween = gsap.fromTo(
      frame,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: GSAP_EASE }
    );
    return () => {
      tween.kill();
    };
  }, [index, reduced]);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const screen = screenRef.current;
    const intro = introRef.current;
    const carousel = carouselRef.current;
    if (!section || !screen || !intro || !carousel) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // Short pin: just long enough to play the handoff, then release.
          end: "+=170%",
          pin: screen,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      // Act one — copy travels right to left and clears the frame.
      tl.fromTo(
        intro,
        { xPercent: 0, opacity: 1 },
        { xPercent: -115, opacity: 0, ease: "none", duration: 0.55 },
        0
      );

      // Act two — the carousel arrives in the space the copy left behind.
      tl.fromTo(
        carousel,
        { opacity: 0, xPercent: 12, pointerEvents: "none" },
        {
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          ease: "none",
          duration: 0.35,
        },
        0.5
      );

      // Flowers drift on the same scrub as the hero photograph, so the motif
      // reads as one element travelling down the page.
      [flowerTopRef.current, flowerBottomRef.current].forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { yPercent: 0, scale: 1.04 },
          {
            yPercent: i === 0 ? 14 : -14,
            scale: 1.13,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Pinning changes the document height, which leaves triggers further
      // down the page holding stale positions unless they re-measure.
      const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(refresh);
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [reduced]);

  // Live sites get sent to the real thing; concepts get the case study.
  const ctaHref = project.liveUrl ?? workHref(project.slug);
  const ctaExternal = Boolean(project.liveUrl);
  const ctaLabel = project.liveUrl ? "View live" : "Check me out";

  const caption = (
    <div className="mt-5 flex items-start justify-between gap-6 md:mt-8">
      {/* Title and subtitle stack directly under each other now — they used
          to split across the row, which pushed the subtitle into the same
          screen region as the bottom-right flower. */}
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {project.discipline}
        </p>
        <h3 className="mt-1 font-display text-2xl font-medium tracking-tight md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted md:text-base">
          {project.card.subtitle}
        </p>
      </div>

      <RoundFillLink href={ctaHref} external={ctaExternal} size="sm">
        {ctaLabel}
      </RoundFillLink>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="About and selected work"
      className="relative overflow-x-clip bg-background"
    >
      <div
        ref={screenRef}
        className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 md:h-screen md:px-10 md:py-0"
      >
        {!reduced && (
          <>
            <div
              ref={flowerTopRef}
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[64vh] w-[34vw] will-change-transform md:block"
            >
              <video
                src={bougainvilleaClips.bleed}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-contain object-left-top"
              />
            </div>
            <div
              ref={flowerBottomRef}
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[64vh] w-[34vw] will-change-transform md:block"
              // Mirrored on both axes so the pair frames the section diagonally.
              style={{ transform: "scaleX(-1) scaleY(-1)" }}
            >
              <video
                src={bougainvilleaClips.bleed}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-contain object-left-top"
              />
            </div>
          </>
        )}

        {/* Act one */}
        <div
          ref={introRef}
          className="relative z-10 mx-auto grid w-full max-w-[1600px] gap-12 md:grid-cols-[1.15fr_1fr] md:gap-20"
        >
          <h2 className="font-display text-[8vw] font-medium leading-[1.02] tracking-[-0.04em] md:text-[3.2vw]">
            {homeIntro.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="flex flex-col items-start gap-6 self-end md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
              {homeIntro.aside}
            </p>
            <RoundFillLink href={homeIntro.ctaHref}>
              {homeIntro.ctaLabel}
            </RoundFillLink>
          </div>
        </div>

        {/* Act two — stacked on top of act one so it occupies the same frame. */}
        <div
          ref={carouselRef}
          className="absolute inset-x-0 z-10 mx-auto hidden w-full max-w-[1600px] px-6 md:block md:px-10"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <div className="mb-6 flex items-end justify-between gap-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Selected work
            </p>
            <p className="text-xs tabular-nums text-muted">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="shrink-0 rounded-full border border-foreground/15 bg-background/70 p-3 text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-background md:p-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* The mockup links to the case study on its own; the caption's
                CTA is a separate link (to the live site when there is one),
                so the two can't end up as a nested <a> inside an <a>. */}
            <div ref={frameRef} className="min-w-0 flex-1">
              <Link
                href={workHref(project.slug)}
                className="group block"
                aria-label={`Open the ${project.name} case study`}
              >
                {/* Capped height, not just aspect-ratio off full width — a
                    wide 16:9 image at h-screen would leave no room below it
                    for the caption before overflow-hidden clips it. */}
                <div className="relative mx-auto aspect-[16/9] max-h-[46vh] w-auto">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    unoptimized={process.env.NODE_ENV !== "production"}
                    sizes="80vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
              {caption}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="shrink-0 rounded-full border border-foreground/15 bg-background/70 p-3 text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-background md:p-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to ${p.name}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-foreground"
                    : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Small screens get the work as a plain stacked list under the copy. */}
      <div className="grid gap-10 px-6 pb-16 md:hidden">
        {projects.map((p) => (
          <Link key={p.slug} href={workHref(p.slug)} className="block">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={p.thumbnail}
                alt={p.name}
                fill
                unoptimized={process.env.NODE_ENV !== "production"}
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
              {p.discipline}
            </p>
            <p className="font-display text-xl font-medium">{p.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
