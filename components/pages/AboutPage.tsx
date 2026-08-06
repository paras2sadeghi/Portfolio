"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/animations/MagneticButton";
import AboutVisualPanel from "@/components/sections/AboutVisualPanel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  aboutPage,
  aboutStory,
  experience,
  faqs,
  profile,
  services,
  stats,
} from "@/lib/content";
import { GSAP_EASE } from "@/utils/motion";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-foreground/12">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-medium tracking-tight md:text-xl">
          {question}
        </span>
        <span
          aria-hidden
          className={`mt-1 shrink-0 text-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const [activeService, setActiveService] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const page = pageRef.current;
    if (!page) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-about-page-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: GSAP_EASE,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, page);

    return () => context.revert();
  }, [reduced]);

  return (
    <main ref={pageRef} className="bg-background text-foreground">
      {/* Hero — inspired by dennissnellenberg.com/about */}
      <section className="px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Home
          </Link>

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <h1
              data-about-page-reveal
              className="max-w-[14ch] font-display text-[12vw] font-medium leading-[0.88] tracking-[-0.05em] md:text-[6.5vw]"
            >
              {aboutPage.headline}
            </h1>
            <MagneticButton
              href="#about-contact"
              strength={0.35}
              radius={100}
              className="group mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-foreground/15 text-xl transition-colors hover:bg-foreground hover:text-background md:h-16 md:w-16"
            >
              ↗
            </MagneticButton>
          </div>

          <p
            data-about-page-reveal
            className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:mt-14 md:text-xl"
          >
            {aboutPage.lead}
          </p>

          <p
            data-about-page-reveal
            className="mt-8 text-sm uppercase tracking-[0.22em] text-muted"
          >
            Always exploring
          </p>
          <div
            data-about-page-reveal
            className="mt-4 overflow-hidden border-y border-foreground/12 py-4"
          >
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
              {[0, 1].map((copy) => (
                <span
                  key={copy}
                  aria-hidden={copy === 1}
                  className="font-display text-2xl font-medium tracking-tight text-foreground/80 md:text-3xl"
                >
                  {aboutPage.exploring.map((item) => (
                    <span key={`${copy}-${item}`} className="mx-5">
                      {item}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-foreground/12 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2
            data-about-page-reveal
            className="mb-12 font-display text-4xl font-medium tracking-[-0.04em] md:text-5xl"
          >
            {aboutPage.servicesTitle}
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => {
              const active = activeService === index;
              return (
                <button
                  key={service.id}
                  type="button"
                  data-about-page-reveal
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-[border-color,background-color] duration-500 md:p-8 ${
                    active
                      ? "border-foreground/20 bg-foreground text-background"
                      : "border-foreground/12 bg-surface/40 hover:border-foreground/18"
                  }`}
                >
                  <span
                    className={`text-xs uppercase tracking-[0.2em] ${active ? "text-background/60" : "text-muted"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed transition-[max-height,opacity] duration-500 md:text-base ${
                      active
                        ? "max-h-40 opacity-80"
                        : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-70"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="mt-8 flex gap-2">
                    {service.swatches.map((color) => (
                      <span
                        key={color}
                        className="h-2 w-8 rounded-full"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story + visual */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
          <AboutVisualPanel reduced={reduced} />
          <div className="flex flex-col gap-8 md:gap-10 md:pt-6">
            {aboutStory.map((paragraph, i) => (
              <p
                key={i}
                data-about-page-reveal
                className={
                  i === 0
                    ? "text-2xl font-medium leading-[1.35] tracking-tight md:text-[1.75rem]"
                    : "max-w-xl text-base leading-relaxed text-muted md:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="border-y border-foreground/12 bg-ink px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <h2
            data-about-page-reveal
            className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl"
          >
            {aboutPage.spotlight.title}
          </h2>
          <p
            data-about-page-reveal
            className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {aboutPage.spotlight.body}
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2
            data-about-page-reveal
            className="mb-12 text-xs uppercase tracking-[0.22em] text-muted"
          >
            Experience
          </h2>
          <div className="border-t border-foreground/12">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.org}`}
                data-about-page-reveal
                className="group grid gap-4 border-b border-foreground/12 py-8 transition-colors hover:bg-surface/50 md:grid-cols-[6rem_1fr_2fr] md:items-start md:gap-10 md:py-10"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                </div>
                <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-foreground/12 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} data-about-page-reveal>
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: stat.dot }}
                />
                <span className="font-display text-5xl font-medium tracking-tight md:text-6xl">
                  {stat.value}
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2
            data-about-page-reveal
            className="mb-10 font-display text-4xl font-medium tracking-[-0.04em]"
          >
            Questions
          </h2>
          <div data-about-page-reveal>
            {faqs.slice(0, 5).map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="about-contact"
        className="bg-ink px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>
          <h2 className="font-display text-[14vw] font-medium leading-[0.85] tracking-[-0.06em] md:text-[7vw]">
            Let&apos;s work
            <br />
            together
          </h2>
          <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-center md:justify-between">
            <MagneticButton
              href={`mailto:${profile.email}`}
              strength={0.38}
              radius={120}
              className="inline-flex w-fit rounded-full bg-white px-8 py-5 text-base font-medium text-ink"
            >
              Start a conversation
            </MagneticButton>
            <div className="flex flex-col gap-1 text-sm text-white/55">
              <a href={`mailto:${profile.email}`} className="hover:text-white">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="hover:text-white">
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
