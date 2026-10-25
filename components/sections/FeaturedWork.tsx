import Image from "next/image";
import Link from "next/link";
import { getProject, workHref } from "@/lib/projects";

/**
 * My latest work, directly under the hero, laid out like the "Latest
 * release" row on an artist profile: the mockup on the left, the details on
 * the right (year and discipline, name, one line, role, the case study
 * link), then the four parts of the platform in a small row beneath.
 *
 * Built in the site's own language (the same as the moving strip after it):
 * plain white, the page's own gutters, no boxes, shadows or colour of its
 * own. Plain server-rendered HTML and links, so it reads at a glance and is
 * fully visible to crawlers and agents.
 */

const FEATURED_SLUG = "flash-pharmacy";

// The four parts of the platform as the case study describes them, each with
// a real phone screen from it. All are the same tall phone proportions.
const PARTS = [
  {
    label: "Shop",
    src: "/images/work/flash-pharmacy/mobile-product.jpg",
    alt: "Flash Pharmacy on a phone: a product page with shade swatches and an add-to-bag button",
  },
  {
    label: "Online doctors",
    src: "/images/work/flash-pharmacy/mobile-book-doctor.jpg",
    alt: "Flash Pharmacy on a phone: booking a doctor with available time slots",
  },
  {
    label: "Prescriptions and refills",
    src: "/images/work/flash-pharmacy/mobile-ask-flash.jpg",
    alt: "The Ask Flash hub on a phone: book a doctor, upload a prescription, check a symptom, refill a medicine",
  },
  {
    label: "Longevity+",
    src: "/images/work/flash-longevity/pace-of-ageing.jpg",
    alt: "Flash Longevity+ on a phone: the Pace of ageing screen, showing an estimated biological age of 27.6 and a pace of 0.82 times, slower than expected",
  },
];

const unoptimized = process.env.NODE_ENV !== "production";

export default function FeaturedWork() {
  const featured = getProject(FEATURED_SLUG);
  if (!featured) return null;
  const href = workHref(featured.slug);

  return (
    <section
      id="work"
      aria-labelledby="featured-title"
      className="relative bg-background px-6 pb-4 pt-10 md:px-10 md:pb-6 md:pt-14"
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

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
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
              className="mt-8 inline-block border-b border-foreground/30 pb-1 text-base font-medium transition-colors duration-300 hover:border-foreground focus-visible:border-foreground focus-visible:outline-offset-4"
            >
              View case study ↗
            </Link>
          </div>
        </div>

        {/* Inside the platform: part of the same feature. */}
        <div className="mt-12 md:mt-14">
          <h3 className="text-xs font-normal uppercase tracking-[0.18em] text-muted">
            Inside the platform
          </h3>

          {/* Phones and tablets: a swipeable row. Desktop (1024px and up): a
              small row of four from the left edge. */}
          <ul className="-mx-6 mt-5 flex snap-x snap-mandatory scroll-pl-6 gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:scroll-pl-10 md:px-10 lg:mx-0 lg:gap-10 lg:overflow-visible lg:scroll-pl-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            {PARTS.map((part) => (
              <li
                key={part.label}
                className="w-[60%] shrink-0 snap-start sm:w-[36%] lg:w-[200px]"
              >
                <Link href={href} className="group block">
                  {/* Every screen is a phone screenshot with the same tall
                      proportions (about 9:19.5), so the frame is that exact
                      shape and the whole screen shows, uncropped. */}
                  <div className="relative aspect-[530/1147] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
                    <Image
                      src={part.src}
                      alt={part.alt}
                      fill
                      unoptimized={unoptimized}
                      sizes="(max-width: 768px) 60vw, 200px"
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 font-display text-base font-medium tracking-tight">
                    {part.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
