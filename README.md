cli-list
========

> Break CLI lists into arrays.

## Installation
```shell
$ npm install --save-dev cli-list
```

## Usage
```javascript
var list = require('cli-list');
var argv = list(process.argv.slice(2));
console.log(argv);
```

Example:
```
$ foo hello world, --foo, bar
[['hello', 'world'], ['--foo'], ['bar']]
```

With Minimist + ES6:
```
import list from 'cli-list';
import minimist from 'minimist';
const argv = process.argv.slice(2);
const opts = list(argv).map(a => minimist(a));
```

# License
[MIT](LICENSE) &copy; Jamen Marzonie
