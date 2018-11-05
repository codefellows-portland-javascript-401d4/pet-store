exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'test-e2e/**/*.js'
  ],

  // suites: {
  //   home: 'test-e2e/home.test.js',
  //   full: 'test-e2e/**/*.test.js'
  // },

  capabilities: {
    browserName: 'chrome'
  },

  // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:7000',

  framework: 'jasmine',

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    print: function() {}
  }
};