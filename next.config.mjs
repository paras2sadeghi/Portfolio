/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    // Next 16 only allows quality 75 by default; the hero photo asks for 90.
    qualities: [75, 90],
  },
};

export default nextConfig;
