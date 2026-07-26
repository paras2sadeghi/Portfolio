import Link from "next/link";
import { caseStudyList } from "@/lib/caseStudies";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

function ProjectCard({ study, delay }) {
  const { slug, name, card } = study;
  return (
    <Reveal delay={delay}>
      <Link
        href={`/work/${slug}`}
        className="group block overflow-hidden rounded-3xl border border-line/60 bg-surface transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]"
      >
        <div className="relative h-56 overflow-hidden md:h-64">
          <div
            className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            style={{ background: card.gradient }}
          />
          <div className="relative flex h-full flex-col justify-between p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-white/75">
              {card.category}
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="mt-1 max-w-[85%] text-sm text-white/85">
                {card.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 p-4">
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-background px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-foreground">
            View
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <TextReveal
            as="h2"
            text="Featured work"
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {caseStudyList.map((study, i) => (
            <ProjectCard key={study.slug} study={study} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
