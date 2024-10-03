//! const {test} = require('@playwright/test');
import {test} from '@playwright/test';

test('Simple playwright test', async ({page}) => { 
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    await searchBox.fill("Playwright Automation");
    //await searchBox.type("Playwright Automation");

    await page.waitForTimeout(3000);



 });

 /*
 
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjvgZiz58iIAxV1CnkGHWTbLpgQ39UDCAY"></textarea>


*/


//textarea[@class='gLFyf']
