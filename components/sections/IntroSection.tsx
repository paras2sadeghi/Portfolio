import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { homeIntro } from "@/lib/content";

/**
 * The home page's statement, as its own static section between the hero and
 * the latest work: the headline and one line on the left, and the round
 * "More about me" button on the right, level with the headline. Deliberately
 * has no scroll animation, so the copy can never end up hidden by a trigger
 * measuring a stale page height.
 */
export default function IntroSection() {
  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="relative bg-background px-6 pb-2 pt-14 md:px-10 md:pb-4 md:pt-20"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
        <div>
          {/* One sentence, so it is set large and balanced across its lines. */}
          <h2 className="max-w-[18ch] text-balance font-display text-[11vw] font-medium leading-[0.98] tracking-[-0.045em] md:max-w-[20ch] md:text-[5.6vw]">
            {homeIntro.lines.join(" ")}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-snug text-foreground/75 md:mt-8">
            {homeIntro.aside}
          </p>
        </div>

        <RoundFillLink href={homeIntro.ctaHref}>{homeIntro.ctaLabel}</RoundFillLink>
      </div>
    </section>
  );
}
