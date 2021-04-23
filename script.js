const loginEmailInput = document.getElementById('login-email-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');

function login() {
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

function disableSubmitButton() {
  checkAgreement.addEventListener('click', () => {
    if (submitButton.disabled) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}
disableSubmitButton();
