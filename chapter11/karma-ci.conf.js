// Karma configuration file for CI.

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    reporters: ['junit'],
    junitReporter: {
        useBrowserName: false, // turn off using browser-os long name for folder
        outputDir: 'karma-results',
        outputFile: 'chapter11/karma-results.xml' // instead use chapter11 for CircleCI to pick up
    },
    angularCli: {
      environment: 'dev',
    },
    port: 9876,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    // browsers: ['Chrome'],      
    autoWatch: false,
    singleRun: true
  });
};
