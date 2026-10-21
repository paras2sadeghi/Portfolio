import Link from "next/link";
import WorkList from "@/components/work/WorkList";
import {
  WORK_PORTFOLIO_COUNT,
  conceptProjects,
  shippedProjects,
} from "@/lib/projects";

export const metadata = {
  title: "Work · Parastoo Sadeghi",
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
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              A selection from ten products shipped across four companies, plus
              self-initiated explorations.
            </p>
          </div>
          <span className="hidden pb-3 text-xs uppercase tracking-[0.2em] text-muted md:block">
            {WORK_PORTFOLIO_COUNT} projects · {shippedProjects.length} selected ·{" "}
            {conceptProjects.length} explorations
          </span>
        </div>

        <WorkList />
      </div>
    </main>
  );
}
