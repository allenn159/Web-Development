const findButton = document.querySelector("#find");
const checkboxes = document.querySelectorAll(
  ".checkboxes input[type=checkbox]"
);

const checkboxesAreChecked = checkboxes.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.checked) {
      return true;
    } else {
      return false;
    }
  });
});

const beforeSubmit = () => {
  if (checkboxesAreChecked === true) {
    console.log("Time to search!");
  } else {
    console.log("You need to select an option");
  }
};

// const checkboxArray = Array.from(checkboxes);
// let isChecked = [];

// findButton.addEventListener("click", () => {
//   isChecked = [];
//   checkboxArray.forEach((el) => {
//     isChecked.push(el.checked);
//   });
//   postSubmit();
// });

// function postSubmit() {
//   if (isChecked.every((e) => e === false)) {
//     console.log("You need to search for something...");
//   } else {
//     console.log("You selected something!");
//   }
// }
