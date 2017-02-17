const webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './src/main.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js'
    ],
    webpack: webpackConfig,

    preprocessors: {
      './src/main.js': ['webpack'],
      './test/**/*.js': ['babel']
    },
    browsers: ['Chrome'],
    reports: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity
  });
};