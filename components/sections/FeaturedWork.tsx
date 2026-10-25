import Link from "next/link";
import FeaturedStory from "@/components/sections/FeaturedStory";
import { getProject, workHref } from "@/lib/projects";

/**
 * The featured slot directly under the hero: one project given the whole
 * stage, in the spirit of an artist profile's "latest release".
 *
 * Built in the site's own language (the same as the moving strip after it):
 * plain white, thin rules, no boxes, shadows or colour of its own. The caption
 * comes first (name, one line, the link, the facts), then the scroll story in
 * FeaturedStory: the laptop shrinks away and the four screens slide in.
 *
 * The caption and every link are plain server-rendered HTML, so the section
 * is fully readable by crawlers and agents, and without JavaScript or with
 * reduced motion it is simply a static stack.
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

        {/* Everything under the title shares the laptop mockup's width, so
            the caption starts at the laptop's left edge. The mockup is
            1542 x 851 with no transparent margin; capping the width at
            66vh x that ratio keeps it inside one screen on the pinned stage. */}
        <div className="mx-auto w-full max-w-[calc(66vh*1542/851)]">
          <div className="mt-10 md:mt-12">
            <h3 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] md:text-[5vw]">
              {featured.name}
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
              {featured.card.subtitle}
            </p>
            <Link
              href={href}
              className="mt-5 inline-block border-b border-foreground/30 pb-1 text-base font-medium transition-colors duration-300 hover:border-foreground focus-visible:border-foreground focus-visible:outline-offset-4"
            >
              View case study ↗
            </Link>
          </div>

          {/* Facts as one hairline row; each sizes to its content, so none wrap. */}
          <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-6 border-t border-foreground/15 pt-5 text-sm md:mt-12">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-1.5">{value}</dd>
              </div>
            ))}
          </dl>

          <FeaturedStory
            href={href}
            name={featured.name}
            mockup={featured.thumbnail}
            parts={PARTS}
          />
        </div>
      </div>
    </section>
  );
}
