const loginButton = document.querySelector('#button-login');

loginButton.addEventListener('click', () => {
  const trybewartsLogin = document.forms['trybewarts-login'];
  const user = trybewartsLogin.user.value;
  const password = trybewartsLogin.password.value;
  if (user === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
