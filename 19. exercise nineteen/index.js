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

function displayOutput(BMI) {
  let message
  if (BMI > 18.5 && BMI < 25) {
    message = `Your BMI is ${BMI}.
    You are within the ideal weight range.`
  } else if (BMI > 25) {
    message = `Your BMI is ${BMI}.
    You are overweight and should consult your doctor.`
  } else {
    message = `Your BMI is ${BMI}.
    You are underweight and should see a doctor.`
  }

  outputDiv.textContent = message;
}