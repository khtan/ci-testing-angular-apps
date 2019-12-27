exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: { args: ['--headless', '--disable-gpu']},
    loggingPrefs: {
      performance: 'ALL',
      browser: 'ALL'
    }
  },
  baseUrl: 'https://testing-angular-applications.github.io',
  specs: ['e2e/**/*.e2e-spec.ts'],
  onPrepare: () => {
      let jasmineReporters = require('jasmine-reporters');
      let junitReporter = new jasmineReporters.JUnitXmlReporter({
        // setup the output path for the junit reports, <>tc for test_capabilities
        savePath: 'protractor-results/ch10tc/',
        consolidateAll: true
      });
      jasmine.getEnv().addReporter(junitReporter);
    
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: false
};
