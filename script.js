const button = document.getElementById('botao');
const login = document.getElementById('login');
const password = document.getElementById('password');

function validateLogin() {
  if (login.value + password.value !== 'tryber@teste.com123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', validateLogin);
