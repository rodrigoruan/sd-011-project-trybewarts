const submit = document.getElementById('submit'); // variável recebendo o botão submit

// Código para conferência do email e da senha
submit.addEventListener('click', () => {
  const email = document.getElementById('email'); // Variavel recebendo o email
  const pass = document.getElementById('pass'); // variavel recebendo o password
  const insertedEmail = email.value;
  const insertedPass = pass.value;
  if (insertedEmail === 'tryber@teste.com' && insertedPass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Código para fazer contador
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');

text.addEventListener('input', (originEvent) => {
  const currentLength = originEvent.target.value.length;
  counter.innerText = 500 - currentLength;
});

const agreementBox = document.querySelector('#agreement');
const submitFormButton = document.querySelector('#submit-btn');

agreementBox.addEventListener('input', () => {
  if (agreementBox.checked) {
    submitFormButton.removeAttribute('disabled');
  } else {
    submitFormButton.setAttribute('disabled', '_self');
  }
});
