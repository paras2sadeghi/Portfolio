"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, profile, stats } from "@/lib/content";
import Reveal from "./Reveal";
import ScaleIn from "./ScaleIn";
import TextReveal from "./TextReveal";
import { EASE_SOFT } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
      {/* Oversized name band — the editorial anchor of the page */}
      <Reveal>
        <div className="relative">
          <h1 className="whitespace-nowrap text-[15vw] font-semibold leading-[0.9] tracking-[-0.03em] text-foreground md:text-[11vw]">
            {profile.name}
          </h1>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
        <div className="order-2 md:order-1">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <span aria-hidden className="text-xl text-muted">
                ↘
              </span>
              <p className="text-lg font-medium tracking-tight md:text-xl">
                Product Designer
              </p>
            </div>
          </Reveal>

          <TextReveal
            as="p"
            text="Turning complex healthcare and SaaS workflows into interfaces people actually trust."
            className="mt-10 max-w-xl text-2xl font-medium leading-[1.3] tracking-tight text-foreground md:mt-14 md:text-[2rem]"
            delay={0.2}
            stagger={0.028}
            duration={0.95}
          />

          <Reveal delay={0.45} className="mt-8 max-w-sm">
            <p className="text-[15px] leading-relaxed text-muted">{hero.body}</p>
          </Reveal>

          <Reveal delay={0.55} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Let&apos;s talk
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

        <Reveal delay={0.18} className="order-1 md:order-2">
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
            <ScaleIn className="absolute inset-0" from={1.14} duration={1.7}>
              <Image
                src="/images/portrait-library.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 768px) 32rem, 100vw"
                className="object-cover object-[50%_20%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </ScaleIn>
          </div>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE_SOFT }}
        className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 md:mt-24 md:gap-10 md:pt-10"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: s.dot }}
                aria-hidden
              />
              <span className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                {s.value}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted md:text-sm">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
