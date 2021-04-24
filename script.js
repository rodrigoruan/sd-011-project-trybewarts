const login = document.getElementById('login-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
function loginTry() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', loginTry);

agreement.addEventListener('input', () => {
  if (submitButton.hasAttribute('disabled')) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
});
