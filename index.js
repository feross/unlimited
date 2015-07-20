var debug = require('debug')('unlimited')
var posix
try { posix = require('posix') } catch (err) {}

module.exports = function unlimited () {
  if (!posix) {
    debug('Failed to upgrade resource limits - missing `posix` package')
    return
  }
  try {
    posix.setrlimit('nofile', {
      soft: module.exports.LIMIT,
      hard: module.exports.LIMIT
    })
    debug('upgraded resource limits to ' + posix.getrlimit('nofile').soft)
  } catch (err) {}
}

module.exports.LIMIT = 65536
