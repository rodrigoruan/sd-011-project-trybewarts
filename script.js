const submitButton = document.querySelector('#submit-button');

function validation() {
  const login = document.querySelector('#login').value;
  const pass = document.querySelector('#pass').value;
  if (login !== 'tryber@teste.com' && pass !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

submitButton.addEventListener('click', validation);
