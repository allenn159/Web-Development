const searchButton = document.querySelector("#search");
const brandNameCB = document.querySelector(".brandName").children;

const babolatSearch = document.querySelector("#babolat");
const wilsonSearch = document.querySelector("#wilson");
const powerSearch = document.querySelector("#power");
const controlSearch = document.querySelector("#control");
const popularSearch = document.querySelector("#popular");

function isChecked() {
  for (var i = 0; i < brandNameCB.length; i++) {
    if (
      brandNameCB[i].tagName === "INPUT" &&
      brandNameCB[i].type === "checkbox"
    ) {
      if (brandNameCB[i].checked) {
        console.log(brandNameCB[i].value);
      }
    }
  }
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
});


//   if (isChecked() === true) {
//     console.log(isChecked);
//   } else {
//     console.log("You need to select a brand");
//   }
// });
