const login = document.querySelector('#input-login');
const pass = document.querySelector('#input-password');

function validateLogin() {
  if (login.value !== 'tryber@teste.com' || pass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const loginButton = document.querySelector('#button-header');
loginButton.addEventListener('click', validateLogin);


//Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keypress_event


const textarea = document.getElementById('textarea');
let maxContador = textarea.getAttribute('maxlength')

let counter = document.getElementById('counter');
counter.innerText = textarea.getAttribute('maxlength');



function contaCaracteries() {  
   
  let campo = textarea.value.length;
  let restante = maxContador - campo
 
  counter.innerHTML = restante;

}

textarea.addEventListener('keyup', contaCaracteries);
textarea.addEventListener('keydown', contaCaracteries);
