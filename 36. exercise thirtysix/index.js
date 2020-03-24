const outputDiv = document.querySelector('div');
const numberInput = document.querySelector('input');
const calculationOutput = document.getElementById('calculationsOutput')

let number = 0;
let numberArr = [];

numberInput.addEventListener('keyup', ev => {
  number = ev.target.value;
  if (ev.keyCode === 13 ) {
    const para = document.createElement('p')
    para.textContent = number
    outputDiv.append(para)
    ev.target.value = ''
    numberArr.push(Number(number))
  }
});

const calculate = () => {
  const sum = numberArr.reduce((acc, num) => {
    return acc + num 
  })
  const average = sum / numberArr.length 
  console.log(average)
  const averagePara = document.createElement('p')
  averagePara.textContent = `The average is ${average}.`
  calculationOutput.append(averagePara)

  //sort arr lowest to highest
  const sortedNumArr = numberArr.sort((a,b) => {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    return 0
  })
  const lowestPara = document.createElement('p')
  lowestPara.textContent = `The minimum is ${sortedNumArr[0]}.`
  calculationOutput.append(lowestPara)

  const highestPara = document.createElement('p')
  highestPara.textContent = `The maximum is ${sortedNumArr[sortedNumArr.length - 1]}.`
  calculationOutput.append(highestPara)
}