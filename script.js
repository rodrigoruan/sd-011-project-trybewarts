const login = document.getElementById('login').value;
const pass = document.getElementById('pass').value;
const submitButton = document.getElementById('submit-button');

function validation () {
  if (login == 'tryber@teste.com' && pass == '123456') {
    alert('Olá Tryber!');
  }

  else {
    alert('Login ou senha inválidos');
  }
}

submitButton.addEventListener('click', validation)
