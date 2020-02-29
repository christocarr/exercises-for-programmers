const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');

let username, passwordAttempt;
usernameInput.addEventListener('change', ev => {
  username = ev.target.value;
});

passwordInput.addEventListener('change', ev => {
  passwordAttempt = ev.target.value;
});

function signInValidation() {
  const knownPassword = 'Password';

}
