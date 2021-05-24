// Map

// Creates a new array with the results of calling a callback on every element in the array.

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
    return num * 2;
})

// you have to return something to make the function work with map. 

const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.');
})