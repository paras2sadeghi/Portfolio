/**
 * Capture the Flash Pharmacy site (ecom, SaaS, online pharmacy, telemedicine)
 * for its portfolio case study.
 *
 * Crawls every same-site link it can find from the start URL (including hash
 * routes), then for each distinct page saves desktop and phone screenshots and
 * the page's visible copy into public/images/work/flash-ecom/.
 *
 * It only follows links; it never clicks buttons or submits forms.
 *
 * Run (with the Flash site already running locally):
 *   npm install
 *   npx playwright install chromium
 *   node scripts/capture-flash.mjs                 # defaults to http://localhost:5173/
 *   node scripts/capture-flash.mjs http://localhost:5173/ 60   # custom start URL / page limit
 */
import fs from "fs";
import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(scriptDir, "../public/images/work/flash-ecom");
const START = process.argv[2] || "http://localhost:5173/";
const MAX_PAGES = Number(process.argv[3] || 40);
const origin = new URL(START).origin;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function nameFor(url) {
  const u = new URL(url);
  const raw = `${u.pathname}${u.hash}`.replace(/^\/+|\/+$/g, "");
  const slug = raw
    .replace(/[#?=&/]+/g, "-")
    .replace(/[^a-z0-9-]+/gi, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return slug || "home";
}

// Normalise and keep only links that stay on this site.
function keep(href) {
  try {
    const u = new URL(href, START);
    if (u.origin !== origin) return null;
    if (/\.(png|jpe?g|svg|webp|gif|pdf|mp4|zip)$/i.test(u.pathname)) return null;
    if (u.hash === "#" || u.hash === "") u.hash = "";
    return u.toString();
  } catch {
    return null;
  }
}

// Scroll through the page so scroll-triggered reveals have run.
async function settle(page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await sleep(1200);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = await page.evaluate(() => window.innerHeight * 0.7);
  for (let y = 0; y < Math.min(height, 20000); y += step) {
    await page.mouse.wheel(0, step);
    await sleep(250);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(900);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();

  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const desktopFull = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const phone = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  const page = await desktop.newPage();
  try {
    await page.goto(START, { waitUntil: "domcontentloaded", timeout: 15000 });
  } catch {
    console.error(`Couldn't open ${START}. Start the Flash site first (usually "npm run dev" in its folder).`);
    process.exit(1);
  }

  const queue = [keep(START)];
  const seenUrls = new Set(queue);
  const seenContent = new Set();
  const notes = [];

  while (queue.length && notes.length < MAX_PAGES) {
    const url = queue.shift();
    console.log(`→ ${url}`);
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
      // Hash routers sometimes need a reload to switch views.
      if (new URL(url).hash) await page.reload({ waitUntil: "domcontentloaded" });
    } catch (e) {
      console.warn(`  skipped (${e.message.split("\n")[0]})`);
      continue;
    }
    await settle(page);

    // Queue every same-site link on this page.
    const hrefs = await page.$$eval("a[href]", (as) => as.map((a) => a.href));
    for (const h of hrefs) {
      const k = keep(h);
      if (k && !seenUrls.has(k)) {
        seenUrls.add(k);
        queue.push(k);
      }
    }

    // Skip pages whose content is identical to one already captured (e.g. an
    // in-page anchor link that doesn't change the view).
    const info = await page.evaluate(() => {
      const text = (sel) =>
        [...document.querySelectorAll(sel)]
          .map((e) => e.innerText.trim().replace(/\s+/g, " "))
          .filter((t) => t && t.length < 200);
      return {
        title: document.title,
        headings: text("h1, h2, h3").slice(0, 40),
        buttons: [...new Set(text("button, [role=button], a.btn, a[class*=button]"))].slice(0, 40),
        nav: [...new Set(text("nav a, header a"))].slice(0, 30),
        body: document.body.innerText.slice(0, 4000),
        height: document.documentElement.scrollHeight,
      };
    });
    const sig = createHash("sha1").update(info.body).digest("hex");
    if (seenContent.has(sig)) {
      console.log("  same content as an earlier page, skipped");
      continue;
    }
    seenContent.add(sig);

    let name = nameFor(url);
    while (notes.some((n) => n.name === name)) name += "-2";

    await page.screenshot({ path: path.join(outDir, `${name}.jpg`), type: "jpeg", quality: 85 });

    const full = await desktopFull.newPage();
    await full.goto(url, { waitUntil: "domcontentloaded" });
    await settle(full);
    await full.screenshot({
      path: path.join(outDir, `${name}-full.jpg`),
      type: "jpeg",
      quality: 80,
      fullPage: info.height < 16000,
    });
    await full.close();

    const mob = await phone.newPage();
    await mob.goto(url, { waitUntil: "domcontentloaded" });
    await settle(mob);
    await mob.screenshot({ path: path.join(outDir, `mobile-${name}.jpg`), type: "jpeg", quality: 85 });
    await mob.close();

    notes.push({
      name,
      url,
      title: info.title,
      headings: info.headings,
      buttons: info.buttons,
      nav: info.nav,
      excerpt: info.body.slice(0, 1500),
    });
    console.log(`  saved ${name}.jpg, ${name}-full.jpg, mobile-${name}.jpg`);
  }

  fs.writeFileSync(path.join(outDir, "pages.json"), JSON.stringify(notes, null, 2));
  await browser.close();

  const bytes = fs
    .readdirSync(outDir)
    .reduce((sum, f) => sum + fs.statSync(path.join(outDir, f)).size, 0);
  console.log(
    `\nDone: ${notes.length} pages, ${(bytes / 1e6).toFixed(1)} MB in public/images/work/flash-ecom/`
  );
  console.log(
    'Next: git add public/images/work/flash-ecom && git commit -m "Add Flash site captures" && git push'
  );
}

main();
