const elementLogin = document.getElementById('login');
const elementSenha = document.getElementById('password');
const elementButtonLogin = document.getElementById('button-login');

function erroLoginFunction() {
  if (elementLogin.value !== 'tryber@teste.com' || elementSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
elementButtonLogin.addEventListener('click', erroLoginFunction);

const submit = document.getElementById('submit-btn');
const check = document.getElementById('agreement');

function getCheckbox() {
  if (check.checked === true) {
    submit.removeAttribute('disabled');
  } else if (check.checked === false) {
    submit.setAttribute('disabled', 'disabled');
  }
}

check.addEventListener('click', getCheckbox);
