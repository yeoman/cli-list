var test = require('tape');
var list = require('..');

test('single argv split', function(t) {
  t.plan(1);

  var argv = ['hello', 'world,', '--foo', 'bar'];

  t.same(
    list(argv),
    [['hello', 'world'], ['--foo', 'bar']],
    'split argv-like array into list'
  );
});

test('multiple argv split', function(t) {
  t.plan(1);

  var argv = ['hello', 'world,', '--foo,', 'bar'];

  t.same(
    list(argv),
    [['hello', 'world'], ['--foo'], ['bar']],
    'split argv-like array into list'
  );
});
