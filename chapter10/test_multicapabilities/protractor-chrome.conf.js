exports.config = {
  directConnect: true,
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: { args: ['--headless', '--disable-gpu']}
  },{
    browserName: 'chrome',
    chromeOptions: { args: ['--headless', '--disable-gpu']}
  }],
  baseUrl: 'https://testing-angular-applications.github.io',
  specs: ['e2e/**/*.e2e-spec.ts'],
  onPrepare: () => {
      let jasmineReporters = require('jasmine-reporters');
      let junitReporter = new jasmineReporters.JUnitXmlReporter({
        // setup the output path for the junit reports, <>tm for test_multicapabilities
        savePath: 'protractor-results/ch10tm/',
        consolidateAll: true
      });
      jasmine.getEnv().addReporter(junitReporter);
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: false
};
