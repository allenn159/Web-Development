// Callback Functions
// These are functions that are passed into another function as an argument, which is t hen invoked inside the outer function.

// function grumpus () {
//     alert("GAHH GO AWAY!");
// }

// setTimeout(function() {
//     alert('Welcome!');
// }, 5000); 

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert('WHY DID YOU CLICK ME?!');
});

// Hoisting 

// console.log(animal);
// var animal = 'Tapir';

// the log will run as undefined. 

// console.log(shrimp);
// let shrimp = 'Harlequin Shrimp';

// this will give an error has variables made with let are not hoisted. same thing happens when using const.

// howl();

// function howl() {
//     console.log('AWOOOOOO');
// }

// This will still work. 


hoot()
var hoot = function() {
    console.log('HOOO HOOO');
}

//This will not run but the variable hoot does exist as undefined. This will not work because this is a function express. These are not hoisted.