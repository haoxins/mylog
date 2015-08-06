'use strict'

const env = process.env.NODE_ENV || 'production'

if (env !== 'development' && env !== 'production') {
  env = 'production'
}

module.exports = require('./' + env)
