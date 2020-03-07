const weightInput = document.getElementById('weightInput');
const alcoholConsumedInput = document.getElementById('alcoholConsumedInput');
const genderInput = document.getElementById('genderInput');
const hoursSinceLastDrinkInput = document.getElementById('hoursSinceLastDrinkInput');

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
  if (gender === 'male') {
    alcoholDistributionRatio = 0.73
  } else {
    alcoholDistributionRatio = 0.66
  }
  console.log(weight,alcoholConsumed, gender,hoursSinceLastDrink)
  const bloodAlcoholContent = ((alcoholConsumed * 5.14) / (weight * alcoholDistributionRatio)) - (0.015 * hoursSinceLastDrink)
  console.log(bloodAlcoholContent)
}
