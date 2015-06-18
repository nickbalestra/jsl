// HTTP FILE SERVER
var http = require('http');
var fs = require('fs');

var filePath = process.argv[3];
var stream = fs.createReadStream(filePath, {encoding: 'utf8'});

var server = http.createServer(function (req, res) {
  // request handling logic...
  stream.pipe(res);
})

server.listen(Number(process.argv[2]))

// Official solution
// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   fs.createReadStream(process.argv[3]).pipe(res);
// })
//
// server.listen(Number(process.argv[2]))
