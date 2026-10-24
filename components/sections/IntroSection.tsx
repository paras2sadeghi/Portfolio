import RoundFillLink from "@/components/ui/RoundFillMagneticLink";
import { homeIntro } from "@/lib/content";

/**
 * The home page's statement, as its own static section between the hero and
 * the work: the headline across the full width, then the paragraph with the
 * About circle underneath. Deliberately has no scroll animation, so the copy
 * can never end up hidden by a trigger measuring a stale page height.
 */
export default function IntroSection() {
  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="relative bg-background px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 md:gap-14">
        <h2 className="font-display text-[8vw] font-medium leading-[1.02] tracking-[-0.04em] md:text-[3.8vw]">
          {homeIntro.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            {homeIntro.aside}
          </p>
          <RoundFillLink href={homeIntro.ctaHref}>
            {homeIntro.ctaLabel}
          </RoundFillLink>
        </div>
      </div>
    </section>
  );
}
