const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");


setDefaultTimeout(5000 * 2)
Before(async function () {
  try {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    await this.page.goto("https://www.demoblaze.com/");
    // console.log("Captured web site " + this.page.title);
  } catch (error) {
    console.log(error.toString())
  }
});
After({tags: "@tag1"},async function () {
  this.browser.close()
});
