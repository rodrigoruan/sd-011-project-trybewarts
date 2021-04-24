const login = document.getElementById('login');
const senha = document.getElementById('senha');
const button = document.querySelector('#entrar');
const chkAcept = document.getElementById('agreement');
const btnSubmt = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const contTextlength = document.getElementById('textarea');
const getmaxLength = contTextlength.maxLength;
counter.innerText = getmaxLength;

button.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

chkAcept.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    btnSubmt.disabled = false;
  } else {
    btnSubmt.disabled = true;
  }
});

contTextlength.addEventListener('input', (event) => {
  const value = event.target.value.length;
  counter.innerText = getmaxLength - value;
});
