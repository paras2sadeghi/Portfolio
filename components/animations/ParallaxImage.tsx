"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Vertical travel in percent across the full scroll pass. */
  amount?: number;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
}

/**
 * Image that drifts against the scroll direction. The image element is
 * oversized so the parallax travel never exposes an edge.
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  amount = 12,
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;
    const target = imageRef.current;
    if (!frame || !target || reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
      target,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: "none",
        scrollTrigger: {
          trigger: frame,
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
  }, [reduced, amount]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: `-${amount}%`, bottom: `-${amount}%`, height: "auto" }}
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
      </div>
    </div>
  );
}
