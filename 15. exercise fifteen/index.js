const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const outputDiv = document.getElementById('outputDiv')

let username, passwordAttempt;
usernameInput.addEventListener('change', ev => {
  username = ev.target.value;
});

passwordInput.addEventListener('change', ev => {
  passwordAttempt = ev.target.value;
});

function signInValidation() {
  const knownPassword = 'Password';
  let message;
  if (passwordAttempt === knownPassword) {
    message = `Welcome!`;
  } else {
    message = `I don't know you.`;
  }
  displayMessage(message)
}

function displayMessage(message) {

}
