"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIntro } from "@/lib/content";
import { bougainvilleaClips } from "@/lib/motif";
import { projects, workHref } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Panel =
  | { kind: "intro" }
  | { kind: "story"; text: string }
  | { kind: "work"; project: (typeof projects)[number] };

/**
 * Builds the panel run: the about copy opens the sequence, then the work
 * travels past it.
 *
 * The bougainvillea is deliberately not in here. It hangs off the pinned frame
 * as a fixed overlay so the work slides beneath it, which is what makes the
 * motif read as a branch over the scene rather than another slide in the reel.
 */
function buildPanels(): Panel[] {
  // AboutSection already renders aboutStory[0..1], so only the closing
  // paragraph is pulled in here — the run should not repeat the page below it.
  const panels: Panel[] = [
    { kind: "intro" },
    { kind: "story", text: homeIntro.aside },
  ];

  projects.forEach((project) => panels.push({ kind: "work", project }));

  return panels;
}

/**
 * Horizontal showcase that pins to the viewport and converts vertical scroll
 * into sideways travel, carrying the about copy and the full body of work in
 * one continuous move.
 *
 * Panels scale and fade based on their distance from the centre of the screen,
 * so each one resolves as it arrives instead of the whole track sliding as a
 * single rigid unit — that independent movement is what makes it read as film
 * rather than as a carousel.
 *
 * Pinning is desktop-only. On touch screens a hijacked scroll axis fights the
 * user's gesture, so the same panels render as an ordinary vertical stack.
 */
export default function PinnedShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  const panels = buildPanels();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const screen = screenRef.current;
    const track = trackRef.current;
    if (!section || !screen || !track) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-panel]", track);

      const distance = () => track.scrollWidth - window.innerWidth;

      /** Resolve each panel against the centre of the viewport. */
      const settle = () => {
        const mid = window.innerWidth / 2;
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const offset = Math.abs(rect.left + rect.width / 2 - mid);
          const t = gsap.utils.clamp(0, 1, offset / (window.innerWidth * 0.7));
          gsap.set(item, {
            scale: gsap.utils.interpolate(1, 0.8, t),
            opacity: gsap.utils.interpolate(1, 0.25, t),
          });
        });
      };

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // Pin length drives pacing: shorter than the track so the run stays
          // brisk instead of holding the page hostage.
          end: () => `+=${distance() * 0.9}`,
          pin: screen,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: settle,
          onRefresh: settle,
        },
      });

      settle();

      // Pinning adds thousands of pixels to the document, which invalidates the
      // start/end positions every other ScrollTrigger on the page already
      // measured. Without this, reveals further down (About, Contact) never
      // fire and their masked text stays parked below the mask.
      const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(refresh);
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(items, { clearProps: "transform,opacity" });
        gsap.set(track, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="About and selected work"
      className="relative overflow-x-clip bg-background"
    >
      <div
        ref={screenRef}
        className="relative md:h-screen md:overflow-hidden"
      >
        {/* Bougainvillea hangs off the pinned frame itself, so the work travels
            underneath it. Both are pinned flush into their corners via
            object-position, so the foliage bleeds off the frame edge rather
            than floating with a gap around it. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[64vh] w-[34vw] md:block"
        >
          <video
            src={bougainvilleaClips.bleed}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            /* contain, never cover: cover crops the branch off at the frame. */
            className="h-full w-full object-contain object-left-top"
          />
        </div>
        {/* Same branch mirrored on both axes into the opposite corner, so the
            two together frame the section diagonally. */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 z-20 hidden h-[64vh] w-[34vw] md:block"
          // Flipped on both axes. Set inline rather than via a utility class so
          // it cannot be dropped by a stale JIT pass.
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

        <div
          ref={trackRef}
          className="flex flex-col gap-10 px-6 py-16 md:h-full md:w-max md:flex-row md:items-center md:gap-12 md:px-[12vw] md:py-0"
        >
          {panels.map((panel, i) => {
            if (panel.kind === "intro") {
              return (
                <div
                  key="intro"
                  data-panel
                  className="shrink-0 md:w-[42vw]"
                >
                  <h2 className="font-display text-[8vw] font-medium leading-[1.02] tracking-[-0.04em] md:text-[3vw]">
                    {homeIntro.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                </div>
              );
            }

            if (panel.kind === "story") {
              return (
                <div
                  key={panel.text.slice(0, 28)}
                  data-panel
                  className="shrink-0 text-base leading-relaxed text-muted md:w-[26vw] md:text-lg"
                >
                  {panel.text}
                </div>
              );
            }

            const { project } = panel;
            return (
              <Link
                key={project.slug}
                data-panel
                href={workHref(project.slug)}
                /* The mockups are 16:9, so the panel is sized to exactly that
                   ratio — the whole frame shows with no crop and no letterbox. */
                className="group relative block aspect-[16/9] shrink-0 overflow-hidden rounded-2xl md:h-[54vh] md:w-[96vh]"
                style={{ backgroundColor: project.tileBg }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 90vw, 96vh"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 md:p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    {project.discipline}
                  </p>
                  <p className="mt-1 font-display text-xl font-medium text-white md:text-2xl">
                    {project.name}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/0 transition-colors duration-500 group-hover:text-white">
                    Read the case study <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
