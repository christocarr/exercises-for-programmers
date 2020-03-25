const weightInput = document.getElementById('weightInput');
const alcoholConsumedInput = document.getElementById('alcoholConsumedInput');
const genderInput = document.getElementById('genderInput');
const hoursSinceLastDrinkInput = document.getElementById('hoursSinceLastDrinkInput');
const outputDiv = document.getElementById('outputDiv')

let weight, alcoholConsumed, gender, hoursSinceLastDrink;
weightInput.addEventListener('change', ev => {
  weight = Number(ev.target.value)
})

alcoholConsumedInput.addEventListener('change', ev => {
  alcoholConsumed = Number(ev.target.value)
})

genderInput.addEventListener('change', ev => {
  gender = ev.target.value
})

hoursSinceLastDrinkInput.addEventListener('change', ev => {
  hoursSinceLastDrink = Number(ev.target.value)
})

function calculateBloodAlcohol() {
  let alcoholDistributionRatio;
  let message;
  if (gender === 'male') {
    alcoholDistributionRatio = 0.73
  } else {
    alcoholDistributionRatio = 0.66
  }
  console.log(weight,alcoholConsumed, gender,hoursSinceLastDrink)
  const bloodAlcoholContent = ((alcoholConsumed * 5.14) / (weight * alcoholDistributionRatio)) - (0.015 * hoursSinceLastDrink)
  
  if (bloodAlcoholContent >= 0.08) {
    message = `Your BAC is ${bloodAlcoholContent}, it is not legal for you to drive.`
  } else {
    message = `Your BAC is ${bloodAlcoholContent}, you can drive.`
  }

  displayOutput(message)
}

function displayOutput(message) {
  outputDiv.textContent = message
}