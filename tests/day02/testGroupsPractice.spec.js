import { test } from "@playwright/test";

test.describe("@smoke @level1 Test Group", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("@lib01 Getting the title of the page", async ({ page }) => {
    console.log(await page.title());
  });

  test("Getting the current URL of the page", async ({ page }) => {
    console.log(await page.url());
  });
});
