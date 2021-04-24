const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const submit = document.querySelector('#button');
const textArea = document.querySelector('#textarea');

submit.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const check = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');

check.addEventListener('click', () => {
  if (check.checked === true) {
    enviar.removeAttribute('disabled');
  } else {
    enviar.setAttribute('disabled', 'disabled');
  }
});

function limits() {
  let textValue = document.querySelector('#textarea').value;
  const limit = 500;
  const total = textValue.length;
  if (total <= limit) {
    const rest = limit - total;
    document.getElementById('counter').innerHTML = rest;
  } else {
    textValue = textValue.substr(0, limit);
  }
}

textArea.addEventListener('keyup', limits);
