// let say we want number and string has been passed as argument so it will create a problem hence we can pass the data type which should be passed as argument in the following manner.

// here we are specifying the return type by passing :data-type before { and after )
function addTwo(num: number): number {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

// we can pass the default value in the parameter by followring way: parameter:data-type=value
let loginUser = (name: string, email, isPaid: boolean = false) => { }

addTwo(5)
let val = getUpper("hello")
console.log(val)

signUpUser("vishal", "vishal.dev", false)
loginUser("vishal", "vishal.dev")

// this is the situation where we have to pass more than one data type hence we will learn ho to handle these cases in future.
function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

// this is the way to specify the parameter and return data type
const getHello = (s: string): string => {
    return ""
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1,2,3]

// so here typescript automatically understands the data type which is comming as paramter in hero.
heros.map((hero) : string => `hero is ${hero}`)
        

function consoleError(errMsg:string):void{
    console.log(errMsg)
}

// never keyword: Some functions never return a value:

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}

export {}