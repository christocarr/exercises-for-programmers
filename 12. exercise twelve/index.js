const principalInput = document.getElementById('principalInput')
const interestInput = document.getElementById('interestInput')
const yearsInput = document.getElementById('yearsInput')
const outputDiv = document.getElementById('outputDiv')

let principalAmount = 0;
let interest = 0
let years = 0

principalInput.addEventListener('change', (ev) => {
  principalAmount = ev.target.value
})

interestInput.addEventListener('change', (ev) => {
  interest = ev.target.value
})

yearsInput.addEventListener('change', (ev) => {
  years = ev.target.value
})

function calculateInvestment() {
  interest = interest / 100
  const amountToBeAccured = principalAmount * (1 + (interest * years))
  displayOutput(principalAmount, interest, years, amountToBeAccured)
}

function displayOutput(interest, years, amountToBeAccured) {
  
  const accuredAmountOutput = document.createElement('p')
  accuredAmountOutput.textContent = `After ${years} at ${interest}, the investment will be worth $${amountToBeAccured}.`
  outputDiv.appendChild(accuredAmountOutput)
}