const rateInput = document.querySelector('input')
const outputPara = document.querySelector('p')

const string = /[A-Za-z]*$/
const startWithZero = /^[1-9][0-9]*$/
let rate
rateInput.addEventListener('change', (ev) => {
  rate =  Number(ev.target.value)
})

const calculate = () => { 
  
  console.log(rate)
  if (NaN) {
    outputPara.textContent = `${rate} is an invalid input.`
  } else {
    outputPara.textContent = `${72/rate}`
  }
  
}
