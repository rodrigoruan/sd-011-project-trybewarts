const submit = document.getElementById('submit-button');
const login = document.getElementById('login');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const formSubmit = document.getElementById('submit-btn');

function submitForm() {
  const standardLogin = 'tryber@teste.com';
  const standardPassword = '123456';
  if (login.value === standardLogin && password.value === standardPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function enableSubmission() {
  if (agreement.checked) {
    formSubmit.disabled = false;
  } else {
    formSubmit.disabled = true;
  }
}

submit.addEventListener('click', submitForm);
agreement.addEventListener('click', enableSubmission);
