const loginUser = document.getElementById('login');
const passUser = document.getElementById('password');
const loginBtn = document.querySelector('#header__form--botao');

function verifyLogin() {
  if (loginUser.value !== 'tryber@betrybe.com' && passUser.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginBtn.addEventListener('click', verifyLogin);

const btnAgreement = document.getElementById('agreement');

function addProperty() {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.removeAttribute('disabled');
}

btnAgreement.addEventListener('click', addProperty);

const comentArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

comentArea.addEventListener('input', () => {
  let wordCount = 500;
  wordCount -= (comentArea.value.length);
  counter.innerText = wordCount;
});
