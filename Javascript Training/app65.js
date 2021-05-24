// AXIOS - A library for making HTTP requests.
// With AXIOS you don't have to parse JSON and you don't have to weed out the bad status codes.

axios
  .get("https://swapi.dev/api/planets/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
