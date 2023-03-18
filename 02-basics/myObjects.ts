const User = {
    name: "Vishal",
    email: "vishal1@gmail.com",
    isActive: true,
}

//* here it is defined that the function will take object as parameter and with two  key value pairs and their data type mentioned.
//* function createUser({ name: string, isPaid: boolean }) { }

let user = {
    name: "vishal", 
    isPaid: false,
    email:"vishal1@gmail.com"
}

//! Bad behavior of object as you can see that we have defined that only two elements can be there in the object passed to function as parameter but after assigning it to a variable we can pass multiple elements.
// createUser(user)

//* here we are mentioning the return type of the function as object
function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}


//* creating a type aliase and here type is a typescript keyword
// type User = {
//     name:string;
//     email:string;
//     isActive: boolean
// }

//* by this we can make create alias for boolean as bool and we can either use boolean or bool 
// type bool = boolean;

//* here we are taking parameter as User and returning with User data type as well.
// function createUser(user: User):User{
//     return user
// }

// createUser({name:"",email:"",isActive:true})


type User = {
    //* by adding readonly we are making sure that _id is not reassignable but if the _id is array type then we can push value in it.
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    //*  "?" make this field as optional 
    credcardDetails?: number
}

let myUser: User = {
    _id:"1234",
    name:"vishal",
    email:"vishal1@gmail.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate : string;
}

//* here we are concatinating the types of cardNumber cardDate and a new type into cardDetails
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "vishal@gmail.com"
//* we cannot do this
// myUser._id = "12"

console.log(myUser)



export { }