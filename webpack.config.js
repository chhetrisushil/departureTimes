/*
 * webpack.config.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
var webpack = require('webpack');

module.exports = {
  entry: './client/static/es6/main.js',
  output: {
    path: './client/static/js/app',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
