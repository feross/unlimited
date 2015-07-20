var debug = require('debug')('unlimited')
var posix
try { posix = require('posix') } catch (err) {}

var DEFAULT_LIMIT = 65536

module.exports = function unlimited (limit) {
  if (!limit) limit = DEFAULT_LIMIT
  if (!posix) {
    debug('Failed to upgrade resource limits - missing `posix` package')
    return
  }
  try {
    posix.setrlimit('nofile', {
      soft: limit,
      hard: limit
    })
    debug('Upgraded resource limits to ' + posix.getrlimit('nofile').soft)
  } catch (err) {
    debug('Failed to upgrade resource limits: %s', err.message || err)
  }
}
