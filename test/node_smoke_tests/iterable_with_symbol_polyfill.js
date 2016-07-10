<<<<<<< HEAD
=======
/* jshint esnext: true */

>>>>>>> refs/remotes/origin/1.12-stable
"use strict";

var assert = require( "assert" );

delete global.Symbol;
require( "core-js" );

assert.strictEqual( typeof Symbol, "function", "Expected Symbol to be a function" );
assert.notEqual( typeof Symbol.iterator, "symbol", "Expected Symbol.iterator to be polyfilled" );

require( "./lib/ensure_iterability" )();
