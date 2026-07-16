import { projects } from "@/lib/content";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group overflow-hidden rounded-3xl border border-line/60 bg-surface transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]">
        <div className="relative h-56 overflow-hidden md:h-64">
          <div
            className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            style={{ background: project.gradient }}
          />
          <div className="relative flex h-full flex-col justify-between p-5">
            <div>
              <p className="text-xs font-medium text-white/70">
                {project.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {project.title}
              </h3>
            </div>
            <p className="max-w-[80%] text-sm text-white/85">
              {project.subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 p-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-background px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
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
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
