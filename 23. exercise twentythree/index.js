const questionDiv = document.getElementById('questionDiv')

const start = () => {
  const startButton = this.document.body.firstElementChild
  startButton.classList.add('hide')
  newQuestion()
}

const newQuestion = () => {
  const startingQues = document.createElement('p')
  const yesNoDiv = document.createElement('div')
  const yesInput = document.createElement('input')
  const noInput = document.createElement('input')
  const yesLabel = document.createElement('label')
  const noLabel = document.createElement('label')
  yesInput.setAttribute('type', 'radio')
  yesInput.setAttribute('name', 'answer')
  noInput.setAttribute('type', 'radio')
  noInput.setAttribute('name', 'answer')
  yesLabel.textContent = 'Yes'
  noLabel.textContent = 'No'
  yesNoDiv.append(yesInput)
  yesNoDiv.append(yesLabel)
  yesNoDiv.append(noInput)
  yesNoDiv.append(noLabel)
  startingQues.textContent = 'Is the car silent when you turn the key?'
  questionDiv.append(startingQues)
  questionDiv.append(yesNoDiv)
}

// let question;
// nextButton.addEventListener('click', () => {
//   question = 0
// })

// const nextQuestion = () => {

//   const negBranchQuestions = ['Does the car make a clicking noise?', 'Does the car crank up but fail to start?', 'Does the engine start and then die?']
//   const posBranchQuestions = ['Are the battery terminals corroded?', 'Does the car have fuel injection?']

// }

// const createNewQuestion = (question) => {
//   const div = document.createElement('div')
//   const label = document.createElement('label')
//   const input = document.createElement('input')

//   label.appendChild(input)
//   div.appendChild(label)

//   newQuestionDiv.appendChild(div)
// }