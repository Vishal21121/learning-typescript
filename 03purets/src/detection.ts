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

interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function findAdmin(account: User | Admin){
    //* we are checking whether isAdmin key is present in account
    if("isAdmin" in account){
        return account.isAdmin
    }
}
