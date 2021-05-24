// Dice roll

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
   for (let i = 0; i < numRolls; i++) {
      rollDie();
   }
}

// Function Arguments. The 'nickname' is actually called a parameter. The argument is what goes inside as nickname is just a placeholder.

function greet(nickname) {
    console.log(`Hi, ${nickname}!`);
}

// Functions with multiple inputs or arguments.

function sum (x, y) {
    console.log(x + y);
}

function divide(a, b) {
    console.log(a / b);
}

// Return Statement

function add (x, y) {
    return (x + y);
}

// We return something from the function that we can capture later.
// You can only return one thing from a function.

function square(x) {
    return x*x;
    console.log("ALL DONE!");
}

// the console.log is not ran after the return function because it moves on 
// after the return function occurs. 

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//         return false;
// }

// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// }

function containsPurple (arr) {
    for (let color of arr) {
        if(color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}