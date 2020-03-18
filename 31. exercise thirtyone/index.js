const ageInput = document.getElementById('ageInput')
const restingPulseInput = document.getElementById('restingPulseInput')

let age
let restingPulse
ageInput.addEventListener('change', (ev) => {
  age = Number(ev.target.value)
})
restingPulseInput.addEventListener('change', (ev) => {
  restingPulse = Number(ev.target.value)
})