import Image from "next/image";
import Link from "next/link";
import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { getProject, workHref } from "@/lib/projects";

/**
 * The featured slot directly under the hero: one project given the whole
 * stage, in the spirit of an artist profile's "latest release".
 *
 * It uses the site's own language, the same as the moving strip that follows
 * it: plain white, mockups floating with no box around them, a display-font
 * name beside a small uppercase category, thin rules, no shadows and no
 * colour of its own. The main block is the old carousel slide (image, then
 * caption with the round Case study button); below it, the four parts of the
 * platform as real screens.
 *
 * Plain server-rendered HTML and links, no scroll animation: it reads at a
 * glance and is fully visible to crawlers and agents.
 */

const FEATURED_SLUG = "flash-pharmacy";

// The four parts of the platform as the case study describes them, each with
// a real phone screen from it.
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
      aria-label="Featured work"
      className="relative overflow-hidden bg-background px-6 pb-8 pt-16 md:px-10 md:pb-12 md:pt-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-baseline justify-between gap-6 border-b border-foreground/15 pb-5 text-[11px] uppercase tracking-[0.18em] text-muted">
          <p className="whitespace-nowrap">Latest work</p>
          <p className="hidden whitespace-nowrap sm:block">Selected work / 2026</p>
        </div>

        {/* The feature: the old carousel slide, given the whole width. */}
        <div className="mt-10 md:mt-14">
          <Link
            href={href}
            aria-label={`${featured.name} case study`}
            className="group relative mx-auto block aspect-[16/9] max-h-[62vh] w-full"
          >
            <Image
              src={featured.thumbnail}
              alt={`${featured.name} on desktop and phone`}
              fill
              unoptimized={unoptimized}
              sizes="(max-width: 768px) 92vw, 80vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </Link>

          <div className="mt-6 flex items-start justify-between gap-8 md:mt-10">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                {featured.discipline} · {featured.year}
              </p>
              <h2 className="mt-2 font-display text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-[5vw]">
                {featured.name}
              </h2>
              <p className="mt-4 max-w-xl text-base text-foreground/70 md:text-lg">
                {featured.card.subtitle}
              </p>
              <p className="mt-1.5 text-sm font-medium text-foreground/80">
                {featured.card.contribution}
              </p>
            </div>
            <RoundFillLink href={href} size="sm">
              Case study
            </RoundFillLink>
          </div>
        </div>

        {/* Inside the platform: part of the same feature, directly under its
            caption (no separate header, rule or gap). */}
        <div className="mt-10 md:mt-14">
          <h3 className="text-[11px] font-normal uppercase tracking-[0.18em] text-muted">
            Inside the platform
            <span className="hidden sm:inline"> · Four connected experiences</span>
          </h3>

          {/* Phones and tablets: a swipeable row. Desktop (1024px and up): four across. */}
          <ul className="-mx-6 mt-5 flex snap-x snap-mandatory scroll-pl-6 gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:scroll-pl-10 md:px-10 lg:mx-0 lg:scroll-pl-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {PARTS.map((part, i) => (
              <li
                key={part.label}
                className="w-[70%] shrink-0 snap-start sm:w-[44%] lg:w-auto lg:shrink"
              >
                <Link href={href} className="group mx-auto block max-w-[280px]">
                  {/* Every screen is a phone screenshot with the same tall
                      proportions (about 9:19.5), so the frame is that exact
                      shape and the whole screen shows, uncropped. */}
                  <div className="relative aspect-[530/1147] overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
                    <Image
                      src={part.src}
                      alt={part.alt}
                      fill
                      unoptimized={unoptimized}
                      sizes="(max-width: 768px) 70vw, 280px"
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                      {part.label}
                    </span>
                    <span className="text-[11px] tabular-nums uppercase tracking-[0.16em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
