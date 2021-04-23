const btnSubmit = document.querySelector('#btnSubmit'); // seletor botao logar

function submitLoginInfo(event) { // Funcao que valida o login, e exibe o alert adequado.
  event.preventDefault();
  const loginValue = document.getElementById('loginInfo').value;
  const passwdValue = document.getElementById('passwdInfo').value;
  if (loginValue !== 'tryber@teste.com' || passwdValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnSubmit.addEventListener('click', submitLoginInfo);
