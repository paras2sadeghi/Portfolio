import Image from "next/image";
import Link from "next/link";
import { FEATURED_SLUG } from "@/components/sections/FeaturedWork";
import { conceptProjects, shippedProjects, workHref } from "@/lib/projects";

// Shipped work first, then the explorations, same order as /work. The latest
// work is already shown just above, so it is left out here.
const items = [...shippedProjects, ...conceptProjects].filter(
  (p) => p.slug !== FEATURED_SLUG
);

/**
 * A slow strip of every project, side by side, right under the hero: the
 * whole range at a glance, with no reading. Each tile is a real link to its
 * case study. It is plain server-rendered HTML (the motion is CSS), so
 * crawlers and agents get the full list as ordinary links, and the repeat
 * copy is hidden from assistive tech so nothing is announced twice.
 */
export default function WorkMarquee() {
  return (
    <section
      aria-label="Selected work"
      className="work-marquee relative overflow-hidden bg-background py-8 md:py-10"
    >
      <ul className="work-marquee-track flex w-max">
        {[0, 1].map((copy) =>
          items.map((p) => (
            <li
              key={`${copy}-${p.slug}`}
              aria-hidden={copy === 1 ? true : undefined}
              className="shrink-0 pr-8 md:pr-14"
            >
              <Link
                href={workHref(p.slug)}
                tabIndex={copy === 1 ? -1 : undefined}
                className="group block w-[250px] md:w-[360px]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.thumbnail}
                    alt={copy === 1 ? "" : `${p.name} mockup`}
                    fill
                    // The strip is always moving, so tiles still off-screen
                    // must already be loaded or they pop in at the edge. The
                    // repeat copy reuses the same files, so it can stay lazy.
                    loading={copy === 0 ? "eager" : "lazy"}
                    unoptimized={process.env.NODE_ENV !== "production"}
                    sizes="(max-width: 768px) 250px, 360px"
                    className="object-contain transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                    {p.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    {p.discipline}
                  </span>
                </p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
