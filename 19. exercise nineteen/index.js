const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const outputDiv = document.getElementById('outputDiv');

let weight, height;
weightInput.addEventListener('change', ev => {
  weight = Number(ev.target.value);
});
heightInput.addEventListener('change', ev => {
  height = Number(ev.target.value);
});

function calculateBMI() {
  const BMI = (weight / (height * height)) * 703;
  displayOutput(BMI)
}

