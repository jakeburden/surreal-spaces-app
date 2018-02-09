var menubar = require('menubar')
var path = require('path')
var ipc = require('electron').ipcMain
var isMac = /darwin/.test(process.platform)

var mb = menubar({
  width: 150,
  height: 35,
  preloadWindow: true,
  icon: path.join(__dirname, '/iconTemplate.png')
  // alwaysOnTop: true
})

ipc.on('abort', function () {
  if (isMac) {
    mb.app.hide()
  } else {
    // Windows and Linux
    mb.window.blur()
    mb.hideWindow()
  }
})