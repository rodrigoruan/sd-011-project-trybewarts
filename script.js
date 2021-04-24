const formLogin = document.querySelector('.trybewarts-login');
const inputEmail = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const termos = document.querySelector('#agreement');
const botaoEnvia = document.querySelector('#submit-btn');

function verificaLogin(event) {
  event.preventDefault();
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

function verificaTermos() {
  if (termos.checked) {
    botaoEnvia.disabled = false;
  } else { botaoEnvia.disabled = true;}
}

verificaTermos();

termos.addEventListener('click', verificaTermos);
formLogin.addEventListener('submit', verificaLogin);
