"use strict";
// let say we want number and string has been passed as argument so it will create a problem hence we can pass the data type which should be passed as argument in the following manner.
Object.defineProperty(exports, "__esModule", { value: true });
// here we are specifying the return type by passing :data-type before { and after )
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
// this is the situation where we have to pass more than one data type hence we will learn ho to handle these cases in future.
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
// this is the way to specify the parameter and return data type
var getHello = function (s) {
    return "";
};
// const heros = ["thor", "spiderman", "ironman"]
var heros = [1, 2, 3];
// so here typescript automatically understands the data type which is comming as paramter in hero.
heros.map(function (hero) { return "hero is ".concat(hero); });
function consoleError(errMsg) {
    console.log(errMsg);
}
// never keyword: Some functions never return a value:
function handleError(errMsg) {
    throw new Error(errMsg);
}
// by this we can make create alias for boolean as bool and we can either use boolean or bool 
// type bool = boolean;
// here we are taking parameter as User and returning with User data type as well.
function createUser(user) {
    return user;
}
createUser({ name: "", email: "", isActive: true });
