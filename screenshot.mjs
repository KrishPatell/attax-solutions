import { chromium } from "@playwright/test";

const BASE = "http://localhost:5173";

// iPhone 14 Pro viewport
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 3 };
// Desktop viewport
const DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 1 };

const routes = {
  home:    "/",
  about:   "/about",
  services: "/services",
  process: "/our-process",
  clarity: "/clarity",
  contact: "/contact",
  resources: "/resources",
  attax:   "/attax",
};

async function screenshot(page, name, viewport) {
  const label = viewport.width < 800 ? "mobile" : "desktop";
  const path = `screenshots/${name}-${label}.png`;
  await page.setViewportSize(viewport);
  await page.goto(`${BASE}${routes[name] ?? name}`, { waitUntil: "networkidle" });
  // Scroll through entire page to trigger all whileInView animations
  await page.evaluate(async () => {
    await new Promise(resolve => {
      const totalHeight = document.body.scrollHeight;
      let scrolled = 0;
      const step = 400;
      const interval = setInterval(() => {
        window.scrollBy(0, step);
        scrolled += step;
        if (scrolled >= totalHeight) {
          clearInterval(interval);
          resolve();
        }
      }, 60);
    });
  });
  await page.waitForTimeout(600); // let final animations settle
  await page.screenshot({ path, fullPage: true });
  console.log(`  ✓ ${path}`);
  return path;
}

const target = process.argv[2] ?? "about";
const mode   = process.argv[3] ?? "mobile"; // mobile | desktop | both

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page    = await context.newPage();

  // ensure output dir exists
  const { mkdirSync } = await import("fs");
  mkdirSync("screenshots", { recursive: true });

  if (mode === "both") {
    await screenshot(page, target, MOBILE);
    await screenshot(page, target, DESKTOP);
  } else if (mode === "desktop") {
    await screenshot(page, target, DESKTOP);
  } else {
    await screenshot(page, target, MOBILE);
  }

  await browser.close();
})();
