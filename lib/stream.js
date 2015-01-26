var notifier = require('node-notifier');
var strip = require('strip-ansi');

var levelNames = {
  10: 'Trace',
  20: 'Debug',
  30: 'Info',
  40: 'Warn',
  50: 'Error',
  60: 'Fatal'
};

function NotifyStream(){
  //
}

NotifyStream.prototype.write = function(data){
  notifier.notify({
    title: levelNames[data.level],
    message: strip(data.msg)
  });
};

module.exports = NotifyStream;