// ASYNC Functions

// function getData() {
//   const data = axios.get("https://swapi.dev/api/planets/").then((data) => {
//     console.log(data);
//   });
//   console.log(data);
// }

// The Async Keyword
// Async functions always return a promise.
// If the function returns a value, the promise will be resolved with that value.
// If the function throws an exception, the promise will be rejected.

// function greet() {
//   return "Hello";
// }

async function greet() {
  return "Hello";
}

greet().then((val) => {
  console.log("Promise resolved with:", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers!";
  }
  return x + y;
}

// how to write without async function
// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("X and Y must be numbers!");
//     }
//     resolve(x + y);
//   });
// }
