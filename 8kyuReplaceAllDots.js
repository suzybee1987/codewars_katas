// https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

const replaceDots = str => str.split(".").join("-")

// test 

console.log(replaceDots("one.two.three"))