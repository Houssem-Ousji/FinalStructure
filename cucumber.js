const common = {
  require: ["stepDefinitions/*.js"], // to add step definitions files,
  format: ['progress-bar','html:cucumber-report.html','json:cucumber-report.json'], // to specify your output reports 
  parallel: 2,
}
module.exports = {
  default: {
    ...common,
    worldParameters: { browser: 'chromium' } 
  },
  forChromiumTest : {
    ...common,
    worldParameters: { browser: 'chromium' } 
  },
  forFirefoxTest : {
    ...common,
    worldParameters: { browser: 'firefox' } 
  }
  // desktop: `--world-parameters '{"device": {"type":"desktop","height":720,"width":1280}}'`,
  // phone: `--world-parameters '{"device": {"type":"phone","height":568,"width":320}}'`,
  // tablet: `--world-parameters '{"device": {"type":"tablet","height":1024,"width":768}}'`,
  // chromium: `--world-parameters '{"browser": "chromium"}'`,
  // firefox: `--world-parameters '{"browser": "firefox"}'`,
  // webkit: `--world-parameters '{"browser": "webkit"}'`
};
