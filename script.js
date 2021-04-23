const buttonLogin = document.getElementById('button-login');
const inputLogin = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const buttonForm = document.getElementById('submit-btn').disabled = true;
const agreementSelect = document.getElementById('agreement');

function validLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function login() {
  buttonLogin.addEventListener('click', validLogin);
}

function validForm() {
  // if (agreementSelect.value === 'on') {
  //   buttonForm.disabled=true;
  //   console.log(agreementSelect.value);
  // } else {
  //   buttonForm.disabled=false;
  //   console.log(agreementSelect.value);
  // }
}

login();
validForm();