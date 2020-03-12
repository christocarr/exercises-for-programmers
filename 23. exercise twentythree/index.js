const questionDiv = document.getElementById('questionDiv')
const nextQuestionButton = document.getElementById('nextQuestionButton')

const start = () => {
  questionPos = 0
  const startButton = this.document.body.firstElementChild
  startButton.classList.add('hide')
  newQuestion(answer = true, questionPos)
  nextQuestionButton.classList.remove('hide')
}

nextQuestionButton.addEventListener('click', () => {
  checkAnswer()
})

const newQuestion = (answer, questionPos) => {
  
  const question = document.createElement('p')
  const yesNoDiv = document.createElement('div')
  const yesInput = document.createElement('input')
  const noInput = document.createElement('input')
  const yesLabel = document.createElement('label')
  const noLabel = document.createElement('label')
  yesInput.setAttribute('type', 'radio')
  yesInput.setAttribute('name', 'answer')
  yesInput.setAttribute('value', true)
  noInput.setAttribute('type', 'radio')
  noInput.setAttribute('name', 'answer')
  noInput.setAttribute('value', false)
  yesLabel.textContent = 'Yes'
  noLabel.textContent = 'No'
  yesNoDiv.append(yesInput)
  yesNoDiv.append(yesLabel)
  yesNoDiv.append(noInput)
  yesNoDiv.append(noLabel)
  if (answer) {
    question.textContent = posBranchQuestions[questionPos]
  } else {
    question.textContent = negBranchQuestions[questionPos]
  }
  questionDiv.append(question)
  questionDiv.append(yesNoDiv)

}

const checkAnswer = () => {
  let answer;
  const inputs = document.querySelectorAll('input')
  const answerChoice = [...inputs].filter(item => {
    if (item.checked && item.getAttribute('value') === 'true') {
      answer = true
      return item
    } else if (item.checked && item.getAttribute('value') === 'false') {
      answer = false
      return item
    }
  })
 
  questionPos ++
  newQuestion(answer, questionPos)
}


  const negBranchQuestions = ['Does the car make a clicking noise?', 'Does the car crank up but fail to start?', 'Does the engine start and then die?']
  const posBranchQuestions = ['Is the car silent when you turn the key?', 'Are the battery terminals corroded?', 'Does the car have fuel injection?']

