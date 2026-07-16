import { workflow } from "@/lib/content";
import Reveal from "./Reveal";

export default function Workflow() {
  return (
    <section className="mx-6 my-16 rounded-3xl bg-ink px-6 py-16 text-white md:mx-10 md:my-24 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-sm text-white/50">How it works</p>
          <h2 className="max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            <span className="font-semibold">
              A simple and efficient process to bring your product vision to
              life.
            </span>{" "}
            <span className="text-white/60">
              From kickoff to launch, every step is designed for clarity and
              impact.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10">
          {workflow.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-baseline md:gap-8">
                <span className="text-sm text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold md:w-56">
                  {step.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
