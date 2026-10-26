"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import AboutVisualPanel from "@/components/sections/AboutVisualPanel";
import ContactSection from "@/components/sections/ContactSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * About page, from the supplied art direction: a modern editorial layout in
 * the home page's 1200px column (12-column grid), serif headings with a pink
 * italic accent, small pink eyebrows, thin rules between chapters and the
 * three real photographs. Each chapter fades up once as it comes into view.
 */

const PINK = "text-[#DB2777]";
const unoptimized = process.env.NODE_ENV !== "production";

export default function AboutPage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  // One-time fade-up for each [data-reveal] block. IntersectionObserver, so
  // nothing can be left hidden by a stale scroll measurement; content is
  // fully visible without JS and with reduced motion.
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]", page);
    const ctx = gsap.context(() => gsap.set(blocks, { y: 32, autoAlpha: 0 }), page);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          ctx.add(() =>
            gsap.to(entry.target, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" })
          );
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    blocks.forEach((b) => io.observe(b));
    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="bg-white text-foreground">
      {/* Hero */}
      <Chapter className="pt-32 md:pt-40" first>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-7">
            <Eyebrow>A little about me</Eyebrow>
            <h1 className="font-serif text-[clamp(2.75rem,9vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.02em] md:text-[clamp(3rem,5vw,4.75rem)]">
              My brain has a visual setting.{" "}
              <em className={`not-italic md:block ${PINK}`}>
                <span className="italic">It’s always on.</span>
              </em>
            </h1>
            <Body className="mt-8">
              Hi, I’m Parastoo. A Vancouver-based product designer who loves
              making things work, look beautiful, and feel a little more human.
            </Body>
            <Body>
              I think in pictures. Sometimes even sounds and feelings turn into
              images in my head.
            </Body>
            <Body>It’s a pretty interesting place in there.</Body>
          </div>
          <div data-reveal className="lg:col-span-5">
            <Photo
              src="/images/about/resting-on-arms.webp"
              alt="Parastoo resting her head on her arms on a sunlit stone ledge, bougainvillea petals in front of her"
              width={525}
              height={543}
              priority
            />
          </div>
        </div>
      </Chapter>

      {/* 01 */}
      <Chapter>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-6">
            <Eyebrow>01 / How it started</Eyebrow>
            <Heading>
              I’ve always been a bit of a <Accent>fixer.</Accent>
            </Heading>
            <Body>
              As a kid, I was constantly trying to fix things around the house. I
              loved figuring out how things worked, but I loved art just as much.
            </Body>
            <Body>
              Then came cinema, where I fell in love with storytelling and making
              people <em>feel</em> something.
            </Body>
            <Body>
              After university, I started out in content creation. Little by
              little, I found my way into design.
            </Body>
            <Body>
              Turns out,{" "}
              <strong className="font-medium text-foreground">
                design was where everything I loved finally met.
              </strong>
            </Body>
          </div>
          <div data-reveal className="lg:col-span-6">
            <div className="flex min-h-[260px] flex-col justify-center bg-[#F7F3EE] p-10 md:min-h-[300px] md:p-12">
              <p className="font-serif text-3xl leading-[1.1] tracking-[-0.01em] md:text-[2.25rem]">
                Art + logic +
                <br />
                <Accent>storytelling.</Accent>
              </p>
              <p className="mt-4 text-sm text-muted">Three interests. One career.</p>
            </div>
          </div>
        </div>
      </Chapter>

      {/* 02 */}
      <Chapter>
        <div data-reveal>
          <Eyebrow>02 / How I think</Eyebrow>
          <Heading>
            I see it before I can <Accent>explain it.</Accent>
          </Heading>
        </div>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-5">
            <Body>
              My thinking is incredibly visual. Ideas take shape in my head long
              before I find the words for them.
            </Body>
            <Body>
              I care about the little details, sometimes a little too much. I
              love learning, experimenting, and finding unexpected ways to solve
              problems.
            </Body>
            <Body>To me, good design isn’t just something that looks beautiful.</Body>
            <Body>
              <strong className="font-medium text-foreground">
                It’s something that makes sense and makes you feel something.
              </strong>
            </Body>
          </div>
          <ol data-reveal className="lg:col-span-6 lg:col-start-7">
            {[
              ["See the bigger picture.", "I visualize ideas, connections, and possibilities."],
              ["Obsess over the little things.", "The details are what make an experience feel right."],
              ["Never stop experimenting.", "There’s always something new worth learning."],
            ].map(([title, line], i) => (
              <li
                key={title}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-foreground/10 py-6 last:border-b"
              >
                <span className={`pt-1.5 text-sm tabular-nums ${PINK}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-[-0.01em] md:text-[1.75rem]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-muted md:text-base">{line}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Chapter>

      {/* 03 */}
      {/* 03: the dark panel with drifting bougainvillea and parallax. */}
      <Chapter tight className="pb-20 md:pb-28">
        <AboutVisualPanel reduced={reduced}>
          <Eyebrow>03 / When things get messy</Eyebrow>
          <h2 className="mb-8 max-w-[18ch] font-serif text-[clamp(2.25rem,8vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.02em] md:text-[clamp(2.75rem,4vw,3.75rem)]">
            Chaos? <Accent>Surprisingly, I’m pretty good at it.</Accent>
          </h2>
          <Body>
            Give me a tricky problem, an unexpected crisis, or a deadline that’s
            getting uncomfortably close, and something clicks.
          </Body>
          <Body>
            I focus, connect the dots, find a way forward, and get things done.
          </Body>
          <Body className="mb-0">
            I might overthink the tiniest visual detail on an ordinary Tuesday, but
            when it really matters, I know how to lock in.
          </Body>
        </AboutVisualPanel>
      </Chapter>

      {/* 04 */}
      <Chapter>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="order-2 lg:order-1 lg:col-span-5">
            <Photo
              src="/images/about/sunlit-profile.webp"
              alt="Parastoo with her eyes closed in the sun, surrounded by bougainvillea"
              width={492}
              height={543}
            />
          </div>
          <div data-reveal className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <Eyebrow>04 / Beyond the pixels</Eyebrow>
            <Heading>
              I collect <Accent>creative obsessions.</Accent>
            </Heading>
            <Body>
              I make music, experiment with code, explore new technologies, and
              regularly disappear down fascinating rabbit holes.
            </Body>
            <Body>Sometimes those rabbit holes involve actual rabbits.</Body>
            <Body>
              I have a ridiculous soft spot for animals, a never-ending list of
              things I want to learn, and a habit of turning random curiosities
              into creative projects.
            </Body>
            <Body>
              Not everything I make needs a purpose.{" "}
              <strong className="font-medium text-foreground">
                Sometimes curiosity is reason enough.
              </strong>
            </Body>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Music", "Creative coding", "Animals", "Games"].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-foreground/15 px-4 py-2 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Chapter>

      {/* 05 */}
      <Chapter last>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-6">
            <Eyebrow>05 / What’s next</Eyebrow>
            <Heading>
              Still curious. <Accent>Still building.</Accent>
            </Heading>
            <Body>
              I’m currently working in product design, learning front-end
              development, and exploring how design and technology can create
              more immersive experiences.
            </Body>
            <Body>
              I’m especially drawn to the world of games, where design,
              storytelling, interaction, and a little magic all come together.
            </Body>
            <Body>
              I’m always interested in exciting opportunities, interesting
              people, and ideas worth bringing to life.
            </Body>
            <ul className="mt-8 border-t border-foreground/10">
              {["Product design", "Creative development", "Game experiences"].map(
                (item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-foreground/10 py-4"
                  >
                    <span className={`text-sm tabular-nums ${PINK}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div data-reveal className="lg:col-span-6">
            <Photo
              src="/images/about/looking-up-with-bougainvillea.webp"
              alt="Parastoo at a laptop on a sunny terrace, holding a bougainvillea flower and looking up, thinking"
              width={718}
              height={534}
            />
          </div>
        </div>
      </Chapter>

      <ContactSection lead="Have something in mind?" />
    </main>
  );
}

/**
 * One chapter in the 1200px column. Chapters after the first open with a thin
 * rule inside the column, so it lines up with the text; the tinted "chaos"
 * chapter carries its own panel instead, with tighter padding.
 */
function Chapter({
  children,
  className = "",
  first = false,
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  first?: boolean;
  last?: boolean;
  tight?: boolean;
}) {
  const inner = first
    ? "pb-20 md:pb-28"
    : tight
      ? "py-2"
      : "border-t border-foreground/10 py-20 md:py-28";
  return (
    <section className={`px-6 md:px-10 ${className}`}>
      <div className={`mx-auto max-w-[1200px] ${inner}`}>{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className={`mb-6 text-[11px] font-medium uppercase tracking-[0.16em] ${PINK}`}>
      {children}
    </p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 font-serif text-[clamp(2.25rem,8vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.02em] md:text-[clamp(2.75rem,4vw,3.75rem)]">
      {children}
    </h2>
  );
}

function Accent({ children }: { children: ReactNode }) {
  return <em className={`italic ${PINK}`}>{children}</em>;
}

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-4 max-w-[34rem] text-base leading-relaxed text-foreground/70 md:text-[1.0625rem] ${className}`}>
      {children}
    </p>
  );
}

/** A real photograph with a thin inset frame line, as in the art direction. */
function Photo({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className="relative overflow-hidden bg-[#EFE8DF]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized={unoptimized}
        sizes="(max-width: 1024px) 92vw, 560px"
        className="block h-auto w-full"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-4 border border-white/40"
      />
    </figure>
  );
}
