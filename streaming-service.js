/**
 * Created by Ramkumar on 11/10/2016.
 */
var fs = require('fs');
var http = require('http');

var portNumber = process.env.PORT_NUMBER || 9090;
var mediaHeader = {
    'Content-Type': 'video/x-ms-wmv',
    'Transfer-Encoding': 'chunked',
    'Keep-Alive': true
};
var mediaFileName = './videos/OrderProcess.wmv';
var server = http.createServer(
    function (request, response) {
        fs.exists(mediaFileName, function (status) {
            if (status) {
                response.writeHead(200, mediaHeader);

                var mediaStream = fs.createReadStream(mediaFileName, {
                    bufferSize: 1024000
                });

                mediaStream.pipe(response);

                mediaStream.on('end', function () {
                    response.end();
                });
            }
        });
    });

server.listen(portNumber);

console.log('media server is available on http://ramasuspc:9090');
