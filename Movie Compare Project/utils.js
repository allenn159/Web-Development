// this is for there to be a delay after typing words in the search bar before it finalizes the search request.
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      // the apply functions says call the function and take all the arguments and pass them in as separate arguments to the original function.
      func.apply(null, args);
    }, delay);
  };
};


