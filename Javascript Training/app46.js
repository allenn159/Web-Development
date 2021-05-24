// Destructering objects

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}

// const {first, last, time} = runner;

// Use curly brackets and put in name of the variables inside the object that you want to call.
// If you call an item that is not in the object, it will be returned as undefined.

// const {
//     country: nation, 
//     title: honorific
// } = runner;

// this will make a variable called nation based off the value found in country.

const {first, last, ...others} = runner;

// Nested Objects and Arrays

const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

const [{first: goldWinner},{country}] = results;

// adding the comma moves you into the second object.

const [,silverMedal] = results;
const{country} = silverMedal;