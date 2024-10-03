import { test, expect } from "@playwright/test";

test("Bypassing the authentication by encoding credentials in the URL", async ({page}) => {
  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth"); //!do not use this way!
  //await page.goto("https://@practice.cydeo.com/basic_auth");

  //await page.waitForTimeout(3000);

  let congrats = page.locator("//p[contains(text(),'Congratulations!')]");

  await expect(congrats).toBeVisible();
});

test("Bypassing the authentication by encoding credentials in Base64 format", async ({page}) => {
  
  //encoding credentials in base64 format
  let encodedCredentials = Buffer.from("admin:admin").toString("base64");

  //set up the authentication header
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });

  await page.goto("https://practice.cydeo.com/basic_auth");

  let congrats = page.locator("//p[contains(text(),'Congratulations!')]");

  await expect(congrats).toBeVisible();
});

