//concat - merge arrays

// let fruits = ['apple', 'banana'];
// let veggies = ['asparagus', 'brussel sprouts'];
// let meats = ['steak', 'chicken breast'];

// console.log(fruits.concat(veggies));
// console.log(veggies.concat(fruits));

// let allFood = fruits.concat(veggies, meats);

// Includes and indexOf. Includes look for a value. Gives you a true or false value if it can find it or not. 
// indexOf is just like str.indexOf.

// reverse - reverses an array in place. It does not make a copy and mutates the original array.
// join - takes an array and spits out a string where it joins all the elements in that array into one single string.

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

// slice - takes a portion of an array and makes a new array with it. does not modify original array. 

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0,3);

let mammals = animals.slice(2,4);

let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);

// you can animals.slice() to get a quick copy of the array. 

// splice - it removes, replaces, or adds in new elements within an array. 

let animals2 = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// animals2.splice(1,0,'octopus'); // added octopus after shark.
animals2.splice(3,3); //deletes 3 items starting from index 3.

// sort - sorts an array. 

let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
