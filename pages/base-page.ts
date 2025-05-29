import { Page, expect } from "@playwright/test";
import { BasePageLocators } from "../locators/base-page-locators";
import { EditRulePage } from "./edit-rule-page";

export class BasePage {
  readonly page: Page;
  private readonly locator: BasePageLocators;
  private editRulePage: EditRulePage;

  constructor(page: Page) {
    this.page = page;
    this.locator = new BasePageLocators(page);
    this.editRulePage = new EditRulePage(page);
  }

  async loginToPlatform() {
    await this.page.goto("/login", { waitUntil: "networkidle" });
    await this.locator.inputEmailId.fill(process.env.PLATFORM_USER_NAME);
    await this.locator.inputPassword.fill(process.env.PLATFORM_USER_PASSWORD);
    await this.locator.buttonLogin.click();
    await expect(this.page).toHaveURL(/.*find/);
  }

  async navigateToEditRulesPage() {
    //navigating directly to edit rules page as focus is ONLY on Assignment type WI
    await this.page.goto(process.env.PLATFORM_RULES_PAGE, {
      waitUntil: "networkidle",
    });
  }

  async goToAssignmentWorkInstructionEditPage() {
    await this.navigateToEditRulesPage();
    await this.editRulePage.clickDatasourceContinueButton();
    await this.editRulePage.clickConditionsContinueButton();
    await this.editRulePage.verifyAssignmentTypeVisibility();
    await this.editRulePage.verifyWorkInstructionVisibility();
  }
}
