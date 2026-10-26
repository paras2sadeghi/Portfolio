import Link from "next/link";
import { homeIntro } from "@/lib/content";

/**
 * The home page's statement, between the hero and the latest work, laid out
 * on a 12-column grid inside a 1200px content width (20px gutters, 96px top
 * and bottom on desktop):
 *
 * - the headline in a serif across seven columns, its second line in pink
 *   italics;
 * - the paragraph and the About link in columns 8 to 12, on plain white.
 *
 * Deliberately has no scroll animation, so the copy can never end up hidden
 * by a trigger measuring a stale page height.
 */
export default function IntroSection() {
  const [first, second] = homeIntro.lines;

  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="relative overflow-hidden bg-background px-6 py-16 md:px-10 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-12 gap-x-5">
        <h2 className="col-span-12 font-serif text-[clamp(3.25rem,13vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.02em] md:text-[clamp(4.5rem,8vw,6.75rem)] lg:col-span-7 lg:text-[clamp(4rem,6.4vw,6.25rem)]">
          <span className="block">{first}</span>
          {second && (
            <span className="block italic text-[#DB2777]">{second}</span>
          )}
        </h2>

        {/* Under the headline on phones and tablets, beside it from 1024px. */}
        <div className="col-span-12 mt-8 max-w-[26rem] md:col-span-8 lg:col-start-8 lg:col-span-5 lg:mt-0 lg:self-end lg:pb-3">
          <p className="text-lg leading-[1.45] text-foreground/80 md:text-xl">
            {homeIntro.aside}
          </p>
          <Link
            href={homeIntro.ctaHref}
            className="group mt-8 inline-flex items-center gap-3 text-lg font-medium"
          >
            <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#DB2777] group-focus-visible:border-[#DB2777]">
              {homeIntro.ctaLabel}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
