// Make it modular
var mymodule = require('./make-it-modular-module');

var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function(err, list) {
  if (err) {
   console.log(err)
  }
  else list.forEach(function (file) {
   console.log(file);
  })
});
