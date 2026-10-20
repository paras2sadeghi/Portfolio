"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Lightbox, { type LightboxImage } from "@/components/work/Lightbox";

/** Opens the "Look closer" viewer at a given screenshot. */
const ZoomContext = createContext<(src: string) => void>(() => {});

interface BlockImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type CaseStudyBlock =
  | { type: "text"; label?: string; title: string; body: string[] }
  | { type: "statement"; text: string }
  | (BlockImage & {
      type: "image";
      caption?: string;
      frame?: "browser" | "plain";
    })
  | {
      type: "split";
      label?: string;
      title: string;
      body: string[];
      images: BlockImage[];
      reverse?: boolean;
    }
  | {
      type: "pair";
      label?: string;
      title: string;
      body: string[];
      images: BlockImage[];
    }
  | { type: "phones"; label?: string; caption?: string; images: BlockImage[] }
  | { type: "todo"; title: string; note: string };

const unoptimized = process.env.NODE_ENV !== "production";
// Draft blocks (missing process images, outcome numbers) are visible while
// developing so the gaps are obvious, and never ship to the live site.
const showDrafts = process.env.NODE_ENV !== "production";

/**
 * Long-form case-study body. Text rises in, screenshots unmask upward as they
 * enter and settle from a slight zoom, and the statement line fills in word by
 * word on scroll. Everything is still readable with motion off.
 */
export default function CaseStudyBlocks({
  blocks,
  tint,
}: {
  blocks: CaseStudyBlock[];
  /** Project tile colour, used as the backdrop behind framed screenshots. */
  tint: string;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [zoomed, setZoomed] = useState<number | null>(null);

  // Every screenshot on the page, in reading order, for the viewer.
  const images = useMemo<LightboxImage[]>(() => {
    const list: LightboxImage[] = [];
    for (const block of blocks) {
      if (block.type === "image") list.push(block);
      if (block.type === "split" || block.type === "pair" || block.type === "phones") {
        list.push(...block.images);
      }
    }
    return list;
  }, [blocks]);
  const zoom = useMemo(
    () => (src: string) => {
      const i = images.findIndex((img) => img.src === src);
      if (i >= 0) setZoomed(i);
    },
    [images]
  );

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-shot]").forEach((el) => {
        const img = el.querySelector("img");
        gsap.fromTo(
          el,
          { clipPath: "inset(18% 0% 0% 0% round 20px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 95%", end: "top 45%", scrub: 0.6 },
          }
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom 40%", scrub: true },
            }
          );
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-statement]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll("span"),
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-phones] > *").forEach((el, i) => {
        gsap.fromTo(
          el,
          { yPercent: 12 + i * 6 },
          {
            yPercent: -4 - i * 3,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <ZoomContext.Provider value={zoom}>
    <Lightbox images={images} index={zoomed} onChange={setZoomed} onClose={() => setZoomed(null)} />
    <div ref={rootRef} className="space-y-24 md:space-y-40">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "text":
            return (
              <section key={key} className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-16">
                <Label text={block.label} />
                <div data-rise className="max-w-3xl">
                  <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
                    {block.title}
                  </h2>
                  <Body paragraphs={block.body} />
                </div>
              </section>
            );

          case "statement":
            return (
              <p
                key={key}
                data-statement
                className="mx-auto max-w-5xl text-center font-display text-4xl font-medium leading-[1.08] tracking-[-0.035em] md:text-[4.6vw]"
              >
                {block.text.split(" ").map((word, w) => (
                  <span key={w}>{word} </span>
                ))}
              </p>
            );

          case "image":
            return (
              <figure key={key}>
                <Shot
                  image={block}
                  tint={tint}
                  framed={block.frame !== "plain"}
                  sizes="(max-width: 1600px) 100vw, 1600px"
                />
                {block.caption && <Caption text={block.caption} />}
              </figure>
            );

          case "split":
            return (
              <section
                key={key}
                className="grid items-start gap-10 md:grid-cols-12 md:gap-14"
              >
                <div
                  data-rise
                  // Copy stays in view while its screenshots scroll past.
                  className={`md:sticky md:top-28 md:col-span-4 ${block.reverse ? "md:order-2" : ""}`}
                >
                  <Label text={block.label} inline />
                  <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] md:text-4xl">
                    {block.title}
                  </h2>
                  <Body paragraphs={block.body} />
                </div>
                <div
                  className={`space-y-6 md:col-span-8 ${block.reverse ? "md:order-1" : ""}`}
                >
                  {block.images.map((img) => (
                    <Shot key={img.src} image={img} tint={tint} framed sizes="(min-width: 768px) 66vw, 100vw" />
                  ))}
                </div>
              </section>
            );

          case "pair":
            return (
              <section key={key}>
                <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-16">
                  <Label text={block.label} />
                  <div data-rise className="max-w-3xl">
                    <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
                      {block.title}
                    </h2>
                    <Body paragraphs={block.body} />
                  </div>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {block.images.map((img) => (
                    <Shot key={img.src} image={img} tint={tint} framed sizes="(min-width: 768px) 50vw, 100vw" />
                  ))}
                </div>
              </section>
            );

          case "phones":
            return (
              <section
                key={key}
                className="overflow-hidden rounded-[28px] px-6 py-16 md:px-16 md:py-24"
                style={{ backgroundColor: tint }}
              >
                <div className="mx-auto mb-12 max-w-xl text-center">
                  <Label text={block.label} inline />
                  {block.caption && (
                    <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
                      {block.caption}
                    </p>
                  )}
                </div>
                <div
                  data-phones
                  className={`mx-auto grid items-start gap-3 md:gap-10 ${
                    block.images.length === 4
                      ? "max-w-6xl grid-cols-2 md:grid-cols-4"
                      : "max-w-4xl grid-cols-3"
                  }`}
                >
                  {block.images.map((img) => (
                    <div
                      key={img.src}
                      className="relative aspect-[1170/2532] overflow-hidden rounded-[18px] border-[3px] border-foreground/90 bg-foreground shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] md:rounded-[38px] md:border-[6px]"
                    >
                      <Zoom src={img.src} alt={img.alt} className="absolute inset-0">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized={unoptimized}
                          sizes="(min-width: 768px) 280px, 30vw"
                          className="object-cover object-top"
                        />
                      </Zoom>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "todo":
            if (!showDrafts) return null;
            return (
              <aside
                key={key}
                className="rounded-2xl border-2 border-dashed border-amber-500/60 bg-amber-50 p-8 text-amber-900 md:p-10"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em]">
                  Draft · hidden on the live site
                </p>
                <p className="mt-3 font-display text-2xl font-medium">{block.title}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed md:text-base">
                  {block.note}
                </p>
              </aside>
            );

          default:
            return null;
        }
      })}
    </div>
    </ZoomContext.Provider>
  );
}

