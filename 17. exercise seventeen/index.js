const weightInput = document.getElementById('weightInput');
const ageInput = document.getElementById('AgeInput');
const genderInput = document.getElementById('genderInput');
const lastDrinkTimeInput = document.getElementById('lastDrinkTimeInput');

let weight, age, gender, lastDrinkTime;
weightInput.addEventListener('change', ev => {
  weight = Num(ev.target.value)
})

ageInput.addEventListener('change', ev => {
  age = Num(ev.target.value)
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
