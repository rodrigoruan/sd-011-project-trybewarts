const btnSubmit = document.querySelector('#btnSubmit'); // seletor botao logar
const loginField = document.querySelector('#loginInfo'); // seletor input login
const passwdField = document.querySelector('#passwdInfo'); // seletor input senha


function submitLoginInfo(event) { // Funcao que valida o login, e exibe o alert adequado.
  event.preventDefault();
  let loginValue = document.getElementById('loginInfo').value;
  let passwdValue = document.getElementById('passwdInfo').value;
  if (loginValue !== 'tryber@teste.com' || passwdValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnSubmit.addEventListener('click', submitLoginInfo);