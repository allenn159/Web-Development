// Array call back methods. Arrays come with many built-in methods that accept call back functions. 

//forEach - accepts a callback function. calls the function once per element in the array.

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function(num) {
//     console.log(num * 2);
// })

// function printTriple(n) {
//     console.log(n * 3);
// }

// numbers.forEach(printTriple);

numbers.forEach(function(num, idx) {
    console.log(idx,num)
})

// the second parameter is the index of the array. 

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

// books.forEach(function(book) {
//     console.log(book.title.toUpperCase());
// })

// for(let book of books) {
//     console.log(book.title.toUpperCase());
// }

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i].title.toUpperCase());
// }

// These all print the same thing.

