const formLogin = document.querySelector('.trybewarts-login');
const inputEmail = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const termos = document.querySelector('#agreement');
const botaoEnvia = document.querySelector('#submit-btn');
const textArea = document.querySelector('#comentario');
const tamanhoTextoAtual = document.querySelector('#atual');

console.log(tamanhoTextoAtual);

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
  } else { botaoEnvia.disabled = true; }
}

verificaTermos();

function contaCaracteres() {
  var atual = tamanhoTextoAtual.innerHTML;
  atual = 500;
  tamanhoTextoAtual.innerHTML = atual - textArea.value.length;
}

textArea.addEventListener('keyup', contaCaracteres);
termos.addEventListener('click', verificaTermos);
formLogin.addEventListener('submit', verificaLogin);
