"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Part = { label: string; src: string; alt: string };

interface FeaturedStoryProps {
  href: string;
  name: string;
  mockup: string;
  parts: Part[];
}

const unoptimized = process.env.NODE_ENV !== "production";

// The story only runs on wide screens with motion allowed. Everywhere else
// the same markup is a plain stack: the laptop, then the screens.
const STORY_QUERY =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/**
 * The featured project's scroll story. The stage pins to the viewport; as you
 * scroll, the laptop shrinks away and the four phone screens slide in one at a
 * time, settle, and then the page carries on.
 *
 * The server renders the static stack, and story mode is switched on after
 * hydration with a data attribute, so there is no hydration mismatch and the
 * content is complete without JavaScript.
 */
export default function FeaturedStory({
  href,
  name,
  mockup,
  parts,
}: FeaturedStoryProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add(STORY_QUERY, () => {
      stage.dataset.story = "";
      const laptop = stage.querySelector("[data-laptop]");
      const label = stage.querySelector("[data-parts-label]");
      const phones = gsap.utils.toArray<HTMLElement>("[data-part]", stage);

      gsap
        .timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${window.innerHeight * 2.5}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(laptop, {
          scale: 0.55,
          yPercent: -12,
          autoAlpha: 0,
          duration: 1,
          ease: "power1.inOut",
        })
        .from(label, { autoAlpha: 0, y: 24, duration: 0.4 }, "-=0.3")
        .from(
          phones,
          { autoAlpha: 0, yPercent: 40, duration: 0.8, stagger: 0.6 },
          "<"
        )
        // A short hold once everything has settled, before the unpin.
        .to({}, { duration: 0.5 });

      // The layout just changed height, so every trigger below must re-measure.
      ScrollTrigger.refresh();

      return () => {
        delete stage.dataset.story;
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={stageRef}
      className="group/stage relative mt-12 data-[story]:mt-0! data-[story]:h-[100svh] md:mt-16"
    >
      {/* The laptop: first in the flow, or centred on the pinned stage. */}
      <div className="group-data-[story]/stage:absolute group-data-[story]/stage:inset-0 group-data-[story]/stage:flex group-data-[story]/stage:items-center">
        <Link
          data-laptop
          href={href}
          aria-label={`${name} case study`}
          className="group relative block aspect-[1542/851] w-full"
        >
          <Image
            src={mockup}
            alt={`${name} on desktop and phone`}
            fill
            unoptimized={unoptimized}
            sizes="(max-width: 768px) 92vw, 80vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </Link>
      </div>

      {/* Inside the platform: below the laptop, or on the same stage. */}
      <div className="mt-14 md:mt-16 group-data-[story]/stage:absolute group-data-[story]/stage:inset-0 group-data-[story]/stage:mt-0! group-data-[story]/stage:flex group-data-[story]/stage:flex-col group-data-[story]/stage:justify-center">
        <h3
          data-parts-label
          className="text-xs font-normal uppercase tracking-[0.18em] text-muted"
        >
          Inside the platform
        </h3>

        {/* Phones and tablets: a swipeable row. Desktop (1024px and up): four across. */}
        <ul className="-mx-6 mt-6 flex snap-x snap-mandatory scroll-pl-6 gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:scroll-pl-10 md:px-10 lg:mx-0 lg:scroll-pl-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {parts.map((part, i) => (
            <li
              key={part.label}
              data-part
              className="w-[70%] shrink-0 snap-start sm:w-[44%] lg:w-auto lg:shrink"
            >
              <Link href={href} className="group block">
                {/* Every screen is a phone screenshot with the same tall
                    proportions (about 9:19.5), so the frame is that exact
                    shape and the whole screen shows, uncropped. */}
                <div className="relative aspect-[530/1147] max-w-[280px] overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
                  <Image
                    src={part.src}
                    alt={part.alt}
                    fill
                    unoptimized={unoptimized}
                    sizes="(max-width: 768px) 70vw, 280px"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 flex max-w-[280px] items-baseline gap-3 text-sm">
                  <span className="tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{part.label}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
