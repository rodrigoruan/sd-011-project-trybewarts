const loginField = document.querySelector('.login');
const passwordField = document.querySelector('.senha');
const button = document.querySelector('.buttonLogin');

function verifyLogin() {
  if (loginField.value !== 'tryber@teste.com' || passwordField.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', verifyLogin);
