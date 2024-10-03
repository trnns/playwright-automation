import { expect, test } from '@playwright/test';

test('SEP Login', async ({ page }) => {

console.log(`username is ${process.env.SEP_USERNAME}`);
console.log(`password is ${process.env.SEP_PASSWORD}`);


    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${code}`
    });

    await page.goto(process.env.SEP_URL);

    await page.waitForTimeout(5000);

    expect(await page.title()).toContain("Checkout");
  
});