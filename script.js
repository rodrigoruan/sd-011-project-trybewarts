const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', function() {
  const user = document.forms['trybewarts-login'].user;
  const password = document.forms['trybewarts-login'].password;
  if (user.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});
