var t = require('tap');
var list = require('../lib');

var fake = ['hello', 'world,', '--foo,', 'bar'];
var out = list(fake);

var expect = [['hello', 'world'], ['--foo'], ['bar']];

t.same(expect, out);
