const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const restartButton = document.createElement("button");
const restartIcon = document.createElement("icon");
const buttons = document.querySelector(".buttons");

const addButton = () => {
  restartButton.setAttribute("id", "restart");
  restartIcon.setAttribute("class", "fas fa-history");
  buttons.appendChild(restartButton);
  restartButton.appendChild(restartIcon);
};

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer is completed");
    addButton();
  },
});
