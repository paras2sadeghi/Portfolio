import Image from "next/image";
import Link from "next/link";
import ProjectStrip from "@/components/sections/ProjectStrip";
import SelectedWorkMotion from "@/components/sections/SelectedWorkMotion";
import {
  conceptProjects,
  getProject,
  shippedProjects,
  workHref,
} from "@/lib/projects";
import { categoryLine, posterFor, shortCategory } from "@/lib/posters";

/**
 * Selected work, directly under the intro. Modern Swiss editorial: a
 * centred 1200px container, square-cornered posters with 12px gutters on
 * pure white, and the posters carry all the colour.
 *
 * - Featured grid: Flash Pharmacy as the large left tile, Flash Longevity
 *   and Safes Family stacked on the right, each with its name and outcome.
 * - "More to explore": every project in a slow looping strip (ProjectStrip).
 *
 * The grid and every card are plain links, so crawlers and agents get the
 * full list.
 */

// Chosen for hiring: real, shipped work first. Flash Pharmacy (lead
// designer, launching), Flash Longevity (designed and built, live) and Safes
// Family (shipped on iOS and Android).
const FEATURED = ["flash-pharmacy", "flash-longevity", "safes-family"];

const unoptimized = process.env.NODE_ENV !== "production";

type Project = NonNullable<ReturnType<typeof getProject>>;

export default function SelectedWork() {
  const featured = FEATURED.map(getProject).filter(Boolean) as Project[];
  if (featured.length < FEATURED.length) return null;
  const [lead, top, bottom] = featured;

  const all = [...shippedProjects, ...conceptProjects];
  const years = all.map((p) => Number(p.year)).filter(Boolean);
  const range = `${Math.min(...years)} — ${Math.max(...years)}`;

  const cards = all.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: shortCategory(p.discipline),
    href: workHref(p.slug),
    poster: posterFor(p),
  }));

  return (
    <section
      id="work"
      aria-labelledby="selected-title"
      className="relative bg-white pt-20 md:pt-28"
    >
      <SelectedWorkMotion>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex items-baseline justify-between gap-6 pb-5">
            <div className="flex items-baseline gap-6 md:gap-10">
              <span className="text-xs tabular-nums text-muted">02</span>
              <h2
                id="selected-title"
                className="font-display text-3xl font-normal tracking-[-0.02em] md:text-[2.5rem]"
              >
                Selected work.
              </h2>
            </div>
            <p className="text-xs tabular-nums text-muted">{range}</p>
          </div>
          {/* The heading rule, drawn in by SelectedWorkMotion. */}
          <div data-sw-rule className="h-px bg-foreground/15" />

          {/* Lead tile on the left spans the two stacked tiles on the right;
              its poster grows to their combined height. */}
          <div className="mt-8 grid gap-x-3 gap-y-8 md:mt-10 lg:grid-cols-[3fr_2fr] lg:grid-rows-2 lg:gap-y-5">
            <Feature project={lead} className="lg:row-span-2" fill priority />
            <Feature project={top} />
            <Feature project={bottom} />
          </div>
        </div>
      </SelectedWorkMotion>

      <ProjectStrip cards={cards} />
    </section>
  );
}

function Feature({
  project,
  className = "",
  fill = false,
  priority = false,
}: {
  project: Project;
  className?: string;
  /** Let the poster grow to the tile's height (the lead tile on desktop). */
  fill?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={workHref(project.slug)}
      data-sw-tile
      className={`group flex flex-col ${className}`}
    >
      <div
        data-sw-frame
        className={`relative w-full overflow-hidden bg-foreground/[0.04] ${
          fill ? "aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={posterFor(project)}
          alt={`${project.name}: ${project.card?.subtitle ?? "product poster"}`}
          fill
          priority={priority}
          unoptimized={unoptimized}
          sizes={fill ? "(max-width: 1024px) 92vw, 720px" : "(max-width: 1024px) 92vw, 480px"}
          data-sw-img
          className="object-cover"
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-medium tracking-tight md:text-lg">
            {project.name}
          </h3>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-muted">
            {categoryLine(project.discipline)}
          </p>
          {/* The outcome a hiring manager looks for: role and whether it
              shipped. */}
          {project.card?.contribution && (
            <p className="mt-1.5 text-sm text-foreground/70">
              {project.card.contribution}
            </p>
          )}
        </div>
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-[background-color,border-color,color] duration-300 group-hover:border-[#DB2777] group-hover:bg-[#DB2777] group-hover:text-white group-focus-visible:border-[#DB2777] group-focus-visible:bg-[#DB2777] group-focus-visible:text-white"
        >
          {/* The arrow nudges up and right on hover. */}
          <svg
            className="transition-transform duration-300 ease-out group-hover:-translate-y-px group-hover:translate-x-px"
            width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
