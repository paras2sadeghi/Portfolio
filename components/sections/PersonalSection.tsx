import Image from "next/image";
import Link from "next/link";

/**
 * "A little more personal": a short, human beat between the work and the
 * contact. In the same 1200px container as Selected work, on plain white: a small
 * label row, then the statement and a link to About on the left and one
 * editorial photograph on the right. The statement uses the intro's pairing
 * (serif, second line in pink italics) so the two read as one voice.
 */
export default function PersonalSection() {
  return (
    <section
      aria-labelledby="personal-title"
      className="relative bg-white px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-[0.18em] text-muted md:text-[11px]">
          <p>03 / A little more personal</p>
          <p>Creative practice</p>
        </div>

        <div className="mt-8 grid items-center gap-8 md:mt-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2
              id="personal-title"
              className="font-serif text-[clamp(2.75rem,10vw,3.5rem)] font-normal leading-[1] tracking-[-0.02em] md:text-[clamp(3rem,5vw,4.75rem)]"
            >
              <span className="block">I make things.</span>
              <span className="block italic text-[#DB2777]">
                Even when nobody asks.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-snug text-foreground/70">
              Designer by profession. Curious about pretty much everything.
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-base font-medium"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#DB2777] group-focus-visible:border-[#DB2777]">
                A little about me
              </span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Portrait photo, cropped near-square around the face. */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-foreground/[0.04] md:aspect-[5/4]">
            <Image
              src="/images/home/personal.webp"
              alt="Parastoo on a sunny terrace, resting her chin on her hand"
              fill
              unoptimized={process.env.NODE_ENV !== "production"}
              sizes="(max-width: 768px) 92vw, 560px"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
