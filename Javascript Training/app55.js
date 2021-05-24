// THE DOM
// Document Object Model

// What is it?
// The DOM is a JavaScript representation of a webpage.

// THE DOCUMENT
// The entry point into the world of the DOM.

//document.getElementById("")
//document.getElementsByTagName("") - returns an array like object, but it's not an array. we can iterate over it.
//document.getElementsByClassName("") - another array imposter. not actually an array.

// don't always have to search by the document. if you make a new variable, you can get something from that new variable.

// ex const ul = document.getElementsByTagName('ul')[0]
//             ul.getElementsByClassName('special')
// you can narrow down the search.

// get element by ID does not work this way since there is only one ID.

// Method that rules them all. QUERYSELECTOR
// this can select anything :)

// querySelector - all-in-one method to select a single element. when using this, it only gives the first match.
// when using query selector to locate an id, you need to add a #. same deal with a class. you will need to use a . before.

// querySelectorAll - uses same syntax except it returns a collection
