
var http = require('http');
var DEFAULT_PORT = 9090;
var HTTP_OK = 200;
var portNumber = process.env.PORT_NUMBER || DEFAULT_PORT;
var header = {
    contentType: 'text/html',
    transferEncoding: 'chunked',
    maxAge: 1000
};
var server = http.createServer(
    function (request, response) {
        response.writeHead(HTTP_OK, header);
        response.write('<h1>Welcome to the World of Node Server!</h1>');
        response.end();
    });
server.listen(portNumber);
console.log('Server is Ready!');

