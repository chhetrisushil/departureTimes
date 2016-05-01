/*
 * webpack.config.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
var webpack = require('webpack');
var env = process.env.NODE_ENV;

function getLoaders() {
  var loaders = [{
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-decorators-legacy'],
      compact: false
    }
  }];

  if (env === 'test') {
    loaders.push({
      // instrument only testing sources with Istanbul
      loader: 'isparta',
      exclude: /test|node_modules/
    });
  }

  return loaders;
}

function getPlugins() {
  var plugins = [new webpack.NoErrorsPlugin()];

  if (env === 'prod') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));
  }

  return plugins;
}


module.exports = {
  entry: (process.env.NODE_ENV === 'test' ? './test/Initial.Spec.js' : './client/static/es6/main.js'),
  output: {
    path: './client/static/js/app',
    filename: 'app.js'
  },
  module: {
    loaders: getLoaders()
  },
  plugins: getPlugins(),
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
