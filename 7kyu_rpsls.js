// Rock-Paper-Scissors Big Bang Style
// According to Sheldon Cooper the following is true:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// ( and as it always has ) Rock crushes Scissors
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

// Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".

// const rpsls = (p1, p2) => {
//     const rules = {
//         rock: ['scissors', "lizard"],
//         paper: ['rock', "spock"],
//         scissors: ['paper', "lizard"],
//         spock: ["scissors", "rock"],
//         lizard: ["spock", "paper"]
//     };
//     if (p1 === p2) {
//         return `Draw!`;
//     } else {
//         return `Player ${rules[p1][0] === p2 || rules[p1][1] === p2 ? 1 : 2} won!`;
//     }
// }

const rpsls = (p1, p2) => {
    const rules = {
        rock: ['scissors', "lizard"],
        paper: ['rock', "spock"],
        scissors: ['paper', "lizard"],
        spock: ["scissors", "rock"],
        lizard: ["spock", "paper"]
    };
    return p1 === p2 ? `Draw!` : `Player ${rules[p1][0] === p2 || rules[p1][1] === p2 ? 1 : 2} Won!`;
}

console.log(rpsls('rock', 'lizard')); // should be player 1
console.log(rpsls('paper', 'rock')); // should be player 1
console.log(rpsls('paper', 'paper')); // should be player 1
console.log(rpsls('spock', 'lizard')); // should be player 2
