/**
 * Created by Ramkumar on 11/10/2016.
 */
var express = require('express');
var util = require('util');
var os = require('os');

var app = new express();
var portNumber = process.env.PORT_NUMBER || 9090;
var webFolder = __dirname + "/web";


app.use('/', express.static(webFolder));
app.listen(portNumber);

var message = util.format('Web server is ready at http://%s:%d/',
    os.hostname(), portNumber);

console.log(message);


