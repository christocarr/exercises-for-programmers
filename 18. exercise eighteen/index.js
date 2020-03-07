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

