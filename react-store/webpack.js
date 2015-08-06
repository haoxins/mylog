'use strict'

const path = require('path')
const d = __dirname

module.exports = {
  entry: {
    index: path.join(d, './index'),
  },

  output: {
    path: path.join(d, './build'),
    filename: '[name].js'
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        loose: 'all',
        stage: 0
      }
    }]
  }
}
