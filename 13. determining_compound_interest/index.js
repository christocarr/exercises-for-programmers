const principalInput = document.getElementById('principalInput');
const interestInput = document.getElementById('interestInput');
const yearsInput = document.getElementById('yearsInput');
const yearsCompoundedInput = document.getElementById('yearsCompoundedInput')
const outputDiv = document.getElementById('outputDiv');

let principalAmount = 0;
let interest = 0;
let years = 0;
let yearsInterestCompounded = 0;

principalInput.addEventListener('change', ev => {
  principalAmount = ev.target.value;
});

interestInput.addEventListener('change', ev => {
  interest = ev.target.value;
});

yearsInput.addEventListener('change', ev => {
  years = ev.target.value;
});

yearsCompoundedInput.addEventListener('change', ev => {
  yearsInterestCompounded = Number(ev.target.value)
})

function calculateInvestment() {
  interest = Number(interest / 100);
  years = Number(years);
  principalAmount = Number(principalAmount);
  const power = yearsInterestCompounded * years
  let amountToBeAccured = interest / yearsInterestCompounded
  amountToBeAccured =  1 + amountToBeAccured
  amountToBeAccured = Math.pow(amountToBeAccured, power)
  amountToBeAccured = amountToBeAccured * principalAmount
  amountToBeAccured = amountToBeAccured.toFixed(2)
  displayOutput(principalAmount, interest, years, yearsInterestCompounded, amountToBeAccured);
}

function displayOutput(principalAmount, interest, years, yearsInterestCompounded, amountToBeAccured) {
  interest = interest * 100;
  const accuredAmountOutput = document.createElement('p');
  accuredAmountOutput.textContent = `$${principalAmount} invested at ${interest}% for ${years} compounded ${yearsInterestCompounded} times per year is $${amountToBeAccured}.`;
  outputDiv.appendChild(accuredAmountOutput);
  clearInputs();
}

function clearInputs() {
  principalInput.value = '';
  interestInput.value = '';
  yearsInput.value = '';
}