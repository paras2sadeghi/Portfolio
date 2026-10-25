import Link from "next/link";
import { homeIntro } from "@/lib/content";

/**
 * The home page's statement, as its own static section between the hero and
 * the featured work: one headline, then the line and an underlined link to
 * About directly beneath it, on the same left edge. Deliberately has no
 * scroll animation, so the copy can never end up hidden by a trigger
 * measuring a stale page height.
 */
export default function IntroSection() {
  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="relative bg-background px-6 pb-4 pt-20 md:px-10 md:pb-6 md:pt-28"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* One sentence, so it is set large and balanced across its lines. */}
        <h2 className="max-w-[18ch] text-balance font-display text-[11vw] font-medium leading-[0.98] tracking-[-0.045em] md:max-w-[20ch] md:text-[5.6vw]">
          {homeIntro.lines.join(" ")}
        </h2>

        {/* The line, with a plain underlined link to About beneath it. */}
        <div className="mt-10 md:mt-12">
          <p className="max-w-sm text-lg leading-snug text-foreground/75">
            {homeIntro.aside}
          </p>
          <Link
            href={homeIntro.ctaHref}
            className="mt-5 inline-block border-b border-foreground/30 pb-1 text-base font-medium transition-colors duration-300 hover:border-foreground focus-visible:border-foreground focus-visible:outline-offset-4"
          >
            {homeIntro.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
