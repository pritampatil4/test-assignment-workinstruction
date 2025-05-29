import { Page, expect, Locator } from "@playwright/test";
import { EditRulePageLocators } from "../locators/edit-rule-page-locators";

export class EditRulePage {
  readonly page: Page;
  private readonly locator: EditRulePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locator = new EditRulePageLocators(page);
  }

  async clickDatasourceContinueButton() {
   await this.verifyLocatorVisibility(this.locator.labelDataSource);
    await this.locator.buttonContinue.click();
  }

  async clickConditionsContinueButton() {
    await this.verifyLocatorVisibility(this.locator.labelConditions);
    await this.locator.buttonContinue.click();
  }

  async verifyAssignmentTypeVisibility() {
    await this.verifyLocatorVisibility(this.locator.labelAssignmentType);
  }

  async verifyWorkInstructionVisibility() {
    await this.verifyLocatorVisibility(this.locator.labelWorkInstruction);
  }

  async verifyLocatorVisibility(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async verifyLabelAndText(labelLocator: Locator, expectedText: string) {
    await expect(labelLocator).toBeVisible();
    await expect(labelLocator).toHaveText(expectedText);
  }

  async verifyWorkInstructionLabel() {
    await this.verifyLabelAndText(this.locator.labelWorkInstruction, "Workinstruction*");
  }

  async verifyTaskHeadlineLabel() {
    await this.verifyLabelAndText(this.locator.labelTaskHeadline, "Headline*");
  }

  async verifyTaskTitleLabel() {
    await this.verifyLabelAndText(this.locator.labelTaskTitle, "Title*");
  }

  async verifyTaskDescriptionLabel() {
    await this.verifyLabelAndText(this.locator.labelTaskDescription, "Description");
  }

  async verifyTaskPriorityLabel() {
    await this.verifyLabelAndText(this.locator.labelTaskPriority, "Priority");
  }

  async verifyReasonsAbortLabel() {
    await this.verifyLabelAndText(this.locator.labelReasonsAbort, "Reasons to abort");
  }

  async verifyAnnouncementTypeLabel() {
    await this.verifyLabelAndText(this.locator.labelAnnoucementType, "Announcement type");
  }

  async verifyNotificationTypeLabel() {
    await this.verifyLabelAndText(this.locator.labelNotificationType, "Notification type");
  }

  async verifyRecipientsTypeLabel() {
    await this.verifyLabelAndText(this.locator.labelRecipientsType, "Recipient type");
  }

  async verifyRecipientTypeRolesLabel() {
    await this.verifyLabelAndText(this.locator.labelRecipientTypeRoles, "Roles");
  }

  async verifyRecipientTypeUserLabel() {
    await this.verifyLabelAndText(this.locator.labelRecipientTypeUser, "User");
  }

  async verifyRecipientTypeCallerLabel() {
    await this.verifyLabelAndText(this.locator.labelRecipientTypeCaller, "Caller");
  }

  async verifyRecipientTypeVariablesLabel() {
    await this.verifyLabelAndText(this.locator.labelRecipientTypeVariables, "Variables");
  }
}
