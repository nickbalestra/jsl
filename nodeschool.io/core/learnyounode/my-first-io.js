// My first I/O!
var fs = require('fs')
var text = fs.readFileSync(process.argv[2], 'utf8');

console.log(text.split('\n').length - 1);
