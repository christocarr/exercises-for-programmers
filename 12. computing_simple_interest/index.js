const principalInput = document.getElementById('principalInput');
const interestInput = document.getElementById('interestInput');
const yearsInput = document.getElementById('yearsInput');
const outputDiv = document.getElementById('outputDiv');

let principalAmount = 0;
let interest = 0;
let years = 0;

principalInput.addEventListener('change', ev => {
  principalAmount = ev.target.value;
});

interestInput.addEventListener('change', ev => {
  interest = ev.target.value;
});

yearsInput.addEventListener('change', ev => {
  years = ev.target.value;
});

function calculateInvestment() {
  interest = Number(interest / 100);
  years = Number(years);
  principalAmount = Number(principalAmount);
  const amountToBeAccured = principalAmount * (1 + interest * years);
  displayOutput(interest, years, amountToBeAccured);
}

function displayOutput(interest, years, amountToBeAccured) {
  interest = interest * 100;
  const accuredAmountOutput = document.createElement('p');
  accuredAmountOutput.textContent = `After ${years} years at ${interest}%, the investment will be worth $${amountToBeAccured}.`;
  outputDiv.appendChild(accuredAmountOutput);
  clearInputs();
}

function clearInputs() {
  principalInput.value = '';
  interestInput.value = '';
  yearsInput.value = '';
}
