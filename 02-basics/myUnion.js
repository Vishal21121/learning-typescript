//* with the help of pipe known as union types we can allow the variable to have either number or string as data type
var score = 33;
score = 44;
score = "55";
//* here we are doing the pipe operation b/w User and Admin type data type
var vishal = { name: "vishal", id: 31 };
vishal = { username: "v@123", id: 31 };
// function getDBId(id: number | string){
//     // making some API calls
//     console.log(`DB id is ${id}`)
// }
getDBId(3);
getDBId("3");
//* here id can have either of number or string data type but this will not allow to use the functions w.r.t a particular data type directly, we have to perform data type check before using those functions
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//* array
var data1 = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3", "4", "5"];
//* here we are mentioning the data types that are allowed in this array using union types.
var data3 = [1, 2, 3, "4", true];
//* like this we can make sure that the variable will only have values among the mentioned values.
var seatAllotment;
//* this is allowed as we are providing values among three of the above mentioned
seatAllotment = "aisle";
//* this is not allowed.
// seatAllotment = "crew"
