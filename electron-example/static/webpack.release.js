'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

let config = require('./webpack.build')

config.output.filename = config.output.filename.replace(/\.js$/, '.min.js')
config.plugins = [
  new ExtractTextPlugin('[name].min.css'),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      ascii_only: true
    }
  })
]

module.exports = config
