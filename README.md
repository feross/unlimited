# unlimited [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/feross/unlimited/master.svg
[travis-url]: https://travis-ci.org/feross/unlimited
[npm-image]: https://img.shields.io/npm/v/unlimited.svg
[npm-url]: https://npmjs.org/package/unlimited
[downloads-image]: https://img.shields.io/npm/dm/unlimited.svg
[downloads-url]: https://npmjs.org/package/unlimited

### Upgrade the maximum file descriptor number (`'nofile'`) that can be opened by this process

## install

```
npm install unlimited
```

## usage

To attempt to upgrade the maximum file descriptor number that can be opened by this process
to effectively unlimited (`65536`):

```js
var unlimited = require('unlimited')
unlimited()
```

Or specify a specific `'nofile'` number to use:

```js
unlimited(10000)
```

If the current user's permissions or the system's `'hard'` limit do not allow the maximum
file descriptor number to be increased, this function will do nothing (no-op).

For best results, start your node process as `root`, run `unlimited()`, then downgrade
the user permissions with the [`downgrade`](https://github.com/feross/downgrade) package.

On non-posix platforms (e.g. Windows), this module does nothing.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
