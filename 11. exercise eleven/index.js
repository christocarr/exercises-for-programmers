
const eurosInput = document.getElementById('eurosInput')
const exchangeRateInput = document.getElementById('exchangeRateInput')
const outputDiv = document.getElementById('outputDiv')
let euros
eurosInput.addEventListener('change', (ev) => {
  euros = Number(ev.target.value)
})

let exchangeRate
exchangeRateInput.addEventListener('change', (ev) => {
  exchangeRate = Number(ev.target.value)
})

function calculateUSDollars() {
  const USDollars = (euros * exchangeRate)
  displayOutput(euros, exchangeRate, USDollars)
}

function displayOutput(euros, exchangeRate, USDollars) {
  const eurosDisplay = document.createElement('p')
  const exchangeRateDisplay = document.createElement('p')
  const USDollarsDisplay = document.createElement('p')

  eurosDisplay.textContent = `Euros: ${euros}`
  exchangeRateDisplay.textContent = `Exchange rate: ${exchangeRate}`
  USDollarsDisplay.textContent = `US Dollars: ${USDollars}`

  outputDiv.appendChild(eurosDisplay)
  outputDiv.appendChild(exchangeRateDisplay)
  outputDiv.appendChild(USDollarsDisplay)
}