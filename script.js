const email = document.querySelector('#input-login-email');
const password = document.querySelector('#input-login-password');
const loginButton = document.querySelector('#loginButton');
const rateContainer = document.querySelector('#rate-container');
const textArea = document.querySelector('textarea');
let counter = document.querySelector('#counter')
const checkAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
btnSubmit.disabled = true;

// Função que valida o formato de E-mail
function checkLogin() {
  const insertedEmail = email.value;
  const insertedPassword = password.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  const passwordFormat = /^[0-9.]+$/.test(insertedPassword);
  if (!emailFormat || !passwordFormat) {
    email.value = '';
    password.value = '';
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', checkLogin);

// Criação dos Radios de Rate
function createRateRadios() {
  const rates = 10;
  for (let index = 1; index <= rates; index += 1) {
    const radioRate = document.createElement('input');
    const labelRate = document.createElement('label');
    radioRate.type = 'radio';
    radioRate.name = 'rate';
    radioRate.value = index;
    labelRate.innerText = index;
    rateContainer.appendChild(radioRate);
    rateContainer.appendChild(labelRate);
  }
}

createRateRadios();

//Contador de palavras do textarea
function wordCounter () {
  const nWords = textArea.value.length;
  counter.innerText = 500 - nWords;
}

textArea.addEventListener('keyup', wordCounter);

function disableSubmitButton() {
  checkAgreement.addEventListener('click', () => {
    if (!checkAgreement.checked) {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }
  });
}

disableSubmitButton();
