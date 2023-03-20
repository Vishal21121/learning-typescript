"use strict";
// console.log("typescript is here")
// console.log("typescript is amazing")
class User {
    constructor(email, name) {
        this.city = "Kolkata";
        this.email = email;
        this.name = name;
    }
}
const vishal = new User("vishal@gmail.com", "vishal");
//* we will get error in doing this as this variable is marked as readonly
// vishal.city = "Kolkata"
