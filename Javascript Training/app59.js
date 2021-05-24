// DOM Events
// clicks, drags, drops, hover etc.
// Events are not camelcased.

// Some examples
// the thing            event type              the code to run
// button               click                   change the color
// input                hits return             get search results
// image                mouseover               display the img caption

// Ways NOT to add events.
// don't add it directly onto the html element.

// const btn = document.querySelector("#clicker");

// btn.onclick = () => {
//   console.log("YOU CLICKED ME! GO AWAY");
// };

// NOT THE WAY

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("YOU CLICKED ME!!!!");
});

btn.addEventListener("click", () => {
  console.log("SECOND THING!!!");
});

btn.addEventListener("mouseover", () => {
  btn.innerText = "Stop Touching Me";
});

btn.addEventListener("mouseout", () => {
  btn.innerText = "Click Me!";
});

// THIS IS THE WAY!

window.addEventListener("scroll", () => {
  console.log("STOP SCROLLING!");
});
