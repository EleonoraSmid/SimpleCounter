
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/store.js',
  output: { path: "./public", filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
