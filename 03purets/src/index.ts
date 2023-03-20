// console.log("typescript is here")
// console.log("typescript is amazing")

// class User{
//     //* we have to declare the variables which we want to use in this class in typescript
//     //* whatever we don't mark as private are public in js
//     //* public and private are keywords from typescript not in javascript
//     public email:string
//     private name:string
//     // this is the way to make anything private in js
//     // #name:string
//     readonly city:string = "Kolkata"
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }

class User {
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {
        this.email = email
        this.name = name
    }
}

const vishal = new User("vishal@gmail.com", "vishal")

//* we will get error in doing this as this variable is marked as readonly
// vishal.city = "Kolkata"

