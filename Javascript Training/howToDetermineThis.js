// LESSON ON THIS

// console.log(this); <--- this needs to be a valid line.
// these two console logs will be identical. you can use this to check what the value of "this" is if it's a valid line above.
// const printThis = () => {
//   console.log(this);
// };

// printThis();

// const printThis = function () {
//   console.log(this);
// };

// printThis.call({ color: "red" });
// this will override the argument of this inside the console.log. you can also use .apply along with .call

// const colors = {
//   printColor() {
//     console.log(this);
//   },
// };

// const randomObject = {
//   a: 1,
// };

// randomObject.printColor = colors.printColor;
// randomObject.printColor();

// colors.printColor();
// whatever is to the left of the period will equal to the value of this.
