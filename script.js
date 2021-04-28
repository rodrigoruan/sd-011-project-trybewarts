const loginButton = document.querySelector('#submit');
const loginName = document.querySelector('#login');
const loginsPass = document.querySelector('#passworld');
const agree = document.querySelector('#agreement');
const sbtButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counterSpan = document.querySelector('#counter');
let textCounter = 500;
window.onload = () => {
  sbtButton.disabled = true;
  counterSpan.innerText = textCounter;
};
textArea.addEventListener('keyup', () => {
  textCounter = 500 - textArea.value.length;
  counterSpan.innerText = textCounter;
});
loginButton.addEventListener('click', () => {
  if (loginName.value === 'tryber@teste.com' && loginsPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
agree.addEventListener('change', () => {
  if (agree.checked === true) {
    sbtButton.disabled = false;
  } else {
    sbtButton.disabled = true;
  }
});
