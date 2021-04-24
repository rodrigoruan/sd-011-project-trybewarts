const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login-input');
const loginPassword = document.getElementById('password-input');
const labelRate = document.querySelector('.rate-label');
const buttonSend = document.querySelector('#submit-btn');
const checkboxTerms = document.querySelector('#agreement');
const textAreaInput = document.querySelector('#textarea');
const counterText = document.querySelector('#counter');

loginButton.addEventListener('click', () => {
  if (loginInput.value !== 'tryber@teste.com' && loginPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

checkboxTerms.addEventListener('click', () => {
  if (checkboxTerms.checked) {
    buttonSend.removeAttribute('disabled');
  } else {
    buttonSend.setAttribute('disabled', 'disabled');
  }
});

textAreaInput.addEventListener('input', () => {
  let textCount = 500;
  textCount -= (textAreaInput.value.length);
  counterText.innerText = textCount;
});

function createRadio() {
  for (let index = 1; index <= 10; index += 1) {
    const newRadio = document.createElement('input');
    const textRadio = document.createElement('span');
    newRadio.setAttribute('type', 'radio');
    newRadio.setAttribute('value', index);
    newRadio.setAttribute('name', 'rate');
    labelRate.appendChild(newRadio);
    labelRate.appendChild(textRadio);
    textRadio.innerText = index;
  }
}

createRadio();
