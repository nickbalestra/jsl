// HTTP JSON API SERVER
var url = require('url');
var http = require('http');

var time, query, isoTime, unixtime;

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.method === 'GET' ){
    query = url.parse(req.url, true);
    time = new Date(query.query.iso);
      if (query.pathname === '/api/parsetime'){
        isoTime = {
          'hour': time.getHours(),
          'minute': time.getMinutes(),
          'second': time.getSeconds()
        };
        res.end(JSON.stringify(isoTime));
      }
      if (query.pathname === '/api/unixtime'){
        unixtime = {"unixtime": time.getTime()};
        res.end(JSON.stringify(unixtime));
      }
    }
})

server.listen(process.argv[2])


// Official solution
// var http = require('http');
// var url = require('url');
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
