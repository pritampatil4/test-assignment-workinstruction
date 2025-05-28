import { Page, expect } from '@playwright/test';
import { BasePageLocators } from '../locators/base-page';

export class BasePage {
  readonly page: Page;
  private readonly locator: BasePageLocators;


  constructor(page: Page) {
    this.page = page;
    this.locator = new BasePageLocators(page);
  }

  async loginToPlatform() {
    await this.page.goto('/login');
    await this.locator.inputEmailId.fill(process.env.PLATFORM_USER_NAME!);
    await this.locator.inputPassword.fill(process.env.PLATFORM_USER_PASSWORD!);
    await this.locator.buttonLogin.click();
  }
}
