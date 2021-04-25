const login = document.querySelector('#input-login');
const pass = document.querySelector('#input-password');

function validateLogin() {
  if (login.value !== 'tryber@teste.com' || pass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const loginButton = document.querySelector('#button-header');
loginButton.addEventListener('click', validateLogin);

const textarea = document.getElementById('textarea');
const maxContador = textarea.getAttribute('maxlength');

const counter = document.getElementById('counter');
counter.innerText = textarea.getAttribute('maxlength');

function contaCaracteries() {
  const campo = textarea.value.length;
  const restante = maxContador - campo;
  counter.innerHTML = restante;
}

textarea.addEventListener('keyup', contaCaracteries);
textarea.addEventListener('keydown', contaCaracteries);
