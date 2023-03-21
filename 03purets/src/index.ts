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

    // private _coureseCount = 1

    //* protected members can be accessed within the class and in the class which is extending it but not by any object of any class.
    protected _coureseCount = 1

    readonly city: string = "Kolkata"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {
        this.email = email
        this.name = name
    }

    //* as this is a private property so it cannot be accessed outside the class
    private deleteToken() {
        console.log("Token deleted")
    }

    // getter function
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // returning the value of the private variable
    get courseCount(): number {
        return this._coureseCount
    }

    //* In typescript, setter should not have any statement indicating the return
    //* as in this function there is no return function
    set courseCount(coureseNum) {
        if (coureseNum <= 1) {
            throw new Error("courese count should be more than 1")
        }
        this._coureseCount = coureseNum
    }




}

class SubUser extends User{
    isFamily : boolean = true
    changeCourseCount(){
        this._coureseCount = 4
    }
}

const vishal = new User("vishal@gmail.com", "vishal")

//* we will get error in doing this as this variable is marked as readonly
// vishal.city = "Kolkata"


