const itemOnePriceInput = document.getElementById('itemOnePriceInput');
const itemTwoPriceInput = document.getElementById('itemTwoPriceInput');
const itemThreePriceInput = document.getElementById('itemThreePriceInput');

const itemOneQuantityInput = document.getElementById('itemOneQuantityInput');
const itemTwoQuantityInput = document.getElementById('itemTwoQuantityInput');
const itemThreeQuantityInput = document.getElementById(
  'itemThreeQuantityInput'
);

const outputDiv = document.getElementById('outputDiv')

let itemOnePrice;
let itemTwoPrice;
let itemThreePrice;
let itemOneQuantity;
let itemTwoQuantity;
let itemThreeQuantity;

itemOnePriceInput.addEventListener('change', ev => {
  itemOnePrice = parseInt(ev.target.value);
});
itemTwoPriceInput.addEventListener('change', ev => {
  itemTwoPrice = parseInt(ev.target.value);
});
itemThreePriceInput.addEventListener('change', ev => {
  itemThreePrice = parseInt(ev.target.value);
});

itemOneQuantityInput.addEventListener('change', ev => {
  itemOneQuantity = parseInt(ev.target.value);
});
itemTwoQuantityInput.addEventListener('change', ev => {
  itemTwoQuantity = parseInt(ev.target.value);
});
itemThreeQuantityInput.addEventListener('change', ev => {
  itemThreeQuantity = parseInt(ev.target.value);
});

function calculateTotal() {
  const taxRate = 5.5;
  const itemOneTotalPrice = itemOnePrice * itemOneQuantity;
  const itemTwoTotalPrice = itemTwoPrice * itemTwoQuantity;
  const itemThreeTotalPrice = itemThreePrice * itemThreeQuantity;

  const totalBeforeTax =
    itemOneTotalPrice + itemTwoTotalPrice + itemThreeTotalPrice;

  const taxOnItems = (taxRate / 100) * totalBeforeTax;

  const totalAfterTax = taxOnItems + totalBeforeTax;

  createOutput(totalBeforeTax, taxOnItems, totalAfterTax);
}

function createOutput(totalBeforeTax, taxOnItems, totalAfterTax) {
  const outputSubTotal = document.createElement('p');
  outputSubTotal.textContent = `Subtotal: ${totalBeforeTax}`;
  const outputTax = document.createElement('p');
  outputTax.textContent = `Tax: ${taxOnItems}`;
  const outputGrandTotal = document.createElement('p');
  outputGrandTotal.textContent = `Total: ${totalAfterTax}`;
  outputDiv.appendChild(outputSubTotal);
  outputDiv.appendChild(outputTax);
  outputDiv.appendChild(outputGrandTotal);

}
