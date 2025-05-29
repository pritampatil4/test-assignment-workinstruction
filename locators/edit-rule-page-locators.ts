import { expect, Page, Locator } from "@playwright/test";
import { time } from "console";

export class EditRulePageLocators {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get buttonContinue(): Locator {
    return this.page.locator('button:has-text("Continue")');
  }

  get labelDataSource(): Locator {
    return this.page.locator('//h2[text()="Datasource"]');
  }

  get labelConditions(): Locator {
    return this.page.locator('label[for="conditions"]');
  }

  get labelAssignmentType(): Locator {
    return this.page.locator('//span[text()="Assignment"]');
  }

  get labelWorkInstruction(): Locator {
    return this.page.locator('label[for="workinstruction-id"]');
  }

  get labelTaskHeadline(): Locator {
    return this.page.locator('label[for="task-headline"]');
  }

  get labelTaskTitle(): Locator {
    return this.page.locator('label[for="task-title"]');
  }

  get labelTaskDescription(): Locator {
    return this.page.locator('label[for="task-description"]');
  }

  get labelTaskPriority(): Locator {
    return this.page.locator('label[for="task-priority"]');
  }

  get labelReasonsAbort(): Locator {
    return this.page.locator('label[for="reasons-select"]');
  }

  get labelAnnoucementType(): Locator {
    return this.page.locator('label[for="tasks.announcement-type"]');
  }

  get labelNotificationType(): Locator {
    return this.page.locator('label[for="notification-type"]');
  }

  get labelRecipientsType(): Locator {
    return this.page.getByText("Recipient type");
  }

  get labelRecipientTypeRoles(): Locator {
    return this.page.locator('input#roles + label');
  }

  get labelRecipientTypeUser(): Locator {
    return this.page.locator('label[for="user"]');
  }

  get labelRecipientTypeCaller(): Locator {
    return this.page.locator('label[for="caller"]');
  }

  get labelRecipientTypeVariables(): Locator {
    return this.page.locator("//div[contains(@class, 'SegmentedControl-module__inputContainer___nL8z6') and .//span[text()='Recipient type']]//label[text()='Variables']");
  }
}
