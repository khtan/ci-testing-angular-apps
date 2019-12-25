// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--no-sandbox', '--headless']
    }
  },
  directConnect: true,
  baseUrl: 'https://testing-angular-applications.github.io',
  
  framework: 'jasmine',
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  onPrepare: () => {
      let jasmineReporters = require('jasmine-reporters');
      let junitReporter = new jasmineReporters.JUnitXmlReporter({
        // setup the output path for the junit reports
        savePath: 'protractor-results/ch08e2e/',
        consolidateAll: true
      });
      jasmine.getEnv().addReporter(junitReporter);
    
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: true
};
