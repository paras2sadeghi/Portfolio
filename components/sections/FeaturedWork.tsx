import Image from "next/image";
import Link from "next/link";
import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { getProject, workHref } from "@/lib/projects";

/**
 * The featured slot directly under the hero: one project given the whole
 * stage, in the spirit of an artist profile's "latest release".
 *
 * Built in the site's own language (the same as the moving strip after it):
 * plain white, thin rules, no boxes, shadows or colour of its own. To keep it
 * editorial rather than busy it uses only three kinds of text: the section
 * title (same display style as the "Selected work" heading on /work), the
 * project name, and one quiet body size. The caption sits on the same
 * four-column grid as the screens below it, so the facts line up exactly over
 * the last screen.
 *
 * Plain server-rendered HTML and links, no scroll animation: it reads at a
 * glance and is fully visible to crawlers and agents.
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

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function FeaturedWork() {
  const featured = getProject(FEATURED_SLUG);
  if (!featured) return null;
  const href = workHref(featured.slug);

  // "Lead designer · launching soon" -> role and status.
  const [role, status] = String(featured.card.contribution ?? "").split(" · ");
  const facts: [string, string][] = [
    ["Role", capitalise(role ?? "")],
    ["Status", capitalise(status ?? "")],
    ["Category", featured.discipline],
    ["Year", featured.year],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <section
      id="work"
      aria-labelledby="featured-title"
      className="relative overflow-hidden bg-background px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section title: the same display style as "Selected work" on /work. */}
        <div className="flex items-baseline justify-between gap-6 border-b border-foreground/15 pb-5 md:pb-6">
          <h2
            id="featured-title"
            className="font-display text-2xl font-medium tracking-[-0.03em] md:text-3xl"
          >
            Featured project
          </h2>
          <p className="text-sm tabular-nums text-muted">01</p>
        </div>

        {/* Everything under the title shares the mockup's exact width, so
            the name, facts and screens start at the laptop's left edge. The
            mockup is 1542 x 851 with no transparent margin; capping the
            width at 62vh x that ratio keeps it from getting too tall. */}
        <div className="mx-auto w-full max-w-[calc(62vh*1542/851)]">
          {/* The mockup, floating on the page. */}
          <Link
            href={href}
            aria-label={`${featured.name} case study`}
            className="group relative mt-10 block aspect-[1542/851] w-full md:mt-12"
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

          {/* Caption: name, then the description and the link as one group,
              all on the same left edge. */}
          <div className="mt-10 md:mt-12">
            <h3 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] md:text-[5vw]">
              {featured.name}
            </h3>
            <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
              <p className="max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
                {featured.card.subtitle}
              </p>
              <RoundFillLink href={href} size="sm">
                Case study
              </RoundFillLink>
            </div>
          </div>

          {/* Facts as one hairline row, on the same four columns as the
              screens below, so every edge lines up. */}
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-foreground/15 pt-5 text-sm md:mt-12 lg:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-1.5">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Inside the platform: part of the same feature. */}
          <div className="mt-14 md:mt-16">
            <h3 className="text-xs font-normal uppercase tracking-[0.18em] text-muted">
              Inside the platform
            </h3>

            {/* Phones and tablets: a swipeable row. Desktop (1024px and up): four across. */}
            <ul className="-mx-6 mt-6 flex snap-x snap-mandatory scroll-pl-6 gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:scroll-pl-10 md:px-10 lg:mx-0 lg:scroll-pl-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              {PARTS.map((part, i) => (
                <li
                  key={part.label}
                  className="w-[70%] shrink-0 snap-start sm:w-[44%] lg:w-auto lg:shrink"
                >
                  <Link href={href} className="group block">
                    {/* Every screen is a phone screenshot with the same tall
                        proportions (about 9:19.5), so the frame is that exact
                        shape and the whole screen shows, uncropped. */}
                    <div className="relative aspect-[530/1147] max-w-[280px] overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
                      <Image
                        src={part.src}
                        alt={part.alt}
                        fill
                        unoptimized={unoptimized}
                        sizes="(max-width: 768px) 70vw, 280px"
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="mt-4 flex max-w-[280px] items-baseline gap-3 text-sm">
                      <span className="tabular-nums text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{part.label}</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
