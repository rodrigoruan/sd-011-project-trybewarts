const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  let loginValue = loginInput.value;
  let passwordValue = passwordInput.value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert ('Olá, Tryber!');
  } else {alert ('Login ou senha inválidos.')}
});
