const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  if (loginValue !== 'tryber@teste.com' && passwordValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const agreementButton = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function disabledButton() {
  submitButton.disabled = true;
}

disabledButton();

agreementButton.addEventListener('click', () => {
  const agreementStatus = agreementButton.checked;

  if (agreementStatus === true) {
    submitButton.disabled = false;
  }

  if (agreementStatus === false) {
    disabledButton();
  }
});
