"use strict";
exports.__esModule = true;
// let say we want number and string has been passed as argument so it will create a problem hence we can pass the data type which should be passed as argument in the following manner.
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// we can pass the default value in the parameter by followring way: parameter:data-type=value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
var val = getUpper("hello");
console.log(val);
signUpUser("vishal", "vishal.dev", false);
loginUser("vishal", "vishal.dev");
