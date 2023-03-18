// declaring the data type and here it is string
let greetings: string = "Hello Vishal";

let myNum = 6
greetings.toLowerCase()
console.log(greetings)

// number
// whenever we are initializing a variable at the time of declaring it then its not needed to state the type at that time typescript automatically understands the data type and it is known as type inference
let userId = 334455

// now we can use only number function
userId.toFixed()

// boolean
let isLoggedIn: boolean = false

// Any datatype in typescript: The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay

// whenever we do not assign value or do not specify the data type then typescript gives it a Any datatype which is a way of going away from typescript.

// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

// You usually want to avoid this, though, because "any" isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit "any" as an error.

let hero;
  
function getHero(){
    return "thor"
}

hero = getHero()

export {}