let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// converting a number is fine 
// converting a mix will give nan 
// converting a whole string will give again nan 
// null will give 0 and undefined will give nan 
// true and false will give 0 or 1 


let IsLoggedIn = "Ali"
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

// 1 give true 
// "" gives false 
// " Ali " will give true 



