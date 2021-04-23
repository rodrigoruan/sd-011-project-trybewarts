const loginButton = document.querySelector('.header button');

function sendUser() {
  const loginText = document.getElementById('login').value;
  const senhaText = document.getElementById('senha').value;
  if (loginText === 'tryber@teste.com' && senhaText === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', sendUser);
