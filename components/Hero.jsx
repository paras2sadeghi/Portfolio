"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { hero, profile, stats } from "@/lib/content";
import Reveal from "./Reveal";
import ScaleIn from "./ScaleIn";
import TextReveal from "./TextReveal";
import GlitchText from "./GlitchText";
import { EASE_SOFT } from "@/lib/motion";

const StarfieldScene = dynamic(() => import("./StarfieldScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08080b] px-6 pb-20 pt-14 text-white md:px-10 md:pb-28 md:pt-18">
      <StarfieldScene className="pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 50% 0%, rgba(109,74,255,0.16), transparent 65%), radial-gradient(ellipse 700px 500px at 100% 100%, rgba(47,169,138,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 160px 40px rgba(0,0,0,0.85)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal delay={0.02}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            {hero.badge}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-12">
          <div>
            <TextReveal
              as="h1"
              text={hero.headline}
              className="text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-[4.2rem]"
              delay={0.1}
              stagger={0.035}
              duration={1}
            />

            <Reveal delay={0.55} className="mt-7 max-w-lg">
              <p className="text-[15px] leading-relaxed text-white/60 md:text-base">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={0.68} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                Email me
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors hover:text-white"
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
                className="absolute -inset-3 rounded-[2.4rem] border border-white/15"
                style={{ transform: "rotate(-3deg)" }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
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
          className="mt-16 grid grid-cols-3 gap-6 border-t border-white/12 pt-8 md:mt-20 md:gap-10 md:pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: s.dot }}
                  aria-hidden
                />
                <span className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {s.value}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-white/55 md:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <Reveal delay={1.1} className="mt-14 flex justify-center md:mt-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/50">
            <span className="h-px w-8 bg-white/25" aria-hidden />
            <GlitchText text="Scroll to explore" />
            <span className="h-px w-8 bg-white/25" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
