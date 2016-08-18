/* eslint import/no-extraneous-dependencies: off */
const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  devtool: isProd ? 'cheap-module-eval-source-map' : 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // enables optimizations by minifiers
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProd ? JSON.stringify('production') :
          JSON.stringify('development'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  postcss: function postcss() {
    return [precss, autoprefixer];
  },
};