function Label({ text, inline = false }: { text?: string; inline?: boolean }) {
  if (!text) return inline ? null : <span />;
  return (
    <p
      className={`text-xs uppercase tracking-[0.2em] text-muted ${
        inline ? "" : "md:sticky md:top-28 md:self-start md:pt-3"
      }`}
    >
      {text}
    </p>
  );
}

function Body({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <figcaption className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
      {text}
    </figcaption>
  );
}

/** A screenshot, optionally floated on the project tint inside a window frame. */
function Shot({
  image,
  tint,
  framed,
  sizes,
}: {
  image: BlockImage;
  tint: string;
  framed: boolean;
  sizes: string;
}) {
  if (!framed) {
    return (
      <div data-shot className="overflow-hidden rounded-[20px]">
        <Zoom src={image.src} alt={image.alt}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            unoptimized={unoptimized}
            sizes={sizes}
            className="h-auto w-full"
          />
        </Zoom>
      </div>
    );
  }
  return (
    <div
      data-shot
      className="overflow-hidden rounded-[20px] p-3 md:p-8"
      style={{ backgroundColor: tint }}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(15,40,60,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-2.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
        </div>
        <Zoom src={image.src} alt={image.alt}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            unoptimized={unoptimized}
            sizes={sizes}
            className="h-auto w-full"
          />
        </Zoom>
      </div>
    </div>
  );
}

/** Makes a screenshot open in the viewer, with a quiet "Look closer" hint. */
function Zoom({
  src,
  alt,
  className = "relative block",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const zoom = useContext(ZoomContext);
  return (
    <button
      type="button"
      onClick={() => zoom(src)}
      aria-label={`Look closer: ${alt}`}
      className={`group/zoom w-full cursor-zoom-in text-left ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100"
      >
        Look closer
      </span>
    </button>
  );
}
