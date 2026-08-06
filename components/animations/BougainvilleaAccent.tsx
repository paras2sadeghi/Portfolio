"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type RefObject,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Placement =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center-right";

const PLACEMENT: Record<Placement, string> = {
  "top-right": "right-0 top-0 -translate-y-[8%] translate-x-[12%]",
  "top-left": "left-0 top-0 -translate-y-[6%] -translate-x-[10%]",
  "bottom-right": "bottom-0 right-0 translate-y-[10%] translate-x-[8%]",
  "bottom-left": "bottom-0 left-0 translate-y-[12%] -translate-x-[14%]",
  "center-right":
    "right-0 top-1/2 -translate-y-[42%] translate-x-[18%]",
};

interface BougainvilleaAccentProps {
  src: string;
  placement?: Placement;
  /** Scroll travel in % — keep low for decoration */
  parallax?: number;
  triggerRef?: RefObject<HTMLElement | null>;
  className?: string;
  style?: CSSProperties;
  /** Pause playback when parent is hidden (e.g. menu closed) */
  active?: boolean;
}

export default function BougainvilleaAccent({
  src,
  placement = "top-right",
  parallax = 12,
  triggerRef,
  className = "",
  style,
  active = true,
}: BougainvilleaAccentProps) {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!active) {
          video.pause();
          return;
        }
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.08, rootMargin: "80px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced, active]);

  useEffect(() => {
    if (!active) videoRef.current?.pause();
  }, [active]);

  useEffect(() => {
    const layer = layerRef.current;
    const trigger = triggerRef?.current;
    if (reduced || !layer || !trigger || parallax <= 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
      layer,
      { yPercent: -parallax * 0.45 },
      {
        yPercent: parallax * 0.55,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced, parallax, triggerRef]);

  if (reduced) return null;

  return (
    <div
      ref={layerRef}
      aria-hidden
      className={`pointer-events-none absolute z-0 will-change-transform ${PLACEMENT[placement]} ${className}`}
      style={style}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-contain object-center"
      />
    </div>
  );
}
