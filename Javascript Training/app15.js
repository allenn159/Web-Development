// For of loop - a nice and easy way of iterating over arrays.

// let subreddits = [ 'soccer', 'popheads', 'cringe', 'books'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i]);
// }

// This is the for of loop.

// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }

// The sub or char in these scenarios can be whatever you want.

const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8 ]
];

// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for (j = 0; j < row.length; j++) {
//         console.log(row[j]);
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//     let sum = 0;
//     for(let num of row) {
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
    
}

// for of loops are great, but if you need the index or position, for loops are the way to go.
