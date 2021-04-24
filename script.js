// -Declaração de constantes
const buttonLogin = document.querySelector('#button');

function errorAlert() {
  alert('Login ou senha inválidos.');
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
    alert('Olá, Tryber!');
  }
}

buttonLogin.addEventListener('click', addEventListenerChecker);

// Função que verifica o status do checkbox e altera entre enable e disable o submit-btn
const buttonStatus = document.querySelector('#submit-btn');
const agreementStatus = document.querySelector('#agreement');
function changeButtonStatus() {
  console.log(agreementStatus.checked);
  if (agreementStatus.checked === true) {
    buttonStatus.disabled = false;
  } else {
    buttonStatus.disabled = true;
  }
}

agreementStatus.addEventListener('click', changeButtonStatus);
