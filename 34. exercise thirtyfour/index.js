
  const EMPLOYEES = ['John Smith', 'Adam Apple', 'Tom Tomms', 'Julia Jewels', 'Carol Cousins']
  const outputDiv = document.getElementById('outputDiv')
  const nameInput = document.querySelector('input')

  let nameToRemove

  const employeeNumbers = `There are ${EMPLOYEES.length} employees:`
  outputDiv.append(employeeNumbers)
  let iterator = 0
  while (iterator < EMPLOYEES.length) {
    const employeeLine = document.createElement('p')
    employeeLine.textContent = EMPLOYEES[iterator]
    outputDiv.append(employeeLine)
    iterator ++
  }

  nameInput.addEventListener('change', (ev) => {
    nameToRemove = ev.target.value
  })

  const removeEmployee = () => {
    for (let i = 0; i < EMPLOYEES.length; i ++) {
      if (EMPLOYEES[i] === nameToRemove) {
        EMPLOYEES.splice(i, 1)
      }
    }
    console.log(EMPLOYEES)
  }