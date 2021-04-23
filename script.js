const loginUser = document.getElementById('login');
const passUser = document.getElementById('password');
const loginBtn = document.querySelector('#header__form--botao');

function verifyLogin() {
  if (loginUser.value !== 'tryber@betrybe.com' || passUser.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginBtn.addEventListener('click', verifyLogin);
