import { SITE_URL } from "@/lib/content";
import { projects, workHref } from "@/lib/projects";

export default function sitemap() {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/work", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      priority,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}${workHref(p.slug)}`,
      priority: 0.7,
    })),
  ];
}
