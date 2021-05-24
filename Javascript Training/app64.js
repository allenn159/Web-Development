// // FETCH - A better way! Supports promises. Not supported in IE.

// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status Code Error ${response.status}`);

//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log("Loaded 10 more planets...");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH!", err);
//   });

// This is with Axios. With Axios, you don't have to check and parse.

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
  // make sure to return before starting next .then
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("ERROR!", err);
  });
