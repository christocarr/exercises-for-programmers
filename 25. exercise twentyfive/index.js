const passwordInput = document.getElementById('passwordInput');

passwordInput.addEventListener('keyup', ev => {
  let passwordString = ev.target.value;
  passwordValidator(passwordString);
});

const passwordValidator = passwordString => {
  let message = '';
  let string = passwordString.toLowerCase();
  const isOnlyLetters = /^[a-z]+$/.test(string);
  const isOnlyNumbers = /^[0-9]+$/.test(string);
  const isTooShort = string.length < 8 ? true : false;
  const hasSpecChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(string);
  
};
