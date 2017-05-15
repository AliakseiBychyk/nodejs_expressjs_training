var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(3000, function () {
  console.log('Listening on port 3000')
});


// var http = require('http');


// var myServer = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write('<h1>Roux Meetups</h1>');
//   res.end();
// });

// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');