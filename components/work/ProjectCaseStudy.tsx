"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/animations/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getAdjacentProject, workHref } from "@/lib/projects";
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
  caseStudy: {
    headline: string;
    summary: string;
    meta: ProjectMeta[];
    gallery: GalleryImage[];
    sections: CaseStudySection[];
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

  return (
    <article ref={rootRef} className="bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
        <Link
          href="/work"
          data-cs-reveal
          className="mb-10 inline-flex text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All work
        </Link>

        <header className="mb-14 md:mb-20">
          <p
            data-cs-reveal
            className="mb-4 text-xs uppercase tracking-[0.2em] text-muted"
          >
            {project.discipline} · {project.year}
          </p>
          <h1
            data-cs-reveal
            className="max-w-[16ch] font-display text-[12vw] font-medium leading-[0.88] tracking-[-0.05em] md:text-[6.5vw]"
          >
            {project.name}
          </h1>
          <p
            data-cs-reveal
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {cs.summary}
          </p>

          <div
            data-cs-reveal
            className="mt-10 grid gap-6 border-t border-foreground/12 pt-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {cs.meta.map((m) => (
              <div key={m.label}>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {m.label}
                </p>
                <p className="mt-2 text-sm font-medium md:text-base">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {project.liveUrl && (
            <div data-cs-reveal className="mt-10">
              <MagneticButton
                href={project.liveUrl}
                external
                strength={0.35}
                radius={120}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/14 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                {project.liveLabel ?? "View live site"}
                <span aria-hidden>↗</span>
              </MagneticButton>
            </div>
          )}
        </header>

        <div
          data-cs-reveal
          className="relative mb-16 aspect-[16/10] overflow-hidden rounded-2xl bg-surface md:mb-24"
        >
          <Image
            src={project.heroImage}
            alt={`${project.name} product interface mockup`}
            fill
            unoptimized={process.env.NODE_ENV !== "production"}
            className="object-cover object-center"
            sizes="(max-width: 1600px) 100vw, 1600px"
            priority
          />
        </div>

        {cs.sections.map((section, i) => (
          <section
            key={section.title}
            data-cs-reveal
            className="mb-16 border-t border-foreground/12 pt-12 md:mb-20 md:pt-16"
          >
            <div className="mb-8 flex items-baseline gap-4">
              <span className="text-xs font-medium text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                {section.title}
              </h2>
            </div>
            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
              {section.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        <nav
          data-cs-reveal
          className="flex flex-col gap-6 border-t border-foreground/12 pt-12 sm:flex-row sm:justify-between"
        >
          {prev ? (
            <Link
              href={workHref(prev.slug)}
              className="group text-sm text-muted transition-colors hover:text-foreground"
            >
              <span className="block text-xs uppercase tracking-[0.16em]">
                Previous
              </span>
              <span className="mt-1 inline-flex items-center gap-2 font-display text-xl font-medium text-foreground">
                ← {prev.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={workHref(next.slug)}
              className="group text-right text-sm text-muted transition-colors hover:text-foreground sm:ml-auto"
            >
              <span className="block text-xs uppercase tracking-[0.16em]">
                Next
              </span>
              <span className="mt-1 inline-flex items-center gap-2 font-display text-xl font-medium text-foreground">
                {next.name} →
              </span>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
}
