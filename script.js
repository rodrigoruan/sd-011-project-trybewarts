const submit = document.getElementById('submit-button');
const login = document.getElementById('login');
const password = document.getElementById('password');

function submitForm() {
  const standardLogin = 'tryber@teste.com';
  const standardPassword = '123456';
  if (login.value === standardLogin && password.value === standardPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submit.addEventListener('click', submitForm);
