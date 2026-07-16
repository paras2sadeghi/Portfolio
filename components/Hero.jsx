import Image from "next/image";
import { hero, profile } from "@/lib/content";
import Reveal from "./Reveal";
import ScaleIn from "./ScaleIn";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,247,235,0.95) 0%, rgba(255,238,214,0.45) 45%, rgba(255,238,214,0) 75%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        <Reveal>
          <div className="group relative mx-auto h-72 w-64 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] md:h-[26rem] md:w-[22rem]">
            <ScaleIn className="absolute inset-0" from={1.14} duration={1.6}>
              <Image
                src="/images/portrait.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 768px) 22rem, 16rem"
                className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
            </ScaleIn>
          </div>
        </Reveal>

        <div className="mt-10 grid w-full grid-cols-1 items-end gap-6 md:mt-14 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="md:max-w-xl">
            <Reveal delay={0.05}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                {hero.badge}
              </div>
            </Reveal>
            <TextReveal
              as="h1"
              text={hero.headline}
              className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.75rem]"
              delay={0.12}
              stagger={0.04}
              duration={0.95}
            />
            <Reveal delay={0.42}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                Email Me
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.5} className="md:pb-2">
            <p className="max-w-sm text-sm leading-relaxed text-muted md:ml-auto md:text-right">
              {hero.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
