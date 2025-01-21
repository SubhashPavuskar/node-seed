/**
 * Created by Ramkumar on 11/10/2016.
 */
function Calculator() {
}
Calculator.prototype.add = function () {
    var parameters = arguments;
    var result = 0;
    for (var index in parameters) {
        result += parameters[index];
    }
        return result;
};
module.exports = Calculator;
