var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('<html><body><h1>Hello, World!</h1></body></html>');

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
