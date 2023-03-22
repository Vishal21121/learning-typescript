"use strict";
//* actually what we are dealing here is that while dealing with types we need to deal with some special cases like empty string in the below example
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase();
}
//* We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function findAdmin(account) {
    //* we are checking whether isAdmin key is present in account
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//* Instance of Narrowing
function logValue(x) {
    //* here we are checking whether x is instance of Date or not
    //* instance of opearator is ued when there use of new keyword
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//* by writing pet is Fish we are returning that pet is Fish and not true or false
function isFish(pet) {
    //* while writing pet as Fish we typecasted pet to Fish and then we are checking whether the swim property is there or not 
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
