import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/work/ProjectCaseStudy";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Parastoo Sadeghi`,
    description: project.caseStudy.summary,
  };
}

export default async function WorkProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
