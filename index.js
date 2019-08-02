/* global hexo */
'use strict';

const NotifyStream = require('./lib/stream');

hexo.log.addStream({
  type: 'raw',
  stream: new NotifyStream()
});
