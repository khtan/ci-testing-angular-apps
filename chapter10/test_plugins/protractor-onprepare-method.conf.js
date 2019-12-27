exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: { args: ['--headless', '--disable-gpu']}      
  },
  baseUrl: 'https://testing-angular-applications.github.io',
  specs: ['e2e/**/*.e2e-spec.ts'],
  onPrepare: () => {
    let jasmineReporters = require('jasmine-reporters');
    let junitReporter = new jasmineReporters.JUnitXmlReporter({

      // setup the output path for the junit reports, <>opm for onprepare-method
      savePath: 'protractor-results/ch10opm/',

      // consolidate all true:
      //   output/junitresults.xml
      //
      // consolidate all set to false:
      //   output/junitresults-example1.xml
      //   output/junitresults-example2.xml
      consolidateAll: true
    });
    jasmine.getEnv().addReporter(junitReporter);

    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: true
};
