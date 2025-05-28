import { expect, Page, Locator } from "@playwright/test";

export class BasePageLocators {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get inputEmailId(): Locator {
    return this.page.locator('input[name="email"]');
  }

  get inputPassword(): Locator {  
    return this.page.locator('input[name="password"]');
  }

  get buttonLogin(): Locator {
    return this.page.locator('button[type="submit"]');
  }
}
