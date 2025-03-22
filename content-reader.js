/**
 * Created by Ramkumar on 11/10/2016.
 */
var fs = require('fs');
var LineReader = require('line-by-line');
var fileName = './contents/data';

fs.exists(fileName, function (status) {
    if (status) {
        var reader = new LineReader(fileName, {
            encoding: 'UTF-8'
        });
        
        reader.on('line', function (line) {
            if(line) {
                console.log('Current Line : ' + line);
            }
        });

        
        reader.on('end', function () {
            console.log('Reader Completed!');
        });
    }
});


