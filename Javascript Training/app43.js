// Spread in Object Literals

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
};

//when using a spread for objects, use the curly brackets.

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

const catDog = {
    ...canine,
    ...feline
}

// what happens when they have similar items in the their objects?
// they just overwrite eachother in objects.

const tripod = {
    ...canine,
    legs: 3
}

// order matters. the legs from ...canine get overwritten from the new legs: 3 which are applied.

// we can use spread to create a clone of an object. just like arrays, this is only one level deep.

const catDogClone = {
    ...catDog
}

// object cannot be spread into an array. arrays can be spread into objects. 

const random = [...'hello', {
    ...catDog
}]

//returns 
// 0: "h"
// 1: "e"
// 2: "l"
// 3: "l"
// 4: "o"
// 5:
// family: "Felidae"
// furry: true
// legs: 4