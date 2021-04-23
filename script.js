const headerForm = document.querySelector('.trybewarts-login');
const loginSubmit = document.getElementById('trybewarts-login-submit');

loginSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  if (headerForm.elements[0].value === 'tryber@teste.com'
  && headerForm.elements[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

agreement.addEventListener('click', (event) => {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

counter.innerText = textArea.maxLength;
textArea.addEventListener('keyup', () => {
  counter.innerText = textArea.maxLength - textArea.value.length;
});
