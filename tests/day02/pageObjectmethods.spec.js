import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  //goto https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");

  let actualTitle = await page.title();

  console.log(actualTitle);
});

test("Getting the current URL of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let currentUrl = await page.url();

  console.log(currentUrl);

  //wait for timeout 3seconds
  await page.waitForTimeout(3000);
});

test("Set the window size of the browser", async ({ page }) => {

  await page.goto("https://practice.cydeo.com/");

  await page.setViewportSize({width: 17000, height: 900});

  await page.waitForTimeout(3000);

});
