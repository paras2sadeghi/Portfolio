import Image from "next/image";
import Link from "next/link";
import { getProject, workHref } from "@/lib/projects";

/**
 * Selected work, directly under the intro: an editorial grid of full-bleed
 * product scenes. The latest project (Flash Pharmacy) takes the large tile on
 * the left of the first row with two stacked beside it; the second row is two
 * equal tiles. Each tile is one link: the scene, the name, the discipline and
 * a round arrow.
 *
 * Plain server-rendered HTML and links, so it reads at a glance and is fully
 * visible to crawlers and agents.
 */

// Order matters: the first is the large tile, then the two stacked beside
// it, then the bottom row. Also read by WorkMarquee, which leaves these out.
export const SELECTED_SLUGS = [
  "flash-pharmacy",
  "transit",
  "huddle",
  "wavelength",
  "fang-rung",
];

const unoptimized = process.env.NODE_ENV !== "production";

type Project = NonNullable<ReturnType<typeof getProject>>;

export default function SelectedWork() {
  const projects = SELECTED_SLUGS.map(getProject).filter(Boolean) as Project[];
  if (projects.length < SELECTED_SLUGS.length) return null;
  const [lead, sideA, sideB, ...bottom] = projects;

  const years = projects.map((p) => Number(p.year)).filter(Boolean);
  const range = `${Math.min(...years, 2023)} — ${Math.max(...years)}`;

  return (
    <section
      id="work"
      aria-labelledby="selected-title"
      className="relative bg-background px-6 pb-6 pt-14 md:px-10 md:pb-10 md:pt-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-baseline justify-between gap-6 border-b border-foreground/15 pb-5 md:pb-6">
          <h2
            id="selected-title"
            className="font-display text-2xl font-medium uppercase tracking-[-0.01em] md:text-4xl"
          >
            Selected work
          </h2>
          <p className="text-sm tabular-nums text-muted">{range}</p>
        </div>

        {/* First row: the lead tile spans both rows of the stacked pair, so
            its scene grows to match their combined height. */}
        <div className="mt-8 grid gap-x-4 gap-y-10 md:mt-10 lg:grid-cols-[1.75fr_1fr] lg:grid-rows-2 lg:gap-y-6">
          <Tile project={lead} className="lg:row-span-2" fill priority />
          <Tile project={sideA} />
          <Tile project={sideB} />
        </div>

        <div className="mt-10 grid gap-x-4 gap-y-10 md:grid-cols-2 lg:mt-12">
          {bottom.map((p) => (
            <Tile key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  project,
  className = "",
  fill = false,
  priority = false,
}: {
  project: Project;
  className?: string;
  /** Let the scene grow to the tile's height (the lead tile on desktop). */
  fill?: boolean;
  priority?: boolean;
}) {
  const src = project.heroImage ?? project.thumbnail;
  const label = String(project.discipline ?? "").split(" · ").join(" / ");

  return (
    <Link
      href={workHref(project.slug)}
      className={`group flex flex-col ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-foreground/[0.04] aspect-[16/10] ${
          fill ? "lg:aspect-auto lg:min-h-0 lg:flex-1" : ""
        }`}
      >
        <Image
          src={src}
          alt={`${project.name}: ${project.card?.subtitle ?? "product scene"}`}
          fill
          priority={priority}
          unoptimized={unoptimized}
          sizes={fill ? "(max-width: 1024px) 92vw, 62vw" : "(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 36vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            {label}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
