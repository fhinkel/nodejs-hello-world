var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("welcome to node js !");

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

