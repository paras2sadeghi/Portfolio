"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { hero, profile, stats } from "@/lib/content";
import Reveal from "./Reveal";
import ScaleIn from "./ScaleIn";
import TextReveal from "./TextReveal";
import { EASE_SOFT } from "@/lib/motion";

function AmbientField() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(109,74,255,0.45), rgba(109,74,255,0) 75%)",
        }}
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(47,169,138,0.4), rgba(47,169,138,0) 75%)",
        }}
        animate={reduce ? undefined : { x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
      <AmbientField />

      <div className="relative mx-auto max-w-6xl">
        <Reveal delay={0.02}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            {hero.badge}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-12">
          <div>
            <TextReveal
              as="h1"
              text={hero.headline}
              className="text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl md:text-[4.2rem]"
              delay={0.1}
              stagger={0.035}
              duration={1}
            />

            <Reveal delay={0.55} className="mt-7 max-w-lg">
              <p className="text-[15px] leading-relaxed text-muted md:text-base">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={0.68} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                Email me
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                See the work
                <span aria-hidden>↓</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-[280px] md:ml-auto md:max-w-[320px]">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2.4rem] border border-line/70"
                style={{ transform: "rotate(-3deg)" }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.4)]">
                <ScaleIn className="absolute inset-0" from={1.16} duration={1.7}>
                  <Image
                    src="/images/portrait-library.jpg"
                    alt={profile.name}
                    fill
                    priority
                    sizes="(min-width: 768px) 20rem, 16rem"
                    className="object-cover object-[50%_20%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </ScaleIn>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE_SOFT }}
          className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 md:mt-20 md:gap-10 md:pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: s.dot }}
                  aria-hidden
                />
                <span className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {s.value}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-muted md:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
