// Spread in array literals
// Create a new array using an existing array. Spreads the elements from one array into a new array.

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish', ];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods];
// combines the two arrays. the order matters. whichever one is called first come first in the new array.

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cephCopy = [...cephalopods];
// makes a copy of the array


