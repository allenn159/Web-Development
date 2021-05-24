// Arrow Functions
// Alternative way to display a function

// const square = function(x) {
//     return x * x;
// }

// const square = x => {
//     return x * x;
// }

const isEven = num => {
    return num % 2 === 0;
}

const multiply = (x,y) => {
    return x*y;
}

// Parens are optional if there's only one parameter. This is a matter of personal preference. That being said, some companies may have specific guidelines.  
// If we define a function with no parameters, it still needs the empty parens.

// Implicit Return - some arrow functions don't need to have return written.

// const square = (n) => {
//     return n * n;
// }

// const square = (n) => (
//     n * n
// )

// const square = (n) => n * n;


// If the code gets long, use the parens. 

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1= nums.map(function(n) {
    return n*2;
})

const doubles2 = nums.map(n => {
    return n * 2;
})

const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function(n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })

const parityList = nums.map((n) => (
    n % 2 === 0 ? 'even' : 'odd'
));
