// Block Scope

// if(true) {
//     const animal = 'eel';
//     console.log(animal);
// }

// console.log(animal);

// if(true) {
//     var animal = 'eel';
//     console.log(animal);
// }

// console.log(animal);

// const and let only work inside the block scope so within the function. var can be called in and outside of the block.
// they have different scoping rules. There is no block scope for var.

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// for(var i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// console.log(i);

[1,3,5]
[2,6,10]

function doubleArr(arr) {
    const results = [];
    for(let num of arr) {
        let double = num * 2
        results.push(double);
    }
    return results;
}