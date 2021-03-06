// Filter
// Creates a new array with all elements that pass the test implemented by the provided function.

const nums = [34, 35, 102, 223, 343 , 10, 15, 2];

const odds = nums.filter(n => n % 2 === 1);
// this will filter out all the odd numbers and create a new array with them.

const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n >= 100);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const goodBooks = books.filter(b => b.rating > 4.3);

const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
))

const shortForm = books.filter(book => (
    book.genres.includes('short stories') || 
    book.genres.includes('essays') 
))

const query = 'The';
const results = books.filter(book => {
   const title = book.title.toLowerCase();
   return title.includes(query.toLowerCase())
})