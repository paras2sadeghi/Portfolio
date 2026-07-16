import { references, stats } from "@/lib/content";
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section id="about" className="px-6 py-4 md:px-10 md:py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        <Reveal className="rounded-3xl bg-surface p-6 md:p-7">
          <div className="mb-6 text-xl font-semibold">W.</div>
          <h3 className="text-base font-semibold">Design Toolkit</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Figma, FigJam, and Adobe Creative Suite, paired with Claude
            Design and Google Stitch to move from idea to interface fast.
          </p>
        </Reveal>

        <Reveal
          delay={0.06}
          className="flex flex-col justify-between rounded-3xl bg-ink p-6 text-white md:p-7"
        >
          <div>
            <p className="text-3xl font-serif leading-none text-white/40">
              &ldquo;
            </p>
            <p className="mt-3 text-lg font-medium leading-snug">
              References available on request from past collaborators at
              Flash Pharmacy.
            </p>
          </div>
          <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
            {references.map((ref) => (
              <div key={ref.name} className="text-sm">
                <p className="font-medium">{ref.name}</p>
                <p className="text-white/50">
                  {ref.title}, {ref.company}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="rounded-3xl border border-line p-6 md:p-7">
          <div className="space-y-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: stat.dot }}
                />
                <p className="text-sm">
                  <span className="font-semibold">{stat.value}</span>{" "}
                  <span className="text-muted">{stat.label}</span>
                </p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-accent-green px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Let&apos;s work together
          </a>
        </Reveal>
      </div>
    </section>
  );
}
