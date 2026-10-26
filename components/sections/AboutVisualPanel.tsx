"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bougainvilleaClips } from "@/lib/motif";

/**
 * A warm stone panel with bougainvillea drifting down through it on scroll: the
 * vine video rises as the page moves, the backdrop slowly scales, and the
 * content fades up into place. The words are whatever is passed in, so it
 * can hold any short chapter.
 *
 * The video only plays while the panel is on screen; with reduced motion
 * there is no video or parallax and the content is simply shown.
 */
export default function AboutVisualPanel({
  children,
  reduced,
}: {
  children: ReactNode;
  reduced: boolean;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const videoLayerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
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
    if (reduced || !panel) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const scrub = { trigger: panel, start: "top 85%", end: "bottom 25%", scrub: true };

      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.05 },
          {
            scale: 1.1,
            ease: "none",
            scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      }
      if (videoLayerRef.current) {
        // The vines drift up and out of the panel, away from the copy.
        gsap.fromTo(
          videoLayerRef.current,
          { yPercent: 0 },
          { yPercent: -60, ease: "none", scrollTrigger: scrub }
        );
      }
      if (contentRef.current) {
        // A small rise only; the copy is always at full strength.
        gsap.fromTo(
          contentRef.current,
          { y: 32 },
          { y: 0, ease: "none", scrollTrigger: scrub }
        );
      }
    }, panel);

    return () => context.revert();
  }, [reduced]);

  return (
    <div
      ref={panelRef}
      className="relative isolate overflow-hidden rounded-2xl text-foreground"
    >
      {/* Warm stone, the tone of the posters' sets, with a soft light from
          the top left. The vine video is transparent, so the flowers sit on
          it the way they do in the photographs. */}
      <div ref={mediaRef} aria-hidden className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute inset-0 bg-[#F1E9DF]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_25%_0%,rgba(255,255,255,0.7),transparent_60%)]" />
      </div>

      {!reduced && (
        <div
          ref={videoLayerRef}
          aria-hidden
          // A large square in the top-left (the clip is square, with the vine
          // filling its top-left). It starts reaching down toward the
          // heading and rises out of the way as the page scrolls. No fade.
          className="pointer-events-none absolute left-0 top-0 aspect-square w-[85%] will-change-transform md:w-[58%]"
        >
          <video
            ref={videoRef}
            src={bougainvilleaClips.bleed}
            muted
            loop
            playsInline
            preload="metadata"
            // The whole vine, uncropped, so it ends where the flowers end.
            className="h-full w-full object-contain object-[left_top]"
          />
        </div>
      )}

      {/* The content sits in the lower part, clear of the vines. */}
      <div className="relative flex min-h-[34rem] flex-col justify-end p-6 pt-56 sm:p-10 sm:pt-64 md:min-h-[42rem] md:p-16 md:pt-72">
        <div ref={contentRef} className="relative will-change-transform">
          {children}
        </div>
      </div>
    </div>
  );
}
