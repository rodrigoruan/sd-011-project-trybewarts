/* Variaveis */
const validEmail = 'tryber@teste.com';
const validPassword = '123456';

/* Variaveis do DOM */
const inputLogin = document.querySelector('.trybewarts-login input[type="email"]');
const inputPassword = document.querySelector('.trybewarts-login input[type="password"]');
const buttonSubmitLogin = document.getElementById('submitLogin');

function validateLogin(event) {
  if (inputLogin.value === validEmail && inputPassword.value === validPassword) {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

function onLoad() {
  buttonSubmitLogin.addEventListener('click', validateLogin);
}

window.onload = onLoad;
