// primitive types

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// reassigning the value of primitive types doesn't automatically
// change if another variable is assigned to them
// we would expect scoreTwo below to = 100 however... 
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
// different for reference types. Due to the 'pointer' on the stack and one
// object on the heap if you update value of userOne it will also update
// userTwo
userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);