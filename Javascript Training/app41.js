// Spread
// Spread syntax allows an interable such as an array to be expanded in places where zero or
// more arguments (for function calls) or elements (for array literals) are expected, or an object expression
// to be expanded in places where zero or more key-value pairs (for object literals) are expected.


// Pretty much expanding it.

// Spread for function calls

function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green'];

giveMeFour(...colors);

// use (...variable) to do spread function calls. 

//returns a red
//        b orange
//        c yellow
//        d green     

const str = 'GOAT';

giveMeFour(...str);

//returns a G
//        b O
//        c A
//        d T    


