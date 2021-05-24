// Destructuring
// A short, clean syntax to 'unpack':
// Values from arrays
// Properties from objects into distinct variables.

// Destructuring an array

const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

const [gold,silver,bronze] = raceResults;

//this syntax returns the same thing. creates a new variable. POSITION MATTERS.

const [first, , , fourth] = raceResults;

// add commas to skip elements in the array. 

const [winner, ...others] = raceResults;

// can you use the rest function for the rest of the contestants.



