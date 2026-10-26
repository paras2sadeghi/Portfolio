import Image from "next/image";
import Link from "next/link";
import { getProject, workHref } from "@/lib/projects";

/**
 * Selected work, directly under the intro: a curated grid that leads with
 * shipped products. The latest project (Flash Pharmacy) takes the large tile
 * with one beside it; the second row is three equal tiles.
 *
 * In the site's own language: each mockup floats on the white page, shown
 * whole (no boxes, no crop), and the flowers stay a hero and intro motif.
 * Each caption is the project name and one outcome line, taken from the
 * project's own contribution note, instead of a category label.
 *
 * Plain server-rendered HTML and links, so it reads at a glance and is fully
 * visible to crawlers and agents.
 */

// Order matters: the first is the large tile, the second sits beside it,
// then the bottom row of three. Also read by WorkMarquee, which leaves these
// out.
export const SELECTED_SLUGS = [
  "flash-pharmacy",
  "safes-family",
  "roobinium",
  "flash-longevity",
  "transit",
];

const unoptimized = process.env.NODE_ENV !== "production";

type Project = NonNullable<ReturnType<typeof getProject>>;

export default function SelectedWork() {
  const projects = SELECTED_SLUGS.map(getProject).filter(Boolean) as Project[];
  if (projects.length < SELECTED_SLUGS.length) return null;
  const [lead, second, ...rest] = projects;

  const years = projects.map((p) => Number(p.year)).filter(Boolean);
  const range = `${Math.min(...years)} — ${Math.max(...years)}`;

  return (
    <section
      id="work"
      aria-labelledby="selected-title"
      className="relative bg-background px-6 pb-6 pt-14 md:px-10 md:pb-10 md:pt-20"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* The same serif voice as the hero name and the intro headline. */}
        <div className="flex items-baseline justify-between gap-6 border-b border-foreground/15 pb-5 md:pb-6">
          <h2
            id="selected-title"
            className="font-serif text-4xl font-normal tracking-[-0.02em] md:text-6xl"
          >
            Selected <span className="italic text-[#DB2777]">work</span>
          </h2>
          <p className="text-sm tabular-nums text-muted">{range}</p>
        </div>

        {/* First row: the lead and one more, bottom-aligned so both captions
            sit on one line. Second row: three equal tiles. */}
        <div className="mt-8 grid items-end gap-x-10 gap-y-12 md:mt-10 lg:grid-cols-[1.6fr_1fr]">
          <Tile project={lead} priority />
          <Tile project={second} />
        </div>

        <div className="mt-12 grid items-end gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-16">
          {rest.map((p) => (
            <Tile key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link href={workHref(project.slug)} className="group flex flex-col">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={project.thumbnail}
          alt={`${project.name}: ${project.card?.subtitle ?? "product mockup"}`}
          fill
          priority={priority}
          unoptimized={unoptimized}
          sizes={priority ? "(max-width: 1024px) 92vw, 58vw" : "(max-width: 768px) 92vw, 36vw"}
          className="object-contain transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-5">
        <h3 className="flex items-baseline gap-2 font-display text-xl font-medium tracking-tight md:text-2xl">
          {project.name}
          <span
            aria-hidden
            className="text-base text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#DB2777]"
          >
            ↗
          </span>
        </h3>
        {project.card?.contribution && (
          <p className="mt-1 text-sm text-muted">{project.card.contribution}</p>
        )}
      </div>
    </Link>
  );
}
