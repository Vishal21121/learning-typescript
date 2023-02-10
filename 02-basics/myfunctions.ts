// let say we want number and string has been passed as argument so it will create a problem hence we can pass the data type which should be passed as argument in the following manner.
function addTwo(num:number){
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){}

// we can pass the default value in the parameter by followring way: parameter:data-type=value
let loginUser = (name:string,email,isPaid:boolean=false)=>{}

addTwo(5)
let val = getUpper("hello")
console.log(val)

signUpUser("vishal","vishal.dev",false)

loginUser("vishal","vishal.dev")

export{ }