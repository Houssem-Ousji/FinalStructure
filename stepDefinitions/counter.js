const {Given,When,Then} = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
Given('counter and a and b equal {string}', function (string) {
    expect(parseInt(this.counter)).toEqual(parseInt(string))
    expect(parseInt(this.x)).toEqual(parseInt(string))
    expect(parseInt(this.y)).toEqual(parseInt(string))
  });
  When('I give a {string} and b {string}', function (string, string2) {
    this.x = parseInt(string)
    this.y = parseInt(string2);
    console.log(this.x)
    console.log(this.y)
  });
  Then('counter give me {string}', function (string) {
    expect(this.x + this.y).toEqual(parseInt(string));
  });