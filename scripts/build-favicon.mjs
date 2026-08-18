import sharp from "sharp";
import { readFileSync } from "node:fs";

const svg = readFileSync("public/brand/mark.svg");

const targets = [
  { file: "public/brand/mark-64.png", size: 64 },
  { file: "public/brand/mark-128.png", size: 128 },
  { file: "public/favicon-16x16.png", size: 16 },
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/apple-touch-icon.png", size: 180 },
];

for (const { file, size } of targets) {
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(file);
  console.log("wrote", file);
}

// Multi-size .ico for app/favicon.ico
const ico32 = await sharp(svg, { density: 384 })
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
const { default: pngToIco } = await import("png-to-ico").catch(() => ({ default: null }));
if (pngToIco) {
  const buf = await pngToIco([ico32]);
  const { writeFileSync } = await import("node:fs");
  writeFileSync("app/favicon.ico", buf);
  console.log("wrote app/favicon.ico");
} else {
  console.log("png-to-ico not installed, skipping .ico (PNG favicons are sufficient for modern browsers)");
}
