const webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.webpackServer = {
  noInfo: true,
};

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['chai', 'mocha', 'sinon'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-sinon',
      'karma-mocha-reporter',
    ],
    files: [
      'tests.bundle.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
    ],
    preprocessors: {
      'tests.bundle.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    client: {
      mocha: {
        reporter: 'html',
      },
    },
  });
};
