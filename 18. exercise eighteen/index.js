const celsiusOption = document.getElementById('celsiusOption')
const fahrenheitOption = document.getElementById('fahrenheitOption')
const tempInput = document.getElementById('tempInput')

let tempType
let temp
celsiusOption.addEventListener('click', ev => {
  tempType = ev.target.value
})
fahrenheitOption.addEventListener('click', ev => {
  tempType = ev.target.value
})
tempInput.addEventListener('change', ev => {
  temp = ev.target.value
})

function convertTemp() {
  let tempErrorInputMessage, tempTypeErrorMessage
  if (temp !== Number) {
    tempErrorInputMessage = 'Temperature must be a number.'
  }
  if (tempType === '') {
    tempTypeErrorMessage = 'Please select a temperature type to convert to.'
  }
}
