var aesthetic = require('ascii-fullwidth-halfwidth-convert')
var enterInput = require('enter-input')
var clipboard = require('electron').clipboard
var ipc = require('electron').ipcRenderer

var input = enterInput(function(ev) {
  var surreal = new aesthetic().toFullWidth(this.value)
  clipboard.writeText(surreal)
  ipc.send('abort')
})

input.setAttribute('placeholder', 'surreal spaces')

document.body.appendChild(input)
