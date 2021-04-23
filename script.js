const checkboxAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const loginButton = document.querySelector('#loginBtn');
const loginPlace = document.querySelector('#loginValue');
const passwordPlace = document.querySelector('#senhaValue');

function agreementCheck() {
  if (checkboxAgreement.checked === false) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

checkboxAgreement.addEventListener('click', agreementCheck);

loginButton.addEventListener('click', function loginAndPasswordCheck() {
  if (loginPlace.value === 'tryber@teste.com' && passwordPlace.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
