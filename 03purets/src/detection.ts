//* actually what we are dealing here is that while dealing with types we need to deal with some special cases like empty string in the below example

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}


function provideId(id: string | null) {
    if (!id) {
        console.log("please provide ID")
        return
    }
    id.toLowerCase()
}

//* We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.
function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

//* In operator narrowing

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function findAdmin(account: User | Admin) {
    //* we are checking whether isAdmin key is present in account
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

//* Instance of Narrowing

function logValue(x: Date | string) {
    //* here we are checking whether x is instance of Date or not
    //* instance of opearator is ued when there use of new keyword
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());

    }
}

//* type predicates

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

//* by writing pet is Fish we are returning that pet is Fish and not true or false
function isFish(pet: Fish | Bird): pet is Fish {
    //* while writing pet as Fish we typecasted pet to Fish and then we are checking whether the swim property is there or not 
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}