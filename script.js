function alertFunction() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const buttonClick = document.getElementById('sendBtn');

buttonClick.addEventListener('click', alertFunction);
