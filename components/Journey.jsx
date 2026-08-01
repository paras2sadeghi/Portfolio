"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { featuredWork } from "@/lib/caseStudies";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { EASE } from "@/lib/motion";

const milestones = [
  {
    era: "First app",
    title: "GreenGenie",
    body: "A plant-care app built to learn by shipping something real, not a tutorial project. This is where the habit of designing end to end started.",
    slug: null,
  },
  {
    era: "2022 · Sternx",
    title: "Safes Family",
    body: "A parental-control app that shipped to real users on iOS and Android: 16 interviews, 40+ screens, and a live App Store listing to show for it.",
    slug: "safes-family",
  },
  {
    era: "Sadax",
    title: "Roobinium",
    body: "An AI agent builder for crypto and DeFi tasks, designed to work equally well by voice or by text.",
    slug: "roobinium",
  },
  {
    era: "Now · Flash Pharmacy",
    title: "Lead Product Designer",
    body: "Currently leading product design for healthcare and SaaS platforms, turning complex clinical workflows into interfaces people can actually trust.",
    slug: null,
  },
];

const explorations = featuredWork.filter((s) =>
  ["transit", "huddle", "wavelength", "fang-rung", "bloom"].includes(s.slug)
);

function Milestone({ item, index }) {
  const hasLink = Boolean(item.slug);
  const Wrapper = hasLink ? Link : "div";
  const wrapperProps = hasLink ? { href: `/work/${item.slug}` } : {};

  return (
    <Reveal delay={0.05} className="relative pl-10 md:pl-14">
      <span
        aria-hidden
        className="absolute left-[3px] top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-accent-purple md:left-[7px]"
      />
      <p className="text-xs font-medium uppercase tracking-wide text-accent-purple">
        {item.era}
      </p>
      <Wrapper
        {...wrapperProps}
        className={`mt-2 block ${hasLink ? "group" : ""}`}
      >
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {item.title}
          {hasLink && (
            <span className="ml-2 inline-block text-muted transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          )}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          {item.body}
        </p>
      </Wrapper>
    </Reveal>
  );
}

function ExplorationCard({ study, delay }) {
  const { slug, name, card } = study;
  return (
    <Reveal delay={delay}>
      <Link href={`/work/${slug}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
          <div
            className="absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            style={{ background: card.gradient }}
          />
        </div>
        <h4 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          {name}
        </h4>
        <div className="mt-4 flex items-baseline justify-between gap-6 border-t border-line pt-4">
          <p className="text-sm text-muted">{card.subtitle}</p>
          <span className="shrink-0 text-sm text-muted">{card.category}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Journey() {
  const railRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="work" className="px-6 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex items-end justify-between md:mb-20">
          <TextReveal
            as="h2"
            text="How I got here"
            className="text-xl font-semibold tracking-tight md:text-2xl"
          />
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div ref={railRef} className="relative">
          <div
            aria-hidden
            className="absolute left-0 top-2 bottom-2 w-px bg-line md:left-1"
          />
          {!reduce && (
            <motion.div
              aria-hidden
              className="absolute left-0 top-2 w-px origin-top bg-accent-purple md:left-1"
              style={{ scaleY: lineScale, height: "calc(100% - 16px)" }}
            />
          )}

          <div className="flex flex-col gap-14 md:gap-20">
            {milestones.map((item, i) => (
              <Milestone item={item} index={i} key={item.title} />
            ))}
          </div>
        </div>

        <Reveal delay={0.05} className="mt-20 md:mt-28">
          <p className="text-xs font-medium uppercase tracking-wide text-accent-purple">
            2026 · Self-directed
          </p>
          <h3 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
            Five problems, five different design languages
          </h3>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Built to prove range on purpose: no shared template, no default look, each one
            in a visual language chosen for what the product actually is.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-28">
          {explorations.map((study, i) => (
            <ExplorationCard key={study.slug} study={study} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}
