// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
const protractorImageComparison = require('protractor-image-comparison');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../spec/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
          args: [ 'no-sandbox', '--headless', '--disable-gpu', '--window-size=800,600' ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/config/tsconfig.e2e.json'
    });
    browser.protractorImageComparison = new protractorImageComparison(
      {   
          autoSaveBaseline: true,
          baselineFolder: 'e2e/path/baseline/',
          screenshotPath: 'e2e/path/actual_screenshots/',
          debug: true,
          disableCSSAnimation: true,
          nativeWebScreenshot: true,
          blockOutStatusBar: true,
          ignoreColors: true
      }
  );
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
  }
};
