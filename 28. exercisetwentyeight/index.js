(function() {
  
  const inputDiv = document.getElementById('inputDiv')
  const outputDiv = document.getElementById('outputDiv')
  const calcButton = document.getElementById('calcButton')

  // let requiredNumbers = 1
  // while (requiredNumbers < 6) {
  //   const div = document.createElement('div')
  //   const label = document.createElement('label')
  //   label.textContent = 'Enter a number: '
  //   const input = document.createElement('input')
  //   input.setAttribute('type', 'number')
  //   label.append(input)
  //   div.append(label)
  //   inputDiv.append(div)
  //   requiredNumbers ++
  // }

  const createInput = () => {
    const div = document.createElement('div')
    const label = document.createElement('label')
    label.textContent = 'Enter a number: '
    const input = document.createElement('input')
    input.setAttribute('type', 'number')
    label.append(input)
    div.append(label)
    inputDiv.append(div)
  }

  createInput()

  calcButton.addEventListener('click', () => {
    let total = 0;
    const inputs = document.querySelectorAll('input')
    const numArr = [...inputs].map(input => {
      return Number(input.value)
    })
    numArr.forEach(num => {
      total += num
    })
    displayOutput(total)
    if (inputs.length < 5) {
      createInput()
    }
  })
  const displayOutput = (total) => {
    outputDiv.textContent = total
  }
})()
