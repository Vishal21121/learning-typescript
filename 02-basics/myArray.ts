
//* like this we are stating the data type for the array
//* and here it is a array of string
const superHeros: string[] = []

//* here it is array of number
// const heroPower: number[] = []

//* this is another way to declare the data type for array
const heroPower: Array<number> = []

type User = {
    name: string;
    isActive: boolean
}

//* declaring array with the data type User
const allUsers: User[] = []

//* here it is way of declaring the data type for 2-d array
const mlModels: number[][] = [
    [255,255,255],
    []
]


superHeros.push("Iron man")
heroPower.push(3000)

allUsers.push({name:"", isActive:true})