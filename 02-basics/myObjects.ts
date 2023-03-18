const User = {
    name: "Vishal",
    email: "vishal1@gmail.com",
    isActive: true,
}

// here it is defined that the function will take object as parameter and with two  key value pairs and their data type mentioned.
function createUser({ name: string, isPaid: boolean }) { }

let user = {
    name: "vishal", 
    isPaid: false,
    email:"vishal1@gmail.com"
}

//! Bad behavior of object as you can see that we have defined that only two elements can be there in the object passed to function as parameter but after assigning it to a variable we can pass multiple elements.
createUser(user)

// here we are mentioning the return type of the function as object
function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}

export { }