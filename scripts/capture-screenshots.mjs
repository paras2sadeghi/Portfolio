/**
 * Capture live site screenshots into public/images/work/captures/
 * Run: npx playwright install chromium && node scripts/capture-screenshots.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/work/captures");

const targets = [
  {
    url: "https://longevity-pk75.vercel.app/",
    file: "flash-longevity-live.png",
    slug: "flash-longevity",
  },
  {
    url: "https://www.safes.so/",
    file: "safes-live.png",
    slug: "safes-family",
  },
];

async function main() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.error(
      "Install Playwright first: npm install -D playwright && npx playwright install chromium"
    );
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const t of targets) {
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(2000);
      const dest = path.join(outDir, t.file);
      await page.screenshot({ path: dest, fullPage: false });
      console.log("Saved", dest, "for", t.slug);
    } catch (e) {
      console.warn("Failed", t.url, e.message);
    }
  }

  await browser.close();
}

main();
