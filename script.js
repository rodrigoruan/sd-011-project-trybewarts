const loginBtn = document.querySelectorAll('.Submit-btn')[0];
const loginText = document.querySelectorAll('input')[0];
const passwordText = document.querySelectorAll('input')[1];

function alertLogin() {
  if (loginText.value === 'tryber@teste.com' && passwordText.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', alertLogin);

document.getElementById('submit-btn').disabled = true;
