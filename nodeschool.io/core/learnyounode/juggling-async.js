// JUGGLING ASYNC
var http = require('http');
var bl = require('bl');

var args = process.argv.slice(2);

(function eachSeries(list){
  if (args.length < 1) {
    return;
  } else {
    http.get(args[0], function (response){
      response.pipe(bl(function (err, data) {
        if (err) {
          console.error(err)
        }
        console.log(data.toString())
        eachSeries(args.splice(0,1))
      }))
    })
  }
})(args)

// Official solution
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)
