// primitive 
// there are 7 categories
// 1. string
// 2. Number
// 3. boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

const score = 100;
const scoreVal = 100.3;
const isLoggedIn = true;
const temp = null;
let user;  // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // false

const bigNumber = 34787838117387n;

/*
Javascript has dynamically typed language and from one point of view, it is good because it’s pretty simple to assign values to the variables.

You don’t need to care about the type of the variable because the type for each variable will be set dynamically during code execution.

*/

// reference type/non primitive 

// 1. Array
// 2. Objects
// 3. Functions

const heros = ["superman","spiderman","batman"];
console.log(heros);

const obj1 = {
    name : "Manas",
    age : 22
};

console.log(obj1);

function myFunc() {
    console.log("Hello World!");
}

myFunc();
