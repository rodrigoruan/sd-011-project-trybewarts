const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login-input');
const loginPassword = document.getElementById('password-input');

loginButton.addEventListener('click', () => {
  // event.preventDefault();
  if (loginInput.value !== 'tryber@teste.com' && loginPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
