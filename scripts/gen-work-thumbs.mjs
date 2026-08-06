import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { projects } from "../lib/projects.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/work");

const pairs = {
  roobinium: ["#ff7a2e", "#c22a1f"],
  "flash-longevity": ["#e8f4fc", "#7eb8e8"],
  "connected-health-pitch": ["#00d4a8", "#03070b"],
  "safes-family": ["#151f46", "#f8b400"],
  greengenie: ["#69b48c", "#2f6b4f"],
  transit: ["#ffffff", "#d81e05"],
  huddle: ["#3e63dd", "#0c0c0e"],
  wavelength: ["#ffb454", "#c2456b"],
  "fang-rung": ["#ffe14d", "#8b6bff"],
  bloom: ["#ffb3c6", "#c9a2ff"],
};

fs.mkdirSync(outDir, { recursive: true });

for (const item of projects) {
  if (item.slug === "connected-health-pitch") continue;
  const [a, b] = pairs[item.slug] || [item.tileBg, item.tileBg];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="400" viewBox="0 0 320 400" role="img" aria-label="${item.name} preview">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="320" height="400" fill="url(#g)"/>
</svg>
`;
  fs.writeFileSync(path.join(outDir, `${item.slug}-thumb.svg`), svg);
}

console.log("Wrote work tile thumbnails to", outDir);
