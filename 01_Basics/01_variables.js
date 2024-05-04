const accountId = 143242442;
let accountEmail = "manasgupta.123.mg12@gmail.com";
var accountPass = "12344";
accountCity = "Jaipur";  // not prefer

let accountState;
// console.log(accountState);

// accountId = 2;  not allowed
console.log(accountId);

accountEmail = "user@gmail.com";
accountPass = "5367";
accountCity = "Saharanpur";

console.table([accountEmail,accountPass,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/