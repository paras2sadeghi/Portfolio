import Image from "next/image";
import Link from "next/link";
import Magnolia from "@/components/ui/Magnolia";
import { getProject, workHref } from "@/lib/projects";

/**
 * My latest work, directly under the hero, laid out like the "Latest
 * release" row on an artist profile: the mockup on the left, the details on
 * the right (year and discipline, name, one line, role, the case study
 * link). Nothing else, so the strip of other work follows straight on.
 *
 * Built in the site's own language (the same as the moving strip after it):
 * plain white, the page's own gutters, no boxes, shadows or colour of its
 * own. Plain server-rendered HTML and links, so it reads at a glance and is
 * fully visible to crawlers and agents.
 */

// Also read by WorkMarquee, which leaves this project out of the strip.
export const FEATURED_SLUG = "flash-pharmacy";

const unoptimized = process.env.NODE_ENV !== "production";

export default function FeaturedWork() {
  const featured = getProject(FEATURED_SLUG);
  if (!featured) return null;
  const href = workHref(featured.slug);

  return (
    <section
      id="work"
      aria-labelledby="featured-title"
      className="relative overflow-x-clip bg-background px-6 pb-4 pt-10 md:px-10 md:pb-6 md:pt-14"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section title: the same display style as "Selected work" on /work. */}
        <div className="flex items-baseline justify-between gap-6 border-b border-foreground/15 pb-5 md:pb-6">
          <h2
            id="featured-title"
            className="font-display text-2xl font-medium tracking-[-0.03em] md:text-3xl"
          >
            Latest work
          </h2>
          <p className="text-sm tabular-nums text-muted">01</p>
        </div>

        {/* The latest-release row: mockup on the left, details on the
            right, centred against each other. Stacks below 1024px. */}
        <div className="mt-8 grid items-center gap-8 md:mt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Link
            href={href}
            aria-label={`${featured.name} case study`}
            tabIndex={-1}
            className="group relative block aspect-[1542/851] w-full"
          >
            <Image
              src={featured.thumbnail}
              alt={`${featured.name} on desktop and phone`}
              fill
              unoptimized={unoptimized}
              sizes="(max-width: 1024px) 92vw, 55vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </Link>

          <div className="relative isolate min-w-0">
            {/* The brand flower, large and soft pink, turning very slowly
                behind the details like a watermark. */}
            <Magnolia className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square h-[105%] -translate-x-1/2 lg:h-[150%] -translate-y-1/2 animate-[spin_90s_linear_infinite] text-[#EC4899]/10 motion-reduce:animate-none lg:left-[60%]" />
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
              <Magnolia className="h-3.5 w-3.5 text-[#EC4899]" />
              {featured.year} · {featured.discipline}
            </p>
            <h3 className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl xl:text-7xl">
              {featured.name}
            </h3>
            <p className="mt-4 max-w-md text-base text-foreground/70 md:text-lg">
              {featured.card.subtitle}
            </p>
            {featured.card.contribution && (
              <p className="mt-2 text-sm font-medium text-foreground/80">
                {featured.card.contribution}
              </p>
            )}
            <Link
              href={href}
              className="mt-8 inline-block border-b border-foreground/30 pb-1 text-base font-medium transition-colors duration-300 hover:border-[#EC4899] focus-visible:border-[#EC4899] focus-visible:outline-offset-4"
            >
              View case study ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
