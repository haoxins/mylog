'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'index'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },

  externals: {
    react: 'React'
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        optional: ['runtime'],
        loose: 'all',
        stage: 0
      }
    }]
  }
}
