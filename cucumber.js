module.exports = {
  default: {
    require: ["stepDefinitions/*.js"], // to add step definitions files,
    format: ['progress-bar','html:cucumber-report.html','json:cucumber-report.json'], // to specify your output reports 
  },
};
