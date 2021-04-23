// -Declaração de constantes
// const loginInput = document.querySelector('#email').value;
// const passwordInput = document.querySelector('#password').value;
const buttonLogin = document.querySelector('#button');

function errorAlert() {
  alert('Login ou senha inválidos.');
}
function helloTryber() {
  alert('Olá, Tryber!');
}

function emailChecker() {
  let checker = false;
  const loginInput = document.querySelector('#email').value;
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
  const passwordInput = document.querySelector('#password').value;
  if (passwordInput.isNaN) {
    errorAlert();
  }
  if (passwordInput.length !== 6) {
    errorAlert();
  }
}

function addEventListenerChecker() {
  const loginInput = document.querySelector('#email').value;
  const passwordInput = document.querySelector('#password').value;
  passwordChecker();
  emailChecker();
  if (loginInput === 'tryber@teste.com' && passwordInput === '123456') {
    helloTryber();
  }
}

buttonLogin.addEventListener('click', addEventListenerChecker);
