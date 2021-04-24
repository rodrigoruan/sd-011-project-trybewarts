const buttonLogin = document.getElementById('button-login');
const inputName = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
const checkboxAgreement = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
const userName = 'tryber@teste.com';
const password = '123456';
// let counter = document.getElementById('counter');
// const textArea = document.getElementById('textarea');

function checkLogin() {
  const validationLogin = (inputName.value === userName && inputPassword.value === password);
  if (validationLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// Botão desabilitado: https://stackoverflow.com/questions/46917270/javascript-disable-button-until-all-fields-are-filled.
function checkAgreement(event) {
  if (event.target.classList.contains('on')) {
    event.target.classList.remove('on');
    buttonSubmit.disabled = true;
  } else {
    event.target.classList.add('on');
    buttonSubmit.disabled = false;
  }
}

// function countChars(textarea) {

//   textArea.innerHTML = 'Characters left: ' + (500 - this.value.length);
//   eslint-disable-next-line no-undef
//   const { length } = textarea;
//   const charactersLeft = 500 - length;
//   console.log(charactersLeft);
//   counter.innerHTML = `Characters left: ${charactersLeft}`;
//   let elemento = document.createElement('input');
//   return ('placeholder' in elemento);

//   const target = event.currentTarget;
//   console.log(target);
//   const maxLength = target.getAttribute('maxlength');
//   const currentLength = target.value.length;

//   if (currentLength >= maxLength) {
//     return console.log('You have reached the maximum number of characters.');
//   }

//   console.log(`${maxLength - currentLength} chars left`);
// }

function sendForm() {

}

window.onload = function opening() {
  buttonSubmit.disabled = true;
};

buttonLogin.addEventListener('click', checkLogin);
checkboxAgreement.addEventListener('click', checkAgreement);
buttonSubmit.addEventListener('click', sendForm);
// textArea.addEventListener('input', countChars);
