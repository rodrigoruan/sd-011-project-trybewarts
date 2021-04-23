// Variables
// const header = document.querySelector('header');
const buttonLogin = document.getElementById('button-login');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
// Functions
function login() {
  if (loginInput.value !== 'tryber@teste.com' && passwordInput.value !== 123456) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

window.onload = function load() {
  buttonLogin.addEventListener('click', login);
};
