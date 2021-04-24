const btnLogin = document.querySelector('#btn-login');

function validateLoginPassword() {
  const form1 = document.querySelector('.trybewarts-login');
  const login = document.querySelector('#inputEmail1');
  const password = document.querySelector('#inputPassword1');
  if (login.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
    form1.value = '';
  }
}
btnLogin.addEventListener('click', validateLoginPassword);

const textarea = document.querySelector('#textarea');
textarea.addEventListener('keypress', (event) => {
  const maxChar = 500;
  const charLength = textarea.value.length;
  console.log(charLength);
  if (charLength > maxChar) {
    event.preventDefault();
  }
});

const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitBtn.disable = true;
    } else {
      submitBtn.disable = false;
    }
});
