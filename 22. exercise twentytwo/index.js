const firstNumberInput = document.getElementById('firstNumberInput')
const secondNumberInput = document.getElementById('secondNumberInput')
const thirdNumberInput = document.getElementById('thirdNumberInput')
const outputDiv = document.getElementById('outputDiv')

let numbersArr = []
firstNumberInput.addEventListener('change', ev => {
  numbersArr.push(Number(ev.target.value))
})
secondNumberInput.addEventListener('change', ev => {
  numbersArr.push(Number(ev.target.value))
})
thirdNumberInput.addEventListener('change', ev => {
  numbersArr.push(Number(ev.target.value))
})
const compareNumbers = () => {
  let match = false
  let iterator = 1
  let largestNum = 0
  numbersArr.forEach(num => {
    for(let i = iterator; i < numbersArr.length; i++) {
      if (num === numbersArr[i]) {
        match = true
      }
    }
    iterator ++
    if (num > largestNum) {
      largestNum = num
    }
  })
  if (match) {
    return 'Error'
  }
  outputLargestNum(largestNum)
}