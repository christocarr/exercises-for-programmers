// Create a program that determines how many years you have left until retirement and the year you can retire.
// It should prompt the user for their current age and the age they want to retire.

const currentAgeInput = document.getElementById('currentAge')
const retirementAgeInput = document.getElementById('retirementAge')
const outputDiv = document.getElementById('outputDiv')
const calculateButton = querySelector()

let currentAge;
let retirementAge;

currentAgeInput.addEventListener('change', (ev) => {
  currentAge = ev.target.value;
})

retirementAgeInput.addEventListener('change', (ev) => {
  retirementAge = ev.target.value
})

const yearsLeftPara = document.createElement('p')
const yearsLeft = retirementAge - currentAge
yearsLeftPara.innerHTML = `You have ${yearsLeft} years left until you can retire.`

outputDiv.appendChild(yearsLeftPara)

const now = new Date()
const currentYear = now.getFullYear();

const retirementYear = currentAgeInput + yearsLeft
const retirementYearPara = document.createElement('p')
retirementYearPara.innerHTML = `It's ${currentYear}, so you can retire in ${retirementYear}.`

outputDiv.appendChild(retirementYearPara)