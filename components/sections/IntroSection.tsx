import Link from "next/link";
import IntroMotion from "@/components/sections/IntroMotion";
import { homeIntro } from "@/lib/content";

/**
 * The home page's statement, between the hero and Selected work, laid out on
 * a 12-column grid inside the page's 1200px column (20px gutters):
 *
 * - the headline in a serif across seven columns, its second line in pink
 *   italics;
 * - the paragraph and the About link in columns 8 to 12, on plain white.
 *
 * IntroMotion adds a one-time entrance: each headline line slides up out of
 * its mask, then the paragraph and link fade up.
 */
export default function IntroSection() {
  const [first, second] = homeIntro.lines;

  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="relative overflow-hidden bg-background px-6 pt-20 md:px-10 md:pt-28"
    >
      <IntroMotion>
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-12 gap-x-5">
          <h2 className="col-span-12 font-serif text-[clamp(3.25rem,13vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.02em] md:text-[clamp(4.5rem,8vw,6.75rem)] lg:col-span-7 lg:text-[clamp(4rem,6.4vw,6.25rem)]">
            {/* Each line is its own mask. The padding keeps descenders and the
                italic overhang inside it; the negative margin cancels the
                padding so the line spacing is unchanged. */}
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em] pr-[0.1em]">
              <span data-intro-line className="block">
                {first}
              </span>
            </span>
            {second && (
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em] pr-[0.1em]">
                <span data-intro-line className="block italic text-[#DB2777]">
                  {second}
                </span>
              </span>
            )}
          </h2>

          {/* Under the headline on phones and tablets, beside it from 1024px. */}
          <div className="col-span-12 mt-8 max-w-[26rem] md:col-span-8 lg:col-start-8 lg:col-span-5 lg:mt-0 lg:self-end lg:pb-3">
            <p data-intro-fade className="text-lg leading-[1.45] text-foreground/80 md:text-xl">
              {homeIntro.aside}
            </p>
            <Link
              data-intro-fade
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
      </IntroMotion>
    </section>
  );
}
