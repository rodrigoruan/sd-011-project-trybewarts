// Resolução do requisito 3
const login = document.querySelector('#insertLogin');
const password = document.querySelector('#insertPassword');
const submit = document.querySelector('#submitLogin');

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
submit.addEventListener('click', loginCheck);
