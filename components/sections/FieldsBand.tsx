import { aboutPage } from "@/lib/content";

/**
 * A quiet moving line of the fields I work across, between the intro and
 * Selected work: small muted caps between thin rules, slow and moving the
 * opposite way to the hero name. Same list as "Always exploring" on About.
 * The first copy is real text for readers and crawlers; the repeat is hidden
 * from assistive tech.
 */
export default function FieldsBand() {
  return (
    <section aria-label="Fields I work across" className="bg-white px-6 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1200px] overflow-hidden border-y border-foreground/10 py-4">
        <div className="marquee-track fields-track flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-center text-[11px] uppercase tracking-[0.2em] text-muted"
            >
              {aboutPage.exploring.map((item) => (
                <li key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-6">{item}</span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-[#DB2777]" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
