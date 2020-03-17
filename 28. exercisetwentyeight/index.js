(function() {

  const inputDiv = document.getElementById('inputDiv')
  const calcButton = document.getElementById('calcButton')

  let requiredNumbers = 1
  while (requiredNumbers < 6) {
    const div = document.createElement('div')
    const label = document.createElement('label')
    label.textContent = 'Enter a number: '
    const input = document.createElement('input')
    input.setAttribute('type', 'number')
    label.append(input)
    div.append(label)
    inputDiv.append(div)
    requiredNumbers ++
  }

  calcButton.addEventListener('click', () => {
    console.log('click')
  })

  
})()
