'use strict';

const notifier = require('node-notifier');
const strip = require('strip-ansi');

const levelNames = {
  10: 'Trace',
  20: 'Debug',
  30: 'Info',
  40: 'Warn',
  50: 'Error',
  60: 'Fatal'
};

function NotifyStream() {
  //
}

NotifyStream.prototype.write = function(data) {
  notifier.notify({
    title: levelNames[data.level],
    message: strip(data.msg)
  });
};

module.exports = NotifyStream;
