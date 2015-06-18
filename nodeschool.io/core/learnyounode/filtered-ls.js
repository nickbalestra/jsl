// Filtered LS
var fs = require('fs');
var path = require('path');

var dir = process.argv[2]
var ext = process.argv[3]


fs.readdir(dir, function(err, list){
  if (err) {
   console.log(err)
  }
  else {
    list.forEach(function(file){
      if (path.extname(file).slice(1) === ext) {
        console.log(file);
      }
    });
  }
})
