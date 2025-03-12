/**
 * Created by Ramkumar on 11/10/2016.
 */
var Calculator = require('./calculator');
console.log('Welcome to the World of Node!');

var calculator = new Calculator();
var output = calculator.add(10, 20, 30, 40, 50);

console.log('Output : ' + output);

//require('./Eventing');

require('./content-reader');




