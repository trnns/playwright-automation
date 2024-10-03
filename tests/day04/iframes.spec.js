import { test , expect} from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com/iframe");

    });

  test("Locate the iframe by ID", async ({ page }) => { //"page" is the overall page and it stores web elements. iFrame is included in it as well. Don't forget! iframe is a another frame inside the frame

    let myFrame = page.frameLocator("#mce_0_ifr");

    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']"); //for the iframe, you need to use framelocator, then you can use the //!variable to locate the inside the frame 

    await elementInsideTheFrame.clear();
    
    await elementInsideTheFrame.fill("Hello CYDEO");

    expect(await elementInsideTheFrame.innerText()).toBe("Hello CYDEO");

    await expect(elementInsideTheFrame).toHaveText("Hello CYDEO");

  });

  test("Locate the frame by CSS", async ({ page }) => {
    let myFrame = page.frameLocator("iframe.tox-edit-area__iframe");
    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']")
/*
    await page.waitForTimeout(3000);
    elementInsideTheFrame.press("Control+A");
    await page.waitForTimeout(3000);
    elementInsideTheFrame.press("Backspace");
    await page.waitForTimeout(3000);
*/

    await elementInsideTheFrame.press("Control+A", "Backspace");
    await page.waitForTimeout(3000);
    await elementInsideTheFrame.fill("Playwright Automation");
    expect(await elementInsideTheFrame.innerText()).toBe("Playwright Automation");
  });

  test("Locate the frame by XPath", async ({ page }) => {
    let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']")
/*
    await page.waitForTimeout(3000);
    elementInsideTheFrame.press("Control+A");
    await page.waitForTimeout(3000);
    elementInsideTheFrame.press("Backspace");
    await page.waitForTimeout(3000);
*/

    await elementInsideTheFrame.press("Control+A", "Backspace");
    await page.waitForTimeout(3000);
    await elementInsideTheFrame.fill("Playwright Automation");
    expect(await elementInsideTheFrame.innerText()).toBe("Playwright Automation");
    

  });
});

/*
<body id="tinymce" class="mce-content-body " data-id="mce_0" aria-label="Rich Text Area. Press ALT-0 for help." contenteditable="true" spellcheck="false"><p>Your content goes here.</p></body>
*/