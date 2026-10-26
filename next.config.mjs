/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    // Next 16 only allows quality 75 by default; the hero photo asks for 90.
    qualities: [75, 90],
    // Local images: any path without a query string, plus the scene posters
    // with their cache-busting version (see lib/posters.ts).
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/images/work/scenes/**", search: "?v=3" },
    ],
  },
};

export default nextConfig;
