/**
 * Project posters: the photographed product scenes (4:3, in
 * /images/work/scenes). Projects without a scene yet fall back to their
 * existing hero mockup, unchanged.
 */
const SCENES: Record<string, string> = {
  "flash-pharmacy": "/images/work/scenes/flash-pharmacy.webp",
  "flash-longevity": "/images/work/scenes/flash-longevity.webp",
  huddle: "/images/work/scenes/huddle.webp",
  transit: "/images/work/scenes/transit.webp",
  bloom: "/images/work/scenes/bloom.webp",
  wavelength: "/images/work/scenes/wavelength.webp",
  greengenie: "/images/work/scenes/greengenie.webp",
  "fang-rung": "/images/work/scenes/fang-rung.webp",
};

export function posterFor(project: { slug: string; heroImage?: string; thumbnail: string }) {
  return SCENES[project.slug] ?? project.heroImage ?? project.thumbnail;
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
