// console.log("typescript is here")
// console.log("typescript is amazing")

class User{
    //* we have to declare the variables which we want to use in this class
    email:string
    name:string
    readonly city:string = "Kolkata"
    constructor(email:string,name:string){
        this.email = email
        this.name = name
    }
}

const vishal = new User("vishal@gmail.com","vishal")

//* we will get error in doing this as this variable is marked as readonly
// vishal.city = "Kolkata"