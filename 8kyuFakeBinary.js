// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript 

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] < "5") {
            result += "0";
        } else {
            result += "1";
        }
    }
    return result;
}

//   test 
console.log(fakeBin('45385593107843568'));



// clever answers
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(x) {
//     return x.replace(/\d/g, d => d < 5 ? 0 : 1);
//   }

