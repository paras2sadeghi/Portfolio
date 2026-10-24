"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bougainvilleaClips } from "@/lib/motif";
import {
  featuredProjects as projects,
  workHref,
  WORK_PORTFOLIO_COUNT,
} from "@/lib/projects";
import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getLenis } from "@/hooks/useLenisGsap";

// Timeline units (1 unit = 200% of the viewport in scroll): one step per
// project, about 60% of a screen each.
const STEP = 0.3;

/**
 * The selected-work showcase: one pinned frame, framed by the bougainvillea,
 * where each scroll step advances one project. After the last project the pin
 * releases and the page continues. The intro copy above it is its own static
 * section (IntroSection), not part of this frame.
 *
 * The chevrons, dots and arrow keys still work: they scroll the page to that
 * project's step, so scroll position and the visible project never disagree.
 *
 * Desktop only: pinning fights touch gestures, so small screens skip the
 * pinned frame and get the same projects as an ordinary stacked list.
 */
export default function PinnedShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const flowerTopRef = useRef<HTMLDivElement | null>(null);
  const flowerBottomRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  const count = projects.length;

  const triggerRef = useRef<ScrollTrigger | null>(null);
  const indexRef = useRef(0);
  indexRef.current = index;

  // When pinned, jump by scrolling to the project's step; otherwise just swap.
  const show = useCallback(
    (target: number) => {
      const next = Math.max(0, Math.min(count - 1, target));
      const st = triggerRef.current;
      if (!st) {
        setIndex(next);
        return;
      }
      const total = count * STEP;
      const time = (next + 0.5) * STEP;
      const y = st.start + (time / total) * (st.end - st.start);
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(y, { duration: 1 });
      else window.scrollTo({ top: y, behavior: "smooth" });
    },
    [count]
  );

  const go = useCallback(
    (delta: number) => show(indexRef.current + delta),
    [show]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Only while the carousel is on screen — otherwise the arrows would
      // yank the page back up to this section from anywhere.
      if (triggerRef.current && !triggerRef.current.isActive) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const screen = screenRef.current;
    if (!section || !screen) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // ~60% of a screen of scroll per project.
          end: () => `+=${Math.round(count * STEP * 200)}%`,
          pin: screen,
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const time = self.progress * count * STEP;
            setIndex(Math.min(count - 1, Math.floor(time / STEP)));
          },
        },
      });
      triggerRef.current = tl.scrollTrigger ?? null;

      // Hold: an empty span so the timeline runs one step per project while
      // the frame stays pinned and onUpdate swaps the slide.
      tl.to({}, { duration: count * STEP });

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
        triggerRef.current = null;
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [reduced, count]);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Selected work"
      className="relative overflow-x-clip bg-background"
    >
      {/* Desktop only. On phones this frame is skipped and the stacked list
          at the bottom of the section carries the work instead. */}
      <div
        ref={screenRef}
        className="relative hidden items-center overflow-hidden px-6 md:flex md:h-screen md:px-10 md:pb-0 md:pt-14"
      >
        {!reduced && (
          <>
            <div
              ref={flowerTopRef}
              aria-hidden
              className="pointer-events-none absolute -top-[6vh] left-0 z-0 hidden h-[50vh] w-[26vw] will-change-transform md:block"
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
              className="pointer-events-none absolute -bottom-[10vh] right-0 z-0 hidden h-[42vh] w-[22vw] will-change-transform md:block"
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

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          {/* Grouped on the right: the top-left corner belongs to the flowers. */}
          <div className="mb-6 flex items-end justify-end gap-6">
            <div className="flex items-center gap-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Selected work
              </p>
              <p className="text-xs tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </p>
              <Link
                href="/work"
                className="text-xs uppercase tracking-[0.2em] text-foreground underline-offset-4 hover:underline"
              >
                All {WORK_PORTFOLIO_COUNT} projects →
              </Link>
              {/* Way out of the scroll lock for anyone who's seen enough. */}
              <a
                href="#about"
                className="text-xs uppercase tracking-[0.2em] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Skip ↓
              </a>
            </div>
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

            {/* Every slide is rendered and stacked; only the active one is
                visible. Image, title, subtitle and links switch in the same
                frame, so a title can never arrive ahead of its image. */}
            <div className="relative min-w-0 flex-1">
              {projects.map((p, i) => (
                <Slide key={p.slug} project={p} active={i === index} />
              ))}
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

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => show(i)}
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
      <div id="selected-work" className="grid scroll-mt-16 gap-10 px-6 pb-16 md:hidden">
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
            <p className="mt-1 text-sm text-muted">{p.card.subtitle}</p>
          </Link>
        ))}
        <Link
          href="/work"
          className="font-display text-xl font-medium underline underline-offset-4"
        >
          See all {WORK_PORTFOLIO_COUNT} projects →
        </Link>
      </div>
    </section>
  );
}

type ShowcaseProject = (typeof projects)[number];

function Slide({ project, active }: { project: ShowcaseProject; active: boolean }) {
  return (
    <div
      aria-hidden={!active}
      inert={!active}
      className={`transition-opacity duration-500 ease-out ${
        active ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
      }`}
    >
      {/* The mockup and the circle both open the case study; a live site
          gets its own clearly labelled text link. */}
      <Link
        href={workHref(project.slug)}
        className="group block"
        aria-label={`${project.name} case study`}
        tabIndex={-1}
      >
        <div className="relative mx-auto aspect-[16/9] max-h-[48vh] w-auto">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            // Loaded up front so switching slides never waits on the network.
            loading="eager"
            unoptimized={process.env.NODE_ENV !== "production"}
            sizes="80vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <div className="mt-6 flex items-start justify-between gap-8 md:mt-8">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {project.discipline} · {project.year}
          </p>
          <h3 className="mt-2 font-display text-3xl font-medium leading-[0.95] tracking-[-0.045em] md:text-[4vw]">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-base text-foreground/70 md:text-lg">
            {project.card.subtitle}
          </p>
          <p className="mt-1.5 text-sm font-medium text-foreground/80">
            {project.card.contribution}
          </p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-foreground underline-offset-4 hover:underline"
            >
              {project.liveLabel ?? "Live site"} ↗
            </a>
          )}
        </div>
        <RoundFillLink href={workHref(project.slug)} size="sm">
          Case study
        </RoundFillLink>
      </div>
    </div>
  );
}
