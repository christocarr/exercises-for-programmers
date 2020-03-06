const weightInput = document.getElementById('weightInput');
const numberDrinksInput = document.getElementById('drinksInput');
const genderInput = document.getElementById('genderInput');
const lastDrinkTimeInput = document.getElementById('lastDrinkTimeInput');

let weight, numberOfDrinks, gender, lastDrinkTime;
weightInput.addEventListener('change', ev => {
  weight = Number(ev.target.value)
})

numberDrinksInput.addEventListener('change', ev => {
  numberDinksInput = Number(ev.target.value)
})

genderInput.addEventListener('change', ev => {
  gender = Number(ev.target.value)
})

lastDrinkTimeInput.addEventListener('change', ev => {
  lastDrinkTime = Number(ev.target.value)
})

function calculateBloodAlcohol() {
  console.log(weight, age, gender, lastDrinkTime);
}
