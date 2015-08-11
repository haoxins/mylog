'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const d = __dirname

module.exports = {
  entry: {
    index: path.join(d, './index'),
  },

  output: {
    path: path.join(d, '../build'),
    filename: '[name].js'
  },

  // externals: {
  //   react: true,
  //   jquery: true
  // },

  resolve: {
    extensions: ['', '.js', '.scss']
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        loose: 'all',
        stage: 0
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!' + 'autoprefixer-loader!' + 'sass-loader'),
      exclude: /node_modules/,
    }]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
