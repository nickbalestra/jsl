//TIME SERVER
var net = require('net')

var server = net.createServer(function (socket) {
  // socket handling logic
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() > 9 ? (now.getMonth() + 1) : "0" + (now.getMonth() + 1);
  var date = now.getDate();
  var hours = now.getHours();
  var mins = now.getMinutes();

  socket.end("" + year + "-" + month + "-" + date + ' ' + hours + ":" + mins)
})

server.listen(process.argv[2])

// Official solution

// var net = require('net')
//
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
