import { Page, expect } from "@playwright/test";
import { EditRulePageLocators } from "../locators/edit-rule-page-locators";

export class EditRulePage {
  readonly page: Page;
  private readonly locator: EditRulePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locator = new EditRulePageLocators(page);
  }

  async verifyDatasourceSectionVisibility() {
    await expect(this.locator.labelDataSource).toBeVisible();
  }

  async verifyConditionsSectionVisibility() {
    await expect(this.locator.labelConditions).toBeVisible();
  }

  async clickDatasourceContinueButton() {
    await this.verifyDatasourceSectionVisibility();
    await this.locator.buttonContinue.click();
  }

  async clickConditionsContinueButton() {
    await this.verifyConditionsSectionVisibility();
    await this.locator.buttonContinue.click();
  }

  async verifyAssignmentTypeWorkInstructionVisibility() {
    expect(await this.locator.labelAssignmentType.isVisible());
    expect(await this.locator.labelWorkInstruction.isVisible());
  }

  async verifyWorkInstructionLabel() {
    expect(await this.locator.labelWorkInstruction.isVisible());
  }

  async verifyTaskHeadlineLabel() {
    expect(await this.locator.labelTaskHeadline.isVisible());
  }

  async verifyTaskTitleLabel() {
    expect(await this.locator.labelTaskTitle.isVisible());
  }

  async verifyTaskDescriptionLabel() {
    expect(await this.locator.labelTaskDescription.isVisible());
  }

  async verifyTaskPriorityLabel() {
    expect(await this.locator.labelTaskPriority.isVisible());
  }

  async verifyReasonsAbortLabel() {
    expect(await this.locator.labelReasonsAbort.isVisible());
  }

  async verifyAnnouncementTypeLabel() {
    expect(await this.locator.labelAnnoucementType.isVisible());
  }

  async verifyNotificationTypeLabel() {
    expect(await this.locator.labelNotificationType.isVisible());
  }

  async verifyRecipientsTypeLabel() {
    expect(await this.locator.labelRecipientsType.isVisible());
  }

  async verifyRecipientTypeRolesLabel() {
    expect(await this.locator.labelRecipientTypeRoles.isVisible());
  }

  async verifyRecipientTypeUserLabel() {
    expect(await this.locator.labelRecipientTypeUser.isVisible());
  }

  async verifyRecipientTypeCallerLabel() {
    expect(await this.locator.labelRecipientTypeCaller.isVisible());
  }

  async verifyRecipientTypeVariablesLabel() {
    expect(await this.locator.labelRecipientTypeVariables.isVisible());
  }
}
