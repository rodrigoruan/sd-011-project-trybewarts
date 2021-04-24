const btnLogin = document.getElementById('btnLogar');
const inputLogin = document.getElementById('login');
const inptPassword = document.getElementById('password');
const btnCheck = document.getElementById('agreement');
const btnSub = document.getElementById('submit-btn');

function LoginAlert() {
  if (inputLogin.value === 'tryber@teste.com' && inptPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', LoginAlert);

btnSub.disabled = true;

function validateButton() {
  if (btnCheck.checked === true) {
    btnSub.disabled = false;
  } else if (btnCheck.checked === false) {
    btnSub.disabled = true;
  }
}

btnCheck.addEventListener('click', validateButton);
