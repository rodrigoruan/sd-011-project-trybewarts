// -Declaração de constantes
const passwordInput = document.querySelector('#password');
const buttonLogin = document.querySelector('#button');

function emailChecker() {
  const loginInput = document.querySelector('#email').value;
  let test = false;
  for ( let index = 0; index < loginInput.length; index += 1){
    if (loginInput[index] === '@') {
      test = true;
    }
  }
  if(!test){
    alert('Login ou senha inválidos.');
  }
}

function passwordChecker() {
  let password = passwordInput.value;
  if (isNaN(password)) {
    alert('Login ou senha inválidos.');
  }
  if (password.length !== 6){
    alert('Login ou senha inválidos.');
  }
}

function addEventListenerChecker(){
  passwordChecker()
  emailChecker()
}

buttonLogin.addEventListener('click', addEventListenerChecker);