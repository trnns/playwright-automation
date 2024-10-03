import { expect, test } from '@playwright/test';

test.describe('WebTables Tests', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com/web-tables');
    });

  test("Validate the rows and columns of the web table", async ({ page }) => {
    // verify that there are at least 8 rows and 11 columns
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    
    //let rows = table.locator("//tr");
    //expect(await rows.count()).toBeGreaterThanOrEqual(8);

    let rows = await table.locator("//tr").all();
    expect(rows.length >= 8).toBeTruthy();

    let columnsOnRow = table.locator("//th");
    expect(await columnsOnRow.count()).toBeGreaterThanOrEqual(11);
    
  });

  test("Read all the data from the web table", async ({ page }) => {
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    let rows = await table.locator("//tr").all();

    let rowsData = [[],[], [], [], [], [], [], [],];

    for (let i = 0; i < rows.length; i++) {
        let cells = await rows[i].locator("//td").all();
        for (let j = 1; j < cells.length -1; j++) {
            let cellText = await cells[j].textContent();
            console.log(cellText);
        }
        console.log("--------------------------------");
    }


  });

  test("check each checkboxes on the web table", async ({ page }) => {
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    let checkboxes = await table.locator("//tr/td/input[@type='checkbox']").all();

    //click each of the check boxes with forof loop
     for (let checkbox of checkboxes) {
        await page.waitForTimeout(1000); 
        await checkbox.check();
        await expect(checkbox).toBeChecked();
     }

    });
   
});