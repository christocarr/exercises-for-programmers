const amountInput = document.getElementById('orderAmountInput')
const stateInput = document.getElementById('stateInput')
const outputDiv = document.getElementById('outputDiv')

let amount
let state
amountInput.addEventListener('change', (ev) => {
  amount = Number(ev.target.value)
})
stateInput.addEventListener('change', ev => {
  state = ev.target.value.toUpperCase()
})

function calculateTax() {
  let tax
  if (state === 'WI') {
    tax = 5.5
  } else {
    tax = 4.5
  }

  let taxOnPurchase = amount * (tax / 100)
  let total = amount + taxOnPurchase
  displayOutput(taxOnPurchase, total)
}

function displayOutput(taxOnPurchase, total) {
  const subtotal = document.createElement('p')
  subtotal.textContent = `The subtotal is $${amount}.`

  const tax = document.createElement('p')
  tax.textContent = `The tax is $${taxOnPurchase}.`

  const total = document.createElement('p')
  total.textContent = `The total is $${taxOnPurchase + total}.`

  outputDiv.innerHTML = subtotal
  outputDiv.innerHTML = tax
  outputDiv.innerHTML = total
}

