const loginUser = document.getElementById('login');
const passUser = document.getElementById('password');
const loginBtn = document.querySelector('#header__form--botao');

function verifyLogin() {
  if (loginUser.value === 'tryber@betrybe.com' && passUser.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', verifyLogin);
