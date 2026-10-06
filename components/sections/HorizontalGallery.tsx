"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIntro } from "@/lib/content";
import {
  featuredProjects,
  workHref,
  WORK_PORTFOLIO_COUNT,
} from "@/lib/projects";
import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Pick readable caption ink for a project's tile colour. */
function isDark(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140;
}

/**
 * The first scroll below the hero. On desktop the section pins and vertical
 * scroll drives a horizontal track: the intro line, then each shipped project
 * as a full-height card, then a door to the full archive. Images drift inside
 * their cards and each card scales up as it arrives, so the move reads as a
 * camera pan rather than a slider.
 *
 * Touch screens and reduced motion get the same track as a native swipe row
 * with scroll snapping, no pinning.
 */
export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const total = featuredProjects.length;
  const explorations = WORK_PORTFOLIO_COUNT - total;

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (pointer: fine)", () => {
      setPinned(true);
      const distance = () => track.scrollWidth - window.innerWidth;

      const pan = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
            setActive(Math.min(total - 1, Math.floor(self.progress * total)));
          },
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-gallery-card]", track);
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.86, rotate: 1.5 },
          {
            scale: 1,
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: pan,
              start: "left right",
              end: "left 35%",
              scrub: true,
            },
          }
        );
        const img = card.querySelector("[data-gallery-img]");
        if (img) {
          gsap.fromTo(
            img,
            { xPercent: 10 },
            {
              xPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: pan,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });

      gsap.fromTo(
        "[data-gallery-intro] > *",
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 1.2,
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: "top 70%" },
        }
      );

      // Pinning adds the track's width to the document; sections below need
      // to re-measure their own triggers after it.
      const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(refresh);
        gsap.set(track, { clearProps: "transform" });
        setPinned(false);
      };
    });

    return () => mm.revert();
  }, [reduced, total]);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Selected work"
      className="relative overflow-hidden bg-background"
    >
      <div className={pinned ? "flex h-screen items-center" : "py-20"}>
        <div
          ref={trackRef}
          className={
            pinned
              ? "flex items-center gap-[4vw] pl-10 pr-[8vw] will-change-transform"
              : "flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-6 md:scroll-px-10 [scrollbar-width:none] md:gap-8 md:px-10"
          }
        >
          {/* Intro panel */}
          <div
            data-gallery-intro
            className="flex w-[85vw] shrink-0 snap-start flex-col justify-center gap-8 md:w-[42vw] md:pr-[4vw]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Selected work · {total} shipped
            </p>
            <h2 className="font-display text-[8vw] font-medium leading-[1.02] tracking-[-0.04em] md:text-[3.4vw]">
              {homeIntro.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="flex items-end justify-between gap-6">
              <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
                {homeIntro.aside}
              </p>
              <div className="hidden md:block">
                <RoundFillLink href={homeIntro.ctaHref} size="sm">
                  {homeIntro.ctaLabel}
                </RoundFillLink>
              </div>
            </div>
            {pinned && (
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                Scroll
                <span aria-hidden className="inline-block h-px w-12 bg-foreground/30" />
                <span aria-hidden>→</span>
              </p>
            )}
          </div>

          {featuredProjects.map((project, i) => {
            const dark = isDark(project.tileBg);
            return (
              <Link
                key={project.slug}
                href={workHref(project.slug)}
                data-gallery-card
                className="group relative flex h-[62vh] w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] md:h-[74vh] md:w-[64vw]"
                style={{ backgroundColor: project.tileBg }}
              >
                <div
                  className={`relative z-10 flex items-start justify-between p-6 text-xs uppercase tracking-[0.2em] md:p-9 ${
                    dark ? "text-white/60" : "text-black/50"
                  }`}
                >
                  <span className="tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  <span className="hidden md:inline">{project.discipline}</span>
                </div>

                <div className="relative min-h-0 flex-1">
                  <div data-gallery-img className="absolute inset-[-2%_6%] will-change-transform">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.name} product mockup`}
                      fill
                      unoptimized={process.env.NODE_ENV !== "production"}
                      sizes="(min-width: 768px) 64vw, 85vw"
                      className="object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div
                  className={`relative z-10 flex items-end justify-between gap-6 p-6 md:p-9 ${
                    dark ? "text-white" : "text-foreground"
                  }`}
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-3xl font-medium leading-none tracking-[-0.04em] md:text-[4.2vw]">
                      {project.name}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-sm md:text-base ${
                        dark ? "text-white/70" : "text-black/60"
                      }`}
                    >
                      {project.card.subtitle}
                    </p>
                  </div>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-500 group-hover:-rotate-45 md:h-16 md:w-16 ${
                      dark ? "bg-white text-black" : "bg-black text-white"
                    }`}
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Door to the full archive */}
          <Link
            href="/work"
            data-gallery-card
            className="group flex h-[62vh] w-[70vw] shrink-0 snap-start flex-col justify-between rounded-[28px] bg-ink p-8 text-white md:h-[74vh] md:w-[34vw] md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              The archive
            </p>
            <div>
              <p className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-[4.4vw]">
                All {WORK_PORTFOLIO_COUNT} projects
              </p>
              <p className="mt-4 max-w-xs text-sm text-white/60 md:text-base">
                {total} shipped, plus {explorations} explorations where I chase
                an idea past the brief.
              </p>
            </div>
            <span className="flex items-center gap-4 text-sm">
              <span
                aria-hidden
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg text-black transition-transform duration-500 group-hover:-rotate-45"
              >
                →
              </span>
              See all work
            </span>
          </Link>
        </div>

        {pinned && (
          <div className="pointer-events-none absolute inset-x-10 bottom-8 flex items-center gap-6">
            <span className="w-16 text-xs tabular-nums text-muted">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-foreground/10">
              <div
                ref={progressRef}
                className="h-px origin-left bg-foreground"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
