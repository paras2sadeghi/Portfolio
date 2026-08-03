"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface PreviewItem {
  name: string;
  thumbnail?: string;
  card: {
    gradient: string;
  };
}

export default function HoverPreview({
  item,
  x,
  y,
}: {
  item: PreviewItem | null;
  x: number;
  y: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
    xTo(x);
    yTo(y);
  }, [x, y]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-56 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm border border-white/20 bg-ink shadow-[0_30px_80px_-35px_rgba(0,0,0,0.65)] transition-[opacity,transform] duration-300 md:block"
      style={{
        opacity: item ? 1 : 0,
      }}
    >
      {item?.thumbnail ? (
        <Image
          src={item.thumbnail}
          alt=""
          fill
          sizes="18rem"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: item?.card.gradient }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
        {item?.name}
      </div>
    </div>
  );
}
