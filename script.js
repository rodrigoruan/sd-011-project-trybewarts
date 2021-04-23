const buttonLogin = document.getElementById('button-login');
const inputName = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
// const checkboxAgreement = document.getElementById('agreement')
// const buttonSubmit = document.getElementById('submit-btn')
const userName = 'tryber@teste.com';
const password = '123456';

function checkLogin() {
  const validationLogin = (inputName.value === userName && inputPassword.value === password);
  if (validationLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// Botão desabilitado: https://stackoverflow.com/questions/46917270/javascript-disable-button-until-all-fields-are-filled.
// function checkAgreement() {
//   if (checkboxAgreement.value === 'on') {
//     buttonSubmit.disabled = true;
//   } else {
//     buttonSubmit.disabled = false
//   }
// }

// function sendForm() {

// }

// window.onload = function opening() {
//   buttonSubmit.disabled = false
// }

buttonLogin.onclick = checkLogin;
// checkboxAgreement.onclick = checkAgreement
// buttonSubmit.onclick = sendForm;
