// Make it modular
var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){

  var output = [];
  var byExtname = function(file){
    return path.extname(file).slice(1) === ext;
  };

  fs.readdir(dir, function(err, list){
    if (err) {
      return callback(err);
    }
    else {
      return callback(null, list.filter(byExtname));
    }
  });
};
