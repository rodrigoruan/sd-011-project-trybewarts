const login = document.getElementById('login-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');

function loginInput() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', loginInput);

const textarea = document.getElementById('textarea');
const maxlength = textarea.getAttribute('maxlength');
const counter = document.getElementById('counter');
counter.innerText = maxlength;

function countCharacter() {
  const campo = textarea.value.length;
  const restante = maxlength - campo;

  counter.innerHTML = restante;
}

textarea.addEventListener('keyup', countCharacter);
textarea.addEventListener('keydown', countCharacter);