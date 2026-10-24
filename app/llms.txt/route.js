import { SITE_URL, experience, profile } from "@/lib/content";
import { projects, workHref } from "@/lib/projects";

// A plain-text summary for AI assistants and agents (the llms.txt convention).
// Built from the same data as the pages, so it can't drift out of date.
export function GET() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> Product designer based in ${profile.location}. Currently Lead Product Designer at Flash Pharmacy. ${profile.availability}. Designs across healthcare, SaaS, AI products, mobile apps and games, and writes the front-end in React and TypeScript.`,
    "",
    "## Pages",
    `- [Home](${SITE_URL}/): overview and selected work`,
    `- [Work](${SITE_URL}/work): every project, shipped work first`,
    `- [About](${SITE_URL}/about): story, experience and how I work`,
    `- [Contact](${SITE_URL}/contact): email and links`,
    "",
    "## Experience",
    ...experience.map(
      (e) => `- ${e.year}: ${e.role}, ${e.org}. ${e.evidence ?? e.detail}`
    ),
    "",
    "## Work",
    ...projects.map(
      (p) =>
        `- [${p.name}](${SITE_URL}${workHref(p.slug)}): ${p.card.subtitle} (${p.discipline}, ${p.year})`
    ),
    "",
    "## Contact",
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
