const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const outputDiv = document.getElementById('outputDiv');

let length;
let width;

lengthInput.addEventListener('change', ev => {
  length = parseInt(ev.target.value);
});

widthInput.addEventListener('change', ev => {
  width = parseInt(ev.target.value);
});

function calculate() {
  const areaToPaint = length * width;
  const oneGallonCovers = 350;
  let gallonsNeeded = Math.ceil(areaToPaint / oneGallonCovers);
  createOutput(gallonsNeeded);
}

function createOutput(gallonsNeeded) {
  const outputPara = document.createElement('p');
  outputPara.textContent = `Gallons needed: ${gallonsNeeded}`;
  outputDiv.appendChild(outputPara);
}
