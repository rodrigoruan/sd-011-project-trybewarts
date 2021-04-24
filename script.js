const user = document.querySelector('#user');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const btnSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');

btnLogin.addEventListener('click', () => {
  const userValue = user.value;
  const passwordValue = password.value;
  if ((userValue === 'tryber@teste.com') || (passwordValue === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

checkBox.addEventListener('change', () => {
  btnSubmit.disabled = false;
});

textarea.addEventListener('keyup', () => {
  const countRemaining = document.querySelector('#counter');
  const textEntered = textarea.value;
  const counter = (500 - (textEntered.length));

  countRemaining.textContent = counter;
});
