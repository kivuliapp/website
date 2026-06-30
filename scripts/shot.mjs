// Visual QA helper: screenshot a route in light/dark at a given width.
// Usage: node scripts/shot.mjs <path> <theme> <width> <out>
import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [, , routePath = "/", theme = "light", width = "1440", out = "shot.png"] =
  process.argv;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setViewport({
  width: Number(width),
  height: 900,
  deviceScaleFactor: 2,
});

const url = process.env.BASE_URL || "http://localhost:3100";
// seed theme choice before the app boots so next-themes picks it up (no flash)
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.evaluate((t) => localStorage.setItem("theme", t), theme);
await page.goto(url + routePath, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 600));

await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("saved", out);
