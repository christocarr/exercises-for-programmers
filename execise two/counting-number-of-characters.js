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

const nameInput = document.getElementById('nameInput');
let userName = '';
nameInput.addEventListener('change', ev => {
  userName = ev.target.value;
});
const outputDiv = document.getElementById('output');
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  if (userName === '') {
    outputDiv.innerHTML = 'Please enter your name!';
  } else {
    const userNameLength = userName.length;
    console.log(userNameLength);
    outputDiv.innerHTML = userNameLength;
  }
});
