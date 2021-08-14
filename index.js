const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#872954',
  '#450964',
  '#000000',
];

const startBtnRef = document.querySelector('#start');
const stopBtnRef = document.querySelector('#stop');
const bodyRef = document.querySelector('body');

let changeColorId = 0;
// let changeColor = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  bodyRef.style.backgroundColor = colors[colorIndex];
}

function startChangeColor() {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  changeColorId = setInterval(randomColor, 1000);
}

function stopChangeColor() {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
  clearInterval(changeColorId);
}
startBtnRef.addEventListener('click', startChangeColor);
stopBtnRef.addEventListener('click', stopChangeColor);

// function randomColor() {
//   return `rgb(${randomIntegerFromInterval(0, 255)}, 
//   ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)})`;
// }