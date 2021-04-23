/** Verifica áreas de login */
const loginButton = document.querySelector('#login-btn');
const inputUser = document.querySelector('#login');
const inputPass = document.querySelector('#pass');

loginButton.addEventListener('click', () => {
  if (inputUser.value !== 'tryber@teste.com' && inputPass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
