// req 3 alerta ao logar
/* const emailLogin = document.getElementById("email").innerText.value;
const passwordLogin = document.getElementById("senha").innerText.value;
const buttonEmail = document.getElementById("Login");

function checkInput() {
 if (emailLogin === ("tryber@teste.com") && passwordLogin === ("123456") {
  alert('Login ou senha inválidos.');
 }else {
  alert('Olá, Tryber!');
 }
}
addEventListener.buttonEmail(click, checkInput); */

const agreementChecked = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function check() {
  if (agreementChecked.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreementChecked.addEventListener('change', check);
