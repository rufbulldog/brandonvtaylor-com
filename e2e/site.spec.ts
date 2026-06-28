import { test, expect } from "@playwright/test";

test.describe("Homepage nav links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("About link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "About" });
    await expect(link).toHaveAttribute("href", "/#about");
  });

  test("Experience link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Experience" });
    await expect(link).toHaveAttribute("href", "/#experience");
  });

  test("Projects link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Projects" });
    await expect(link).toHaveAttribute("href", "/#projects");
  });

  test("Testimonials link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Testimonials" });
    await expect(link).toHaveAttribute("href", "/#testimonials");
  });

  test("Education link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Education" });
    await expect(link).toHaveAttribute("href", "/#education");
  });

  test("Resume nav link goes to /resume", async ({ page }) => {
    const link = page.locator("nav a", { hasText: /resume/i });
    await expect(link).toHaveAttribute("href", "/resume");
  });
});

test.describe("Homepage hero buttons", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("View resume button links to /resume", async ({ page }) => {
    const btn = page.locator(".hero-cta a", { hasText: /view resume/i });
    await expect(btn).toHaveAttribute("href", "/resume");
  });

  test("LinkedIn button is an external link", async ({ page }) => {
    const btn = page.locator(".hero-cta a", { hasText: /linkedin/i });
    const href = await btn.getAttribute("href");
    expect(href).toMatch(/^https?:\/\//);
  });

  test("GitHub button is an external link", async ({ page }) => {
    const btn = page.locator(".hero-cta a", { hasText: /github/i });
    const href = await btn.getAttribute("href");
    expect(href).toMatch(/^https?:\/\//);
  });

  test("See projects button links to #projects", async ({ page }) => {
    const btn = page.locator(".hero-cta a", { hasText: /see projects/i });
    await expect(btn).toHaveAttribute("href", "#projects");
  });
});

test.describe("Resume page (/resume)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resume");
  });

  test("page loads successfully", async ({ page }) => {
    await expect(page).toHaveURL("/resume");
  });

  test("Download PDF button exists", async ({ page }) => {
    const btn = page.locator(".resume-actions a", { hasText: /download pdf/i });
    await expect(btn).toBeVisible();
  });

  test("Back to site link goes to /", async ({ page }) => {
    const link = page.locator(".resume-actions a", { hasText: /back to site/i });
    await expect(link).toHaveAttribute("href", "/");
  });

  test("LinkedIn link is external", async ({ page }) => {
    const link = page.locator(".resume-actions a", { hasText: /linkedin/i });
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^https?:\/\//);
  });
});

test.describe("Projects carousel arrows", () => {
  test("prev and next arrow buttons exist with correct aria-labels", async ({ page }) => {
    await page.goto("/");
    const prev = page.locator('button[aria-label="Previous screenshot"]').first();
    const next = page.locator('button[aria-label="Next screenshot"]').first();
    await expect(prev).toBeVisible();
    await expect(next).toBeVisible();
  });
});
