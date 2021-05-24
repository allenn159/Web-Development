// Rest - looks like spread, but it's not!
// Rest collets things down to a single array.
// It's put inside the parens of a function as ...whateverYouWantToCallIt.

//OLD WAY

// function sum() {
//     const argsArr = [...arguments]
//     return argsArr.reduce((total, currVal) => {
//         return total + currVal;
//     })
// }

// function fullName(first, last) {
//     console.log(arguments);
// }

// Arguments is the old way to do things. Does not work with arrow function. 
// Arguments is not a real array. You have to turn it into an array if you want true array methods. 

//REST IS THE NEW WAY BABY

function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal;
    })
}

// sum(4,5,6,7)
// returns
// 22

// Rest can collect remaining arguments that have not been matched with a parameter.

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

// the ...titles will collect everything else that is not a first or last name.
// ORDER MATTERS! Rest has to be the last parameter.

const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)