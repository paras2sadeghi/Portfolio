"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { bougainvilleaClips } from "@/lib/motif";

export default function AboutVisualPanel({ reduced }: { reduced: boolean }) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const videoLayerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLParagraphElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const video = videoRef.current;
    if (!panel || !video || reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    const panel = panelRef.current;
    const media = mediaRef.current;
    const videoLayer = videoLayerRef.current;
    const headline = headlineRef.current;
    if (reduced || !panel) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.05 },
          {
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      if (videoLayer) {
        gsap.fromTo(
          videoLayer,
          { yPercent: 8 },
          {
            yPercent: -52,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "bottom 25%",
              scrub: true,
            },
          }
        );
      }

      if (headline) {
        gsap.fromTo(
          headline,
          { opacity: 0.12, yPercent: 18 },
          {
            opacity: 1,
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "bottom 25%",
              scrub: true,
            },
          }
        );
      }
    }, panel);

    return () => context.revert();
  }, [reduced]);

  return (
    <div
      ref={panelRef}
      className="relative min-h-[28rem] md:min-h-[36rem]"
    >
      <div className="@container/panel relative min-h-[28rem] overflow-hidden rounded-2xl md:min-h-[36rem]">
        <div
          ref={mediaRef}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#121212_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_30%_8%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(ellipse_60%_35%_at_90%_20%,rgba(255,255,255,0.04),transparent_45%)]"
          />
        </div>

        <div className="absolute inset-0 z-10 flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:p-8 md:min-h-[36rem] md:p-9">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/50 to-transparent"
          />
          <p
            ref={headlineRef}
            className="relative w-full max-w-full font-display text-[length:clamp(1.375rem,16cqi,3.25rem)] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-white will-change-transform @[28rem]/panel:text-[length:clamp(1.5rem,14cqi,3.75rem)] @[36rem]/panel:text-[length:clamp(1.75rem,12cqi,4.25rem)]"
            style={reduced ? { opacity: 1 } : { opacity: 0.12 }}
          >
            Design
            <br />
            with
            <br />
            structure
          </p>
        </div>

        {!reduced && (
          <div
            ref={videoLayerRef}
            aria-hidden
            className="pointer-events-none absolute inset-x-[-10%] top-[-8%] z-20 h-[115%] will-change-transform [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]"
          >
            <video
              ref={videoRef}
              src={bougainvilleaClips.bleed}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full scale-[1.1] object-cover object-[center_10%]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
