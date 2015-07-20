var posix = require('posix')
var test = require('tape')
var unlimited = require('../')

test('basic usage', function (t) {
  var hard = posix.getrlimit('nofile').hard
  t.doesNotThrow(function () {
    unlimited()
  })
  t.ok(posix.getrlimit('nofile').soft >= hard)
  t.end()
})

test('set custom LIMIT', function (t) {
  unlimited.LIMIT = 1000
  t.doesNotThrow(function () {
    unlimited()
  })
  t.equal(posix.getrlimit('nofile').soft, 1000)
  t.end()
})
