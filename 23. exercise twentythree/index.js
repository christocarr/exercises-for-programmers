const questionDiv = document.getElementById('questionDiv')
const nextQuestionButton = document.getElementById('nextQuestionButton')

const start = () => {
  const startButton = this.document.body.firstElementChild
  startButton.classList.add('hide')
  newQuestion()
  nextQuestionButton.classList.remove('hide')
}

nextQuestionButton.addEventListener('click', () => {
  checkAnswer()
})

const newQuestion = () => {
  let question = 1;
  const startingQues = document.createElement('p')
  const yesNoDiv = document.createElement('div')
  const yesInput = document.createElement('input')
  const noInput = document.createElement('input')
  const yesLabel = document.createElement('label')
  const noLabel = document.createElement('label')
  yesInput.setAttribute('type', 'radio')
  yesInput.setAttribute('name', 'answer')
  yesInput.setAttribute('value', 'true')
  noInput.setAttribute('type', 'radio')
  noInput.setAttribute('name', 'answer')
  noInput.setAttribute('value', 'false')
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

const checkAnswer = () => {
  const inputs = document.querySelectorAll('input')
  const answer = [...inputs].filter(item => {
    console.log(item)
  })
}


//   const negBranchQuestions = ['Does the car make a clicking noise?', 'Does the car crank up but fail to start?', 'Does the engine start and then die?']
//   const posBranchQuestions = ['Are the battery terminals corroded?', 'Does the car have fuel injection?']

