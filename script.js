const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', function () {
  const trybewartsLogin = document.forms['trybewarts-login'];
  if (trybewartsLogin.user.value === 'tryber@teste.com' && trybewartsLogin.password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});
