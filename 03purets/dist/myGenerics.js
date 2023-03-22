"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
//* over here if we use any then we can take number as input and can return string as the parameter and return data type is any
function identityTwo(val) {
    return val;
}
//* in generics we return the same data type what we have get as input in the parameter
function identityThree(val) {
    return val;
}
// identityThree(true)
//* whatever we have written in <T> we need to write that only over every data type place
function identityFour(val) {
    return val;
}
//* calling the function identityFour
identityFour({ brand: "Milton", type: 1 });
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//* while working with react this , after T in <T,> is given intentionally so that it can be separated from jsx
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
//* allowing multiple generics and one generics is extending another data type
//* although we are using generics we are limiting the data type to Database interface only
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction("hello", { connection: "", username: "", password: "" });
//* there are two sellable items and we are taking any thing among them as we are using generics
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
