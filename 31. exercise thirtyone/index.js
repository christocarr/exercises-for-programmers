const ageInput = document.getElementById('ageInput')
const restingPulseInput = document.getElementById('restingPulseInput')

let age = 0;
let restingPulse = 0;
ageInput.addEventListener('keyup', (ev) => {
  age = Number(ev.target.value)
})
restingPulseInput.addEventListener('keyup', (ev) => {
  restingPulse = Number(ev.target.value)
})

const calculate = () => {
  let intensity = 55
  const targetHeartRate = (((220 - age) - restingPulse) * intensity) + restingPulse
  console.log(targetHeartRate)
}