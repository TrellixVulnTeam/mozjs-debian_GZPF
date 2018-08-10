// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
es5id: 15.4.4.14-2-14
description: Array.prototype.indexOf - 'length' is undefined property
---*/

        var obj = { 0: true, 1: true };

assert.sameValue(Array.prototype.indexOf.call(obj, true), -1, 'Array.prototype.indexOf.call(obj, true)');

reportCompare(0, 0);