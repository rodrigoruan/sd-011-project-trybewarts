const email = 'tryber@teste.com';
const pass = '123456';
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const buttonInput = document.querySelector('#button');

function login() {
  if (loginInput.value === email && passwordInput.value === pass) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonInput.addEventListener('click', login);

const checkBtn = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function check() {
  if (checkBtn.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
checkBtn.addEventListener('click', check);

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
// counter.innerHTML = '500';

// textArea.addEventListener('input', () => {
//   const maxLength = textArea.maxLength;
//   const caracteres = textarea.value.length;
//   const lengthCurrent = maxLength - caracteres;

//   counter.innerHTML = lengthCurrent;

// });

textArea.addEventListener('input', () => {
  // const maxLength = textArea.maxLength;
  const caracteres = textArea.value.length;
  counter.innerHTML = textArea.maxLength - caracteres;
});
