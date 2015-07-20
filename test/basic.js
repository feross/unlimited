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

test('set custom limit', function (t) {
  t.doesNotThrow(function () {
    unlimited(1000)
  })
  t.equal(posix.getrlimit('nofile').soft, 1000)
  t.end()
})
