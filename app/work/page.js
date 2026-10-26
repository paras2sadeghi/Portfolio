import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";
import { conceptProjects, shippedProjects, workHref } from "@/lib/projects";
import { posterFor, shortCategory } from "@/lib/posters";

export const metadata = {
  title: "Work · Parastoo Sadeghi",
  description:
    "Selected product design work by Parastoo Sadeghi: shipped products and self-initiated explorations.",
};

const unoptimized = process.env.NODE_ENV !== "production";

/**
 * The work index, in the home page's language: the 1200px column, a serif
 * title with the year range, and the project posters in a quiet two-column
 * grid, each with only its name and a short category. Shipped work first,
 * then explorations.
 */
export default function WorkArchivePage() {
  const all = [...shippedProjects, ...conceptProjects];
  const years = all.map((p) => Number(p.year)).filter(Boolean);
  const range = `${Math.min(...years)} — ${Math.max(...years)}`;

  return (
    <div className="bg-white text-foreground">
      <div className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-baseline justify-between gap-6 border-b border-foreground/15 pb-5">
            <h1 className="font-serif text-5xl font-normal tracking-[-0.02em] md:text-7xl">
              Work<span className="text-[#DB2777]">.</span>
            </h1>
            <p className="text-xs tabular-nums text-muted">{range}</p>
          </div>

          <Group title="Selected" projects={shippedProjects} first />
          <Group title="Explorations" projects={conceptProjects} />
        </div>
      </div>

      <ContactSection />
    </div>
  );
}

function Group({ title, projects, first = false }) {
  return (
    <section aria-label={title} className={first ? "mt-10 md:mt-12" : "mt-20 md:mt-28"}>
      <h2 className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#DB2777]">
        {title}{" "}
        <span className="text-muted">({String(projects.length).padStart(2, "0")})</span>
      </h2>
      <ul className="grid gap-x-3 gap-y-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link href={workHref(p.slug)} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.04]">
                <Image
                  src={posterFor(p)}
                  alt={`${p.name}: ${p.card?.subtitle ?? "product poster"}`}
                  fill
                  priority={first && i < 2}
                  unoptimized={unoptimized}
                  sizes="(max-width: 768px) 92vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-medium tracking-tight md:text-lg">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-muted">
                    {shortCategory(p.discipline)} · {p.year}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-[background-color,border-color,color] duration-300 group-hover:border-[#DB2777] group-hover:bg-[#DB2777] group-hover:text-white"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
