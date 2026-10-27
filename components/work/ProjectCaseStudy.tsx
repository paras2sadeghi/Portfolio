"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactSection from "@/components/sections/ContactSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CaseStudyBlocks, { type CaseStudyBlock } from "@/components/work/CaseStudyBlocks";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getAdjacentProject, workHref } from "@/lib/projects";
import { posterFor } from "@/lib/posters";
import { GSAP_EASE } from "@/utils/motion";

interface ProjectMeta {
  label: string;
  value: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface CaseStudySection {
  title: string;
  body: string[];
}

interface Project {
  slug: string;
  name: string;
  year: string;
  discipline: string;
  liveUrl?: string | null;
  liveLabel?: string | null;
  heroImage: string;
  tileBg: string;
  caseStudy: {
    headline: string;
    summary: string;
    meta: ProjectMeta[];
    gallery: GalleryImage[];
    sections: CaseStudySection[];
    /** Long-form layout; when present it replaces the plain sections. */
    blocks?: CaseStudyBlock[];
  };
}

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const { prev, next } = getAdjacentProject(project.slug);
  const cs = project.caseStudy;

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-cs-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: GSAP_EASE,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  // Rendered twice: beside the title on desktop, under the cover on phones.
  const details = (
    <>
      <dl className="grid grid-cols-2 gap-x-6 md:grid-cols-1">
        {cs.meta.map((m) => (
          <div
            key={m.label}
            className="border-t border-foreground/12 py-3.5 md:flex md:items-baseline md:justify-between md:gap-6"
          >
            <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
              {m.label}
            </dt>
            <dd className="mt-1 text-sm font-medium md:mt-0 md:text-right md:text-base">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
      {project.liveUrl && (
        // The same quiet underlined link as "About me" on the home page.
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex items-center gap-2 text-base font-medium"
        >
          <span className="border-b border-foreground/30 pb-0.5 transition-colors duration-300 group-hover:border-[#DB2777] group-focus-visible:border-[#DB2777]">
            {project.liveLabel ?? "Live site"}
          </span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </a>
      )}
    </>
  );

  return (
    <article ref={rootRef} className="bg-background text-foreground">
      <ScrollProgress />
      <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-28">
        <Link
          href="/work"
          data-cs-reveal
          className="mb-6 inline-flex text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All work
        </Link>

        <header className="mb-8 grid gap-8 md:mb-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <p
              data-cs-reveal
              className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#DB2777]"
            >
              {project.discipline} · {project.year}
            </p>
            <h1
              data-cs-reveal
              className="max-w-[16ch] font-serif text-[clamp(2.75rem,11vw,3.5rem)] font-normal leading-[1] tracking-[-0.02em] md:text-[clamp(3.25rem,5vw,4.75rem)]"
            >
              {project.name}
              <span className="text-[#DB2777]">.</span>
            </h1>
            <p
              data-cs-reveal
              className="mt-5 max-w-3xl text-lg leading-[1.5] text-foreground/80 md:text-xl"
            >
              {cs.summary}
            </p>
          </div>

          {/* Phones show the cover first; the details follow it below. */}
          <div data-cs-reveal className="hidden md:col-span-4 md:block md:self-end">
            {details}
          </div>
        </header>

        {/* The cover is the project's poster scene (4:3), so the frame is
            too and nothing is cropped. The width is capped to the screen
            height left under the header, so the whole cover shows when the
            page opens, but never below 36rem wide on large screens. */}
        <div
          data-cs-reveal
          className="relative mx-auto mb-16 aspect-[4/3] w-full overflow-hidden bg-[#F7F3EE] md:mb-24 md:max-w-[max(36rem,calc((100svh-28rem)*4/3))]"
        >
          <Image
            src={posterFor(project)}
            alt={`${project.name} product interface mockup`}
            fill
            unoptimized={process.env.NODE_ENV !== "production"}
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        <div className="-mt-8 mb-16 md:hidden">
          {details}
        </div>

        {cs.blocks?.length ? (
          <div className="mb-24 md:mb-40">
            <CaseStudyBlocks blocks={cs.blocks} />
          </div>
        ) : cs.gallery?.length ? (
          // Case studies without long-form blocks show their screens as a
          // simple gallery. Each image keeps its own proportions, uncropped,
          // and tall phone screens are capped so they fit on one screen.
          <section data-cs-reveal className="mb-16 md:mb-24" aria-label="Screens">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#DB2777]">
              Screens
            </p>
            <div className="grid items-start gap-3 md:grid-cols-2">
              {cs.gallery.map((img, i) => (
                <figure
                  key={img.src}
                  className={`flex justify-center overflow-hidden bg-[#F7F3EE] ${
                    i === 0 && cs.gallery.length % 2 === 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1600}
                    height={1000}
                    unoptimized={process.env.NODE_ENV !== "production"}
                    sizes="(max-width: 768px) 92vw, 50vw"
                    className="h-auto max-h-[80svh] w-auto max-w-full object-contain"
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {cs.sections.map((section, i) => (
          <section
            key={section.title}
            data-cs-reveal
            className="grid gap-6 border-t border-foreground/10 py-12 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <div className="flex items-baseline gap-4 md:col-span-5">
              <span className="text-sm tabular-nums text-[#DB2777]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.01em] md:text-[2.5rem]">
                {section.title}
              </h2>
            </div>
            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground/70 md:col-span-7 md:text-lg">
              {section.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Previous and next as poster cards, like the work grid. */}
        <nav
          data-cs-reveal
          aria-label="More projects"
          className="grid gap-x-3 gap-y-10 border-t border-foreground/10 pt-12 md:grid-cols-2 md:pt-16"
        >
          {[
            { p: prev, label: "Previous" },
            { p: next, label: "Next" },
          ].map(({ p, label }) =>
            p ? (
              <Link key={label} href={workHref(p.slug)} className="group block">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#DB2777]">
                  {label}
                </p>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F7F3EE]">
                  <Image
                    src={posterFor(p)}
                    alt=""
                    fill
                    unoptimized={process.env.NODE_ENV !== "production"}
                    sizes="(max-width: 768px) 92vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 font-serif text-2xl">{p.name}</p>
              </Link>
            ) : (
              <span key={label} />
            )
          )}
        </nav>
      </div>

      <ContactSection />
    </article>
  );
}
