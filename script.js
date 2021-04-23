const formLogin = document.querySelector('.trybewarts-login');
const inputEmail = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const enviar = document.querySelector('#enviar');


function verificaLogin() {
  const email = inputEmail.value;
  const senha = inputSenha.value;
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';

  if (email !== loginPadrao || senha !== senhaPadrao) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

formLogin.addEventListener('submit', verificaLogin);
