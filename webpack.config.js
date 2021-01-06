var webpack = require('webpack');
var path = require('path');

var config = {
  entry: __dirname + '/app',
  output: {
    path: __dirname + '/',
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
    ]
  }
};

module.exports = config;
