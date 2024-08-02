// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with an array of comments. Each comment should have a name and message property.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify([
      {name: 'John', message: 'Hello!'},
      {name: 'Mary', message: 'Hi!'},
      {name: 'Joe', message: 'Hey!'}
    ]));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
}).listen(3000, '');

