import Link from "next/link";
import { WORK_PORTFOLIO_COUNT, workPortfolio, workHref } from "@/lib/projects";

export const metadata = {
  title: "Work — Parastoo Sadeghi",
  description: "Selected product design work by Parastoo Sadeghi.",
};

export default function WorkArchivePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Home
            </Link>
            <h1 className="font-display text-[18vw] font-medium leading-[0.82] tracking-[-0.065em] md:text-[9vw]">
              Work
            </h1>
          </div>
          <span className="hidden pb-3 text-xs uppercase tracking-[0.2em] text-muted md:block">
            {WORK_PORTFOLIO_COUNT} projects
          </span>
        </div>

        <div className="border-b border-foreground/12">
          {workPortfolio.map((item, index) => (
            <Link
              key={item.slug}
              href={workHref(item.slug)}
              className="group grid border-t border-foreground/12 py-7 md:grid-cols-[5rem_1fr_auto] md:items-baseline md:gap-10 md:py-9"
            >
              <span className="mb-3 text-xs uppercase tracking-[0.2em] text-muted md:mb-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.045em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 md:text-[5.8vw]">
                  {item.name}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:hidden">
                  {item.card.subtitle}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between gap-8 text-xs uppercase tracking-[0.18em] text-muted md:mt-0 md:min-w-72">
                <span>{item.discipline}</span>
                <span>{item.year}</span>
                <span
                  aria-hidden
                  className="text-lg leading-none opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
