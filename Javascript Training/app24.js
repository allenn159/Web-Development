// Goals
// Understand Scope. Write Higher Order Functions. Pass Functions As Callbacks.

// Scope - Variable Visbility. The location where a variable is defined dictates where we have access to that variable.
// Function Scope

function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
    console.log(age);
}

function changeColor () {
    let color = 'purple';
    const age = 19;
    console.log(age);
}

lol();
changeColor();

let bird = 'mandarin duck';

function birdWatch() {
    let bird = 'golden pheasant';
}

// You can have variables with the same name as long as they are not in the same function scope.