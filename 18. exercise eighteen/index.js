const celsiusOption = document.getElementById('celsiusOption');
const fahrenheitOption = document.getElementById('fahrenheitOption');
const tempInput = document.getElementById('tempInput');

let tempType;
let temp;
celsiusOption.addEventListener('click', ev => {
  tempType = ev.target.value;
});
fahrenheitOption.addEventListener('click', ev => {
  tempType = ev.target.value;
});
tempInput.addEventListener('change', ev => {
  temp = ev.target.value;
});

function convertTemp() {
  let tempErrorInputMessage, tempTypeErrorMessage, convertedTemp;
  if (temp !== Number) {
    tempErrorInputMessage = 'Temperature must be a number.';
  }
  if (!celsiusOption.checked && !fahrenheitOption.checked) {
    tempTypeErrorMessage = 'Please select a temperature type to convert to.';
  }

  if (tempType === 'celsius') {
    convertedTemp = (temp - 32) * 5 / 9
    console.log(convertedTemp)
  } else if (tempType === 'fahrenheit') {
    convertedTemp = (temp *  9 / 5) + 32
    console.log(convertedTemp)
  }
}
