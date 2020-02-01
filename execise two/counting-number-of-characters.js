/*Create a program that prompts for an input and displays and output that show the 
input string and the numbers of characters the string contains */

/* CONSTRAINTS
  1. Output must contain original string
  2. Single output statement to construct output
  3.Use built in function
*/

/* CALLENGES
  1. If nothing is entered state that the user needs to input data
  2. Use HTML
*/


const userInput = document.getElementById('userName')
const outputDiv = document.getElementById('output')
const submit = document.getElementById('submit')
submit.addEventListener('click', () => {
  if (userInput === '') {
    outputDiv.innerHTML = 'Please enter your name!'
  }
  const userNameLength = userInput.length
  const output = 
  outputDiv.innerHTML = userNameLength
})