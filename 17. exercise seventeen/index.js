const weightInput = document.getElementById('weightInput');
const numberDinksInput = document.getElementById('drinksInput');
const genderInput = document.getElementById('genderInput');
const lastDrinkTimeInput = document.getElementById('lastDrinkTimeInput');

let weight, numberOfDrinks, gender, lastDrinkTime;
weightInput.addEventListener('change', ev => {
  weight = Num(ev.target.value)
})

numberDrinksInput.addEventListener('change', ev => {
  numberDinksInput = Num(ev.target.value)
})

genderInput.addEventListener('change', ev => {
  gender = Num(ev.target.value)
})

lastDrinkTimeInput.addEventListener('change', ev => {
  lastDrinkTime = Num(ev.target.value)
})

function calculateBloodAlcohol() {
  console.log(weight, age, gender, lastDrinkTime);
}
