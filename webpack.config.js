const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('main.css')
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader'
      )
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap!sass-loader?sourceMap'
      )
    }]
  },
  sassLoader: {
    includePaths: ['./src/scss/partials']
  }
};