function handleLogin() {
  const loginText = document.getElementById('login').value;
  const passwordText = document.getElementById('senha').value;
  // fazer um if que verifica se o login é tryber@test.com e senha 123456
  if ((loginText === 'tryber@teste.com') && (passwordText === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const button = document.getElementById('botao');
button.addEventListener('click', handleLogin);
