import { SITE_URL } from "@/lib/content";

// Everything is public and meant to be read, by search engines and by AI
// crawlers or assistants alike, so there are no per-bot restrictions.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
