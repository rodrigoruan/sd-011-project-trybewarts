const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const submit = document.querySelector('#button');

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
