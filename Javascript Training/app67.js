// AWAIT Functions
// We can only use the await keyword inside of functions delcared with async.
// Await will pause the execution of the function, waiting for a promise to be resolved.

// async function getPlanets() {
//   const res = await axios.get("https://swapi.dev/api/planets/");
//   // this function will not move on until the await promise is resolved.
//   console.log(res.data);
// }

// getPlanets().catch((err) => {
//   console.log("IN CATCH");
//   console.log(err);
// });

async function getPlanets() {
  try {
    // you can use try and catch to make it more specific to what we're trying to do
    const res = await axios.get("https://swapi.dev/api/planets/");
    // this function will not move on until the await promise is resolved.
    console.log(res.data);
  } catch (e) {
    console.log("IN CATCH!", e);
  }
}

getPlanets();
