"use strict";
// const user : (string | number)[] = [1,'vishal']
Object.defineProperty(exports, "__esModule", { value: true });
//* as we can see above using union  type we can say the data type allowed but the order of the data type cannot be declared.
//* hence we use tuple in order to mention the data type as well as order of the data type
var user;
user = ["vishal", 131, true];
//* here we have used tuples and there are three elements with data type as numbers, so we are allowed three elements with number data type only.
var rgb = [255, 123, 112];
//* here we cannot assign more values then those declared in the type User
var newUser = [121, "vishal1@gmail.com"];
//* but as tuples are arrays so we are allowed to use array methods like push,pop,shift,unshift which breaks the rule of tuples to be of fixed length over here.
newUser.push(1);
newUser.push("hello");
