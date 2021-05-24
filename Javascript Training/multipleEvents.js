const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const changeColor = function (evt) {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
  console.log(
    `You changed the background color to ${this.style.backgroundColor}`
  );
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}

document.body.addEventListener("keypress", (e) => {
  console.log(e);
});
