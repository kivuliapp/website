import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const base = "http://localhost:3100";
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

// 1) Mobile menu open
{
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 780, deviceScaleFactor: 2 });
  await page.goto(base + "/", { waitUntil: "networkidle0" });
  await page.click('button[aria-label="Open menu"]');
  await wait(400);
  await page.screenshot({ path: "/tmp/mobile-menu.png" });
  await page.close();
}

// 2) Contact form validation errors
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
  await page.goto(base + "/contact", { waitUntil: "networkidle0" });
  await page.click('button[type="submit"]');
  await wait(300);
  await page.screenshot({ path: "/tmp/contact-errors.png" });
  // 3) Contact success
  await page.type("#name", "Ada");
  await page.type("#email", "ada@example.com");
  await page.type("#message", "Love the private beta, please add me.");
  await page.click('button[type="submit"]');
  await wait(800);
  await page.screenshot({ path: "/tmp/contact-success.png" });
  await page.close();
}

await browser.close();
console.log("qa done");
