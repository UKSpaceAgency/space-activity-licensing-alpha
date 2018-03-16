'use strict'

var yaml = require('js-yaml')
var fs = require('fs')
var merge = require('merge')
var env = process.env.BUILD_CONFIG || 'development'

var baseConfig = {}
var envConfig = {}

try {
  baseConfig = yaml.safeLoad(fs.readFileSync(process.cwd() + '/../config.yaml', 'utf8'))
  envConfig = yaml.safeLoad(fs.readFileSync(process.cwd() + '/../config.' + env + '.yaml', 'utf8'))
} catch (err) {
  if (err.name === 'YAMLException') {
    throw err
  }
}

baseConfig.buildTimestamp = Date.now()

module.exports = merge.recursive(true, baseConfig, envConfig)
