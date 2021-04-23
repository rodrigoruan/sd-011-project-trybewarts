npconst headerForm = document.querySelector('.trybewarts-login');
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
