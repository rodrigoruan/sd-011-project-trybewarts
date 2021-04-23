const loginButton = document.querySelector('#loginBtn');
const loginPlace = document.querySelector('#loginValue');
const passwordPlace = document.querySelector('#senhaValue');


loginButton.addEventListener('click', function () {
  if (loginPlace.value === 'tryber@teste.com' && passwordPlace.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});