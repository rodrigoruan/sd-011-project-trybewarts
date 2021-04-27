const email = 'tryber@teste.com';
const pass = '123456';
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const buttonInput = document.querySelector('#button');

function login() {
  if (loginInput.value === email && passwordInput.value === pass) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonInput.addEventListener('click', login);

const checkBtn = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function check() {
  var status = submitBtn.disabled;

  if (checkBtn.checked == false) {
    submitBtn.disabled = true;
    console.log('esta ok');
  } else if (checkBtn.checked == true) {
    submitBtn.disabled = false;
    console.log('false');
  }
}

submitBtn.addEventListener('click', check);
