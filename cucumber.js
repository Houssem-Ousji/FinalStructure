module.exports = {
  default: {
    require: ["stepDefinitions/*.js"], // to add step definitions files,
    format: ['html:cucumber-report.html','json:cucumber-report.json'],
  },
};
