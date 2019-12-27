exports.config = {
  directConnect: process.env.DIRECT_CONNECT,
  seleniumAddress: process.env.SELENIUM_ADDRESS,
  capabilities: {
     browserName: (process.env.BROWSER_NAME || 'chrome'),
     chromeOptions: { args: ['--headless', '--disable-gpu']}
  },
  baseUrl: 'https://testing-angular-applications.github.io',
  specs: ['e2e/**/*.e2e-spec.ts'],
  onPrepare: () => {
    if (process.env.BROWSER_NAME == 'chrome') {
      let jasmineReporters = require('jasmine-reporters');
      let junitReporter = new jasmineReporters.JUnitXmlReporter({

        // setup the output path for the junit reports, <>tenv for test_environment
        savePath: 'protractor-results/ch10tenv/',

        // conslidate all true:
        //   output/junitresults.xml
        //
        // conslidate all set to false:
        //   output/junitresults-example1.xml
        //   output/junitresults-example2.xml
        consolidateAll: true
      });
      jasmine.getEnv().addReporter(junitReporter);
    }
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: true
};
