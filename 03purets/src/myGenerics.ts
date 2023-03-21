const score : Array<number> = []
const names: Array<string> = []

function identityOne(val:number | boolean) : number | boolean{
    return val
}

//* over here if we use any then we can take number as input and can return string as the parameter and return data type is any
function identityTwo(val:any):any{
    return val
}


//* in generics we return the same data type what we have get as input in the parameter
function identityThree<Type>(val:Type):Type{
    return val
}

// identityThree(true)

//* whatever we have written in <T> we need to write that only over every data type place
function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand: string,
    type: number,
}

//* calling the function identityFour
identityFour<Bottle>({brand:"Milton",type:1})


function getSearchProducts<T>(products:T[]):T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//* while working with react this , after T in <T,> is given intentionally so that it can be separated from jsx
const getMoreSearchProducts = <T,>(products:T[]):T=>{
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}
