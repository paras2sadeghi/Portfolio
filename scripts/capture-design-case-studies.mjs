/**
 * Exports portfolio imagery from the original static case-study designs.
 * Run from Portfolio: node scripts/capture-design-case-studies.mjs
 */
import fs from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";
import { chromium } from "playwright";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.resolve(scriptDir, "../../design-case-studies");
const outputDir = path.resolve(scriptDir, "../public/images/work/case-studies");

const designs = [
  ["roobinium", "roobinium.html"],
  ["huddle", "huddle.html"],
  ["transit", "transit.html"],
  ["wavelength", "wavelength.html"],
  ["fang-rung", "fangrung.html"],
  ["bloom", "bloom.html"],
];

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ||
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });

for (const [slug, filename] of designs) {
  const source = path.join(sourceDir, filename);
  if (!fs.existsSync(source)) {
    console.warn(`Skipped missing source: ${source}`);
    continue;
  }

  await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(outputDir, `${slug}-hero.png`),
    fullPage: false,
  });
  await page.evaluate(() => window.scrollTo(0, Math.min(900, document.body.scrollHeight)));
  await page.waitForTimeout(350);
  await page.screenshot({
    path: path.join(outputDir, `${slug}-detail.png`),
    fullPage: false,
  });
  console.log(`Exported ${slug} hero and detail`);
}

await browser.close();
