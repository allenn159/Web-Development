// let shoppingList = [ 'cheddar cheese', '2% milk' ];

//Useful when wanting to change a specific value that's already in an array.

// shoppingList[1] = 'Whole Milk';

// Not a great way to add things to an array at the end. 

// shoppingList[shoppingList.length] = 'Tomatoes';
// shoppingList[shoppingList.length] = 'Potatoes';

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

//Push adds something to the end. Pop removes the last item. This will take them off of the array itself.

topSongs.push('Fortunate Son');
topSongs.pop();

let dishesToDo =  ['big platter'];

dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');

// Unshift adds stuff to the front. Shift takes the first item away. You can add multiple items with the unshift option. 
// However, this is different then just adding them one at a time because the order is preserved.