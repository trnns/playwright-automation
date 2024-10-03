import { test } from "@playwright/test";

test.describe("Mouse Actions Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  //createa afterEach
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Click", async ({ page }) => {
    await page.click("text='Checkboxes'");
  });

  test("Right click", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.click("text='Checkboxes'", { button: "right" });
  });

  test("Double Click", async ({ page }) => {
    await page.dblclick("text='Hovers'");
  });

  test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");
    // await page.hover("//img[@alt='User Avatar']");
    let elements = await page.locator("//img[@alt='User Avatar']").all();

    for (const each of elements) {
      await page.waitForTimeout(3000);

      await each.hover();
    }
  });

  test("Mouse Whell Scroll", async ({ page }) => {
    await page.waitForTimeout(3000);
    page.mouse.wheel(0, 300);
  });

  test("Scrolling to specific element", async ({ page }) => {
    let element = page.locator("text='Inputs'");

    await page.waitForTimeout(3000);

    await element.scrollIntoViewIfNeeded();

    await page.waitForTimeout(3000);

    await element.click();
  });
  
  test("Drag and Drop", async ({ page }) => {
    page.click("text='Drag and Drop'");

    let source = page.locator("//div[@id='column-a']");
    let target = page.locator("//div[@id='column-b']");

    await page.waitForTimeout(3000);
    //await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
    await source.dragTo(target);
  });
});
