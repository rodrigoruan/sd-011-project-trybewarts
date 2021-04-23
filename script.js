const loginEmailInput = document.getElementById('login-email-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const commentTextArea = document.getElementById('textarea');
const counterElement = document.getElementById('counter');

function login() {
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function updateCounter() {
  const commentLength = commentTextArea.value.length;
  counterElement.textContent = 500 - commentLength;
}

loginButton.addEventListener('click', login);
commentTextArea.addEventListener('keyup', updateCounter);

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
