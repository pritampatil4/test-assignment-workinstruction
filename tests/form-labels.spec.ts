import { test, expect, Page } from "@playwright/test";
import { BasePage } from "../pages/base-page";
import { EditRulePage } from "../pages/edit-rule-page";
import { EditRulePageLocators } from "../locators/edit-rule-page-locators";

test.describe("Verify Assignment type WorkInstruction has expected labels", () => {
  let basePage: BasePage;
  let editRulePage: EditRulePage;
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    basePage = new BasePage(page);
    editRulePage = new EditRulePage(page);
    await basePage.loginToPlatform();
  });

  test("form labels are visible", async () => {
    await basePage.goToAssignmentWorkInstructionEditPage();
    await editRulePage.verifyWorkInstructionLabel();
    await editRulePage.verifyTaskHeadlineLabel();
    await editRulePage.verifyTaskTitleLabel();
    await editRulePage.verifyTaskDescriptionLabel();
    await editRulePage.verifyTaskPriorityLabel();
    await editRulePage.verifyReasonsAbortLabel();
    await editRulePage.verifyAnnouncementTypeLabel();
    await editRulePage.verifyNotificationTypeLabel();
    await editRulePage.verifyRecipientsTypeLabel();
    await editRulePage.verifyRecipientTypeRolesLabel();
    await editRulePage.verifyRecipientTypeUserLabel();
    await editRulePage.verifyRecipientTypeCallerLabel();
    await editRulePage.verifyRecipientTypeVariablesLabel();
  });
});
