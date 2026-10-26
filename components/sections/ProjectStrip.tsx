"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface StripCard {
  slug: string;
  name: string;
  category: string;
  href: string;
  poster: string;
}

const CARD_WIDTH = 300;
const GAP = 14;
const STEP = CARD_WIDTH + GAP;
// One full cycle (every card passing once) takes about 70 seconds.
const CYCLE_SECONDS = 70;
// After a touch, wheel or arrow press, wait this long before moving again.
const RESUME_AFTER_MS = 2500;

const unoptimized = process.env.NODE_ENV !== "production";

/**
 * "More to explore": every project as a poster card in a slow, endlessly
 * looping strip.
 *
 * It is a real horizontal scroll container, not an animation of a picture:
 * touch and trackpad users can swipe through it, the arrows step one card,
 * and every card is a link. Auto-movement advances scrollLeft a little each
 * frame and wraps at the seam between two identical copies of the list, so
 * the loop never visibly jumps. It pauses on hover, keyboard focus and
 * while the user is scrolling it, and it does not move at all for people
 * who prefer reduced motion.
 */
export default function ProjectStrip({ cards }: { cards: StripCard[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const focused = useRef(false);
  const heldUntil = useRef(0);

  const hold = useCallback(() => {
    heldUntil.current = performance.now() + RESUME_AFTER_MS;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cycle = cards.length * STEP;
    const speed = cycle / CYCLE_SECONDS; // px per second
    let pos = el.scrollLeft;
    let last = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.25, (now - last) / 1000);
      last = now;

      const userScrolling = now < heldUntil.current;
      if (userScrolling || hovering.current || focused.current) {
        // Follow wherever the user (or the arrows) put the strip. The
        // browser's own scroll position is only read here: on scaled
        // displays it snaps writes to the device pixel grid, and reading
        // it back every frame would swallow most of the slow auto-motion.
        pos = el.scrollLeft;
      } else {
        pos += speed * dt;
        // Keep the position inside the first copy so it loops forever.
        if (pos >= cycle) pos -= cycle;
        if (pos < 0) pos += cycle;
        el.scrollLeft = pos;
      }

      // A manual scroll past either end wraps too.
      if (el.scrollLeft >= cycle) el.scrollLeft -= cycle;

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [cards.length]);

  const stepBy = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    hold();
    el.scrollBy({ left: direction * STEP, behavior: "smooth" });
  };

  return (
    // A pale warm band, the tone of the stone in the posters, edge to edge.
    <div className="mt-16 bg-[#F7F3EE] py-14 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6 md:px-10">
        <div>
          <h3 className="font-serif text-3xl font-normal tracking-[-0.01em] md:text-[2.5rem]">
            More to explore
          </h3>
          <p className="mt-2 text-sm text-muted">
            An ever-moving collection of things I’ve made.
          </p>
        </div>
        <div className="-ml-0 flex items-center justify-between gap-5 sm:justify-start">
          <Link
            href="/work"
            className="whitespace-nowrap text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground"
          >
            All projects
          </Link>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => stepBy(-1)}
              aria-label="Previous projects"
              className="inline-flex h-9 w-9 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => stepBy(1)}
              aria-label="Next projects"
              className="inline-flex h-9 w-9 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="More projects"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") hovering.current = true;
        }}
        onPointerLeave={() => {
          hovering.current = false;
        }}
        onFocus={() => {
          focused.current = true;
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            focused.current = false;
          }
        }}
        onTouchStart={hold}
        onTouchMove={hold}
        onWheel={hold}
        onKeyDown={hold}
        className="mt-6 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max" style={{ gap: GAP }}>
          {[0, 1].map((copy) =>
            cards.map((card) => (
              <li
                key={`${copy}-${card.slug}`}
                aria-hidden={copy === 1 ? true : undefined}
                className="shrink-0"
                style={{ width: CARD_WIDTH }}
              >
                <Link
                  href={card.href}
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="group block"
                >
                  <div className="relative aspect-[300/190] overflow-hidden bg-foreground/[0.04]">
                    <Image
                      src={card.poster}
                      alt={copy === 1 ? "" : `${card.name} poster`}
                      fill
                      loading={copy === 0 ? "eager" : "lazy"}
                      unoptimized={unoptimized}
                      sizes="300px"
                      draggable={false}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium tracking-tight">
                    {card.name}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-muted">
                    {card.category}
                  </p>
                </Link>
              </li>
            ))
          )}
          {/* Trailing gap so the second copy ends exactly one step later,
              keeping both copies equal in width. */}
          <li aria-hidden className="shrink-0" style={{ width: 0 }} />
        </ul>
      </div>
    </div>
  );
}
