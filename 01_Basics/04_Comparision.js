// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(1 <= 2);
// console.log(2 != 1);

// console.log("2" > 1); // automatic conversion
// console.log("02" > 1);


// always try to avoid such type of conversion
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log("2" == 2);  // true
console.log("2" === 2);  // false