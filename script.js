const loginButton = document.getElementById('login');
const submitButton = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');

function checkForLogin() {
  const loginValue = document.getElementById('login-value').value;
  const passwordValue = document.getElementById('password-value').value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

let checked = false;
function checkAgreement() {
  if (agreementCheck.checked) {
    checked = true;
  }
  if (checked) {
    submitButton.disabled = false;
  }
}

function addEventListeners() {
  loginButton.addEventListener('click', checkForLogin);
  agreementCheck.addEventListener('change', checkAgreement);
}

window.onload = () => {
  addEventListeners();
};
