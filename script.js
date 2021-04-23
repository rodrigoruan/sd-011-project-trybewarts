// -Declaração de constantes
const passwordInput = document.querySelector('#password');
const buttonLogin = document.querySelector('#button');

function errorAlert() {
  alert('Login ou senha inválidos.');
}

function emailChecker() {
  const loginInput = document.querySelector('#email').value;
  let checker = false;

  for (let index = 0; index < loginInput.length; index += 1) {
    if (loginInput[index] === '@') {
      checker = true;
    }
  }
  if (!checker) {
    errorAlert();
  }
}

function passwordChecker() {
  const password = passwordInput.value;
  if (password.isNaN) {
    errorAlert();
  }
  if (password.length !== 6) {
    errorAlert();
  }
}

function addEventListenerChecker() {
  passwordChecker();
  emailChecker();
}

buttonLogin.addEventListener('click', addEventListenerChecker);
