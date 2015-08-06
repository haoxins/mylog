'use strict'

const BrowserWindow = require('browser-window')
const config = require('./config')
const path = require('path')
const app = require('app')

require('crash-reporter').start()

let mainWindow = null

app.on('window-all-close', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800
  })

  mainWindow.loadUrl('file://' + __dirname + '/index.html')

  if (config.debug) {
    mainWindow.openDevTools()
  }

  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
