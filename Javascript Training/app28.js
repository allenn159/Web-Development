// Higher Order Functions
// Functions that operate on/with other functions. They can:
// Accept other functions as arguments.
// Return a function.

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

function cry() {
    console.log("BOO HOO I'M SO SAD");
}

function rage() {
    console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
    for(let i = 0; i < num; i++) {
        action();
    }
}

// repeatNTimes(rage, 13); 

function pickOne (f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5) {
        f1();
    } else {
        f2();
    }
}