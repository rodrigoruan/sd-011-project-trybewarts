const login = document.getElementById('login');
const pass = document.getElementById('pass');
const submitButton = document.getElementById('submit-button');

function validation () {
  if (login.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá Tryber!');
  }

  else {
    alert('Login ou senha inválidos');
  }
}

submitButton.addEventListener('click', validation)
