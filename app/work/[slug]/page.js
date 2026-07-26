import { notFound } from "next/navigation";
import {
  caseStudies,
  caseStudyOrder,
  getCaseStudy,
} from "@/lib/caseStudies";
import { solutions } from "@/components/casestudy/solutions";
import CaseStudyShell from "@/components/casestudy/CaseStudyShell";

export function generateStaticParams() {
  return caseStudyOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) return {};
  return {
    title: `${data.name} — Parastoo Sadeghi`,
    description: data.hero.sub,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) notFound();

  const Solution = solutions[slug];

  const idx = caseStudyOrder.indexOf(slug);
  const nextSlug = caseStudyOrder[(idx + 1) % caseStudyOrder.length];
  const nextData = caseStudies[nextSlug];
  const next = nextData ? { slug: nextData.slug, name: nextData.name } : null;

  return <CaseStudyShell data={data} solution={<Solution />} next={next} />;
}
