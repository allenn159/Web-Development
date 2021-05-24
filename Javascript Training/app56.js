// Working with innerText & textContent
// .innerText shows all the text content itself. .textContent shows text content plus how it's formatted. text content
// also shows text you normall wouldn't be able to see such as something from a script.
// textContent is technically faster but you will probably want to use innerText. either is fine.

// .innerHTML - going to retrieve not only the text inside an element but all other tags. you can add new html with this tag. however,
// you have to write it as a string. that being said, this is not the ideal way to add elements.

// .value shows that value entered into something like a form or input.

//.getAttribute() and setAttribute(). these are methods. lets you get and change an attribute.

// use .parentElement to find or change the parent element. .children contains an array like element with the code inside of
// whatever you call. pretty much the opposite of the .parentElement.

// you can use .nextElementSibling to find the second element. silblings are on the same level as they share a parent.
// you can also use .previousElementSibling to go back to the previous element.

// How to change multiple elements (see app js 57).

// Changing styles using JavaScript
// In JS the property names are camel cased.
// Style lets you change properties one at a time.
// Style will only show properties that are on the same line as the code, not on a separate style sheet.
// THIS IS ANOTHER WAY DOWN HERE

// getComputedStyle()
// Good way to figure out whats going on in the page.

// .classList()
// use this to change css properties after making a new property on the style sheet. You can call it with the .classList()

// .createElement('')
// .appendChild() - method that we call on a parent that we want to append an element onto.
// .insertBefore() - look up rules
// .insertAdjacentElement() - look up rules
// append() - can insert multiple elements at once. adds multiple elements to the end.
// prepend() - same idea but it will make things a first child.

//removeChild() remove() - look up rules
