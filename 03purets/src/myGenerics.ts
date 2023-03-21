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
