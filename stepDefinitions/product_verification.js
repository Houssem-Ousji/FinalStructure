const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { errorHandle } = require("../errorHandle");
Given("I am on {string} page", async function (expectedTitle) {
  try {
    const title = await this.page.locator("#nava").textContent();
    expect(title.trim()).toEqual(expectedTitle);
    await this.page.screenshot({
      path: "screenshots/first_step_passed.png",
      fullPage: true,
    });
  } catch (error) {
    await errorHandle(error, this.page);
  }
});
When("I click categories link", async function () {
  try {
    const categories_button = await this.page.locator("#cat").click();
    await this.page.screenshot({
      path: "screenshots/second_step_success.png",
      fullPage: true,
    });
  } catch (error) {
    await errorHandle(error, this.page);
  }
});
Then(
  "I see {string} , {string} and {string} under categories",
  async function (string, string2, string3) {
    try {
      const phones = await this.page
        .getByRole("link", { name: "Phones" })
        .textContent();
      const laptops = await this.page
        .getByRole("link", { name: "Laptops" })
        .textContent();
      const monitoring = await this.page
        .getByRole("link", { name: "Monitors" })
        .textContent();
      expect(phones.trim()).toEqual(string);
      expect(laptops.trim()).toEqual(string2);
      expect(monitoring.trim()).toEqual(string3);
      await this.page.screenshot({
        path: "screenshots/third_step_success.png",
        fullPage: true,
      });
    } catch (error) {
      await errorHandle(error, this.page);
    }
  }
);
