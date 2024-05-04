let score = "33abc";
console.log(typeof score);
console.log(typeof(score));

let valueInNUmber = Number(score);
console.log(typeof valueInNUmber);
console.log(valueInNUmber);
console.log(typeof(NaN));  // number

console.log("*******************");
let score2 = null;
console.log(typeof score2);
let valueInNUmber2 = Number(score2);
console.log(typeof valueInNUmber2);
console.log(valueInNUmber2);


// when we convert it into number...
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

// when we convert it into boolean
// 1 => true
// 0 => false
// "manas" => true