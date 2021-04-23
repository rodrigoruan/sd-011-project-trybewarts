const defaultLogin = 'tryber@teste.com';
const defaultPassword = '123456';
const loginInput = document.querySelector('.trybewarts-login input:nth-of-type(1)');
const passwordInput = document.querySelector('.trybewarts-login input:nth-of-type(2)');
const loginButton = document.querySelector('.trybewarts-login button:nth-of-type(1)');

loginButton.addEventListener('click', () => {
  if (loginInput.value === defaultLogin && passwordInput.value === defaultPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
