interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //* here we are declaring that there must be a function with name startTrial with return type string

    // first way
    // startTrial: () => string

    // second way
    startTrial(): string,

    //* here we are stating that there should be a function of name getCoupon with parameter name couponName can be different with string type and value name can also be different with data type number  and return type number
    getCoupon(couponName: string, value: number): number
}

const vishal: User = {
    dbId: 22, email: "vishal1@gmail.com", userId: 121, startTrial: () => { return " hello " },
    //* parameter name can be different from the thing provided in definition of User
    getCoupon: (name: "vishal10", off:10) => 10
}

vishal.email = "hello@gmail.com"

// vishal.dbId = 21