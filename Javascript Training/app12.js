// Lesson on loops

// for (
//     [initialExpression];
//     [condition];
//     [incrementExpression];
// ) {

// }

// for(let i = 1; i <= 10; i++) {
//     console.log('Hello!:', i);
// }

// for(let i = 1; i <= 20; i++) {
//     console.log(`${i}x${i} = ${i * i}`);
// }

// for (let i = 50; i >= 0; i -= 10) {
//     console.log(i);
// }

for (let i = 200; i >= 0; i -= 25){
    console.log(i);
}

// You want to avoid infinite loops!! They are bad.
// This happens with the condition is never met and the code just keeps running. Browser will get angry >:|.

// DON'T RUN THIS!
// for (let i = 1; i !==20; i += 2) {
    // console.log(i);
// }