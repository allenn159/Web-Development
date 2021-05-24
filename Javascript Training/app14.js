// Nested Loops

// for (let i = 1; i <= 10; i++) {
//     console.log('Outer Loop:', i);
//     for (let j = 10; j >= 0; j-=2) {
//         console.log('Inner Loop:', j);
//     }
// }

// In nested loops, the outer loop will run once and then the inner loop will keep running till it finishes its cycle.


// const gameBoard = [
//     [ 4, 32, 8, 4 ],
//     [ 64, 8, 32, 2 ],
//     [ 8, 32, 16, 4 ],
//     [ 2, 8, 4, 2 ]
// ];

// let totalScore = 0;
// for(let i = 0; i < gameBoard.length; i++) {
//     let row = gameBoard[i];
//     console.log(row);
//     for(let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }

// While Loops
// A while loop continues to run as long as its test condition is true.

// let j = 0;

// while(j <= 5) {
//     console.log(j);
//     j++;

// }

// When doing a while loop, you need to name the variable before you start the loop.
// While loops excel when you don't know how many times it's going to run.
// With numbers, typically for loops are better. 

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log('Congrats You Win!!');

//while (some condition)
// in the loop, update or attempt to make that condition false

// You can use break; to break out of loops or stop it. Only happens in it's current loop. If there is an outer loop, that will keep going.

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

// May be not as intuitive to use true for the while loop.

while (true) {
    if(target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats You Win!!');