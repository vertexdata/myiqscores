import { expect, test } from "@playwright/test";

const baseURL = "http://127.0.0.1:4173";

test("homepage and complete assessment journey", async ({ page }) => {
  await page.goto(baseURL);
  await expect(page).toHaveTitle(/Free IQ Test/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Intelligence is more than");
  await expect(page.locator('script[src*="adsbygoogle"]')).toHaveCount(0);

  await page.getByRole("button", { name: /Begin the reasoning test/i }).click();
  for (let question = 1; question <= 30; question += 1) {
    await expect(page.getByText(`Question ${question} of 30`)).toBeVisible();
    await page.getByRole("radio").first().click();
    await page.getByRole("button", { name: question === 30 ? /View results/i : /Continue/i }).click();
  }

  await expect(page.getByText(/estimated reasoning score/i).first()).toBeVisible({ timeout: 10_000 });
  await expect(page.getByText(/educational estimate, not a clinical measurement/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /Your device history/i })).toBeVisible();
});

test("score interpreter updates and explains uncertainty", async ({ page }) => {
  await page.goto(`${baseURL}/iq-score-interpreter?score=130`);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("IQ Score Mean");
  const input = page.getByLabel("IQ score");
  await input.fill("115");
  await page.getByRole("button", { name: "Interpret score" }).click();
  await expect(page.getByText("High-average range")).toBeVisible();
  await expect(page.getByText(/Allow for measurement error/i)).toBeVisible();
});

test("mobile layout has usable navigation and no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("link", { name: "Score Explorer" })).toBeVisible();
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewport + 1);
});
