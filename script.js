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
