/**
 * Project posters: photographed product scenes (4:3, in /images/work/scenes),
 * all shot on one set (limestone plinth, Mediterranean daylight, a small
 * bougainvillea cameo). Projects without a scene yet fall back to their
 * existing hero mockup, unchanged.
 */
const SCENES: Record<string, string> = {
  "flash-pharmacy": "/images/work/scenes/flash-pharmacy.webp",
  "flash-longevity": "/images/work/scenes/flash-longevity.webp",
  "connected-health-pitch": "/images/work/scenes/connected-health.webp",
  "safes-family": "/images/work/scenes/safes-family.webp",
  roobinium: "/images/work/scenes/roobinium.webp",
  huddle: "/images/work/scenes/huddle.webp",
  transit: "/images/work/scenes/transit.webp",
  bloom: "/images/work/scenes/bloom.webp",
  wavelength: "/images/work/scenes/wavelength.webp",
  greengenie: "/images/work/scenes/greengenie.webp",
  "fang-rung": "/images/work/scenes/fang-rung.webp",
};

// Bump when scene files are replaced under the same names, so browsers and
// the image optimiser fetch the new files instead of cached old ones. Keep
// it in step with images.localPatterns in next.config.mjs.
const SCENES_VERSION = "3";

export function posterFor(project: {
  slug: string;
  heroImage?: string;
  thumbnail?: string;
}): string {
  const scene = SCENES[project.slug];
  if (scene) return `${scene}?v=${SCENES_VERSION}`;
  return project.heroImage ?? project.thumbnail ?? "";
}

/** "Concept · B2B SaaS" -> "Concept / B2B SaaS". */
export function categoryLine(discipline?: string) {
  return String(discipline ?? "").split(" · ").join(" / ");
}

/** "Concept · B2B SaaS" -> "B2B SaaS": the short label for strip cards. */
export function shortCategory(discipline?: string) {
  const parts = String(discipline ?? "").split(" · ");
  return parts[parts.length - 1] ?? "";
}
