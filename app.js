const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector("#start"),
  stop: document.querySelector("#stop"),
  body: document.querySelector("body"),
};

refs.start.addEventListener("click", onStartClick);
refs.stop.addEventListener("click", onStopClick);

let timerId = null;

function onStartClick() {
  timerId = setInterval(() => {
    refs.body.style.background =
      colors[randomIntegerFromInterval(0, colors.length)];
    refs.start.disabled = true;
    refs.stop.disabled = false;
  }, 1000);
}
function onStopClick() {
  clearInterval(timerId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}
