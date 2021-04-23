const checkboxAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const loginButton = document.querySelector('#loginBtn');
const loginPlace = document.querySelector('#loginValue');
const passwordPlace = document.querySelector('#senhaValue');
const textPlace = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function agreementCheck() {
  if (checkboxAgreement.checked === false) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

checkboxAgreement.addEventListener('click', agreementCheck);

loginButton.addEventListener('click', () => {
  if (loginPlace.value === 'tryber@teste.com' && passwordPlace.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

textPlace.addEventListener('keyup', () => {
  const textSize = textPlace.value.length;
  const count = 500 - textSize;
  counter.innerHTML = count.toString();
});