import Image from "next/image";
import { hero, profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #FFD7B0 0%, #FFB37B 35%, rgba(255,179,123,0) 75%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        <Reveal>
          <div
            className="relative mx-auto h-72 w-64 overflow-hidden md:h-[26rem] md:w-[22rem]"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 62% 68% at 50% 38%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 62% 68% at 50% 38%, black 55%, transparent 100%)",
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 22rem, 16rem"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid w-full grid-cols-1 items-end gap-6 md:mt-14 md:grid-cols-[auto_1fr] md:gap-10">
          <Reveal delay={0.05} className="md:max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              {hero.badge}
            </div>
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.75rem]">
              {hero.headline}
            </h1>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Email Me
            </a>
          </Reveal>

          <Reveal delay={0.1} className="md:pb-2">
            <p className="max-w-sm text-sm leading-relaxed text-muted md:ml-auto md:text-right">
              {hero.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
