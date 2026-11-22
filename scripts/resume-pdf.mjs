// Prints the built /resume-pdf page to public/Brandon-Taylor-Resume.pdf.
// Run via `npm run resume:pdf` (builds first), then commit the PDF.
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const page_ = pathToFileURL(path.join(root, "dist/resume-pdf/index.html")).href;
const out = path.join(root, "public/Brandon-Taylor-Resume.pdf");

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(page_, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: out,
    format: "Letter",
    preferCSSPageSize: true,
    printBackground: true,
  });
  console.log(`wrote ${path.relative(root, out)}`);
} finally {
  await browser.close();
}
