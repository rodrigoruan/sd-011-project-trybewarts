const login = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('btn-input');

function getInput() {
  if((login.value === 'trybe@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha Inválidos.');
  }
}
button.addEventListener('click', getInput);
