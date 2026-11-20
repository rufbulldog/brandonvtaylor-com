import { test, expect } from "@playwright/test";

test.describe("All-on-one-page nav links (/all)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/all");
  });

  test("About link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "About" });
    await expect(link).toHaveAttribute("href", "/all#about");
  });

  test("Experience link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Experience" });
    await expect(link).toHaveAttribute("href", "/all#experience");
  });

  test("Projects link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Projects" });
    await expect(link).toHaveAttribute("href", "/all#projects");
  });

  test("Testimonials link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Testimonials" });
    await expect(link).toHaveAttribute("href", "/all#testimonials");
  });

  test("Education link has correct href", async ({ page }) => {
    const link = page.locator("nav a", { hasText: "Education" });
    await expect(link).toHaveAttribute("href", "/all#education");
  });

  test("Resume nav link goes to /resume", async ({ page }) => {
    const link = page.locator("nav a", { hasText: /resume/i });
    await expect(link).toHaveAttribute("href", "/resume");
  });
});

test.describe("All-on-one-page hero buttons (/all)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/all");
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
    await page.goto("/all");
    const prev = page.locator('button[aria-label="Previous screenshot"]').first();
    const next = page.locator('button[aria-label="Next screenshot"]').first();
    await expect(prev).toBeVisible();
    await expect(next).toBeVisible();
  });
});

test.describe("View chooser (/)", () => {
  const views = [
    ["Product", "/product"],
    ["Engineering", "/engineering"],
    ["Science", "/science"],
    ["Management", "/management"],
  ];

  test("offers a card for each view", async ({ page }) => {
    await page.goto("/");
    for (const [, href] of views) {
      await expect(page.locator(`.cards a[href="${href}"]`)).toBeVisible();
    }
  });

  test("links to the everything-on-one-page view", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href="/all"]').first()).toBeVisible();
  });

  test("offers to continue with the last view", async ({ page }) => {
    await page.goto("/science");
    await page.goto("/");
    const cont = page.locator(".continue a");
    await expect(cont).toBeVisible();
    await expect(cont).toHaveAttribute("href", "/science");
  });

  for (const [label, href] of views) {
    test(`${label} view loads and marks itself current`, async ({ page }) => {
      await page.goto(href);
      const current = page.locator('.vbar-views a[aria-current="page"]');
      await expect(current).toHaveText(label);
      await expect(page.locator("main h1").first()).toBeVisible();
    });
  }
});

test.describe("Engineering terminal", () => {
  test("runs a typed command", async ({ page }) => {
    await page.goto("/engineering");
    await page.locator("#term-input").fill("git log --career");
    await page.locator("#term-input").press("Enter");
    await expect(page.locator("#term-out")).toContainText("(HEAD)");
  });

  test("runs a command from a chip and clears", async ({ page }) => {
    await page.goto("/engineering");
    await page.locator('.chips button[data-cmd="aws stack family-retreat"]').click();
    await expect(page.locator("#term-out")).toContainText("Cognito");
    await page.locator('.chips button[data-cmd="clear"]').click();
    await expect(page.locator("#term-out .entry")).toHaveCount(0);
  });

  test("reports unknown commands", async ({ page }) => {
    await page.goto("/engineering");
    await page.locator("#term-input").fill("sudo rm");
    await page.locator("#term-input").press("Enter");
    await expect(page.locator("#term-out")).toContainText("command not found");
  });
});
