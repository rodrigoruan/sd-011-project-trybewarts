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