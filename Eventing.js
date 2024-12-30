/**
 * Created by Ramkumar on 11/10/2016.
 */




var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('calc-done',
    function (data) {
        console.log('Calculation Done ... Callback ... ' +
            JSON.stringify(data));
    });
event.once('calc-done',
    function () {
        console.log('Only once calculation done handle!');
    });

setInterval(function () {
    event.emit('calc-done', {
        value: Math.floor(Math.random() * ( 1000 - 1) + 1)
    });
}, 3000);
