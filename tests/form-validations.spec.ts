import { test, expect, Page } from "@playwright/test";
import { BasePage } from "../pages/base";

test.describe('TC_07: Missing mandatory form fields gives validation error', () => {
  let basePage: BasePage;
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    basePage = new BasePage(page);
    await basePage.loginToPlatform();
  });

  test('Validation error message should be displayed for "Headline" field.', async () => {
    
    
  });
});
