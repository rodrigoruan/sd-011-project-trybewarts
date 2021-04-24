const usuario = 'tryber@teste.com';
const senha = '123456';

function loginTryber() {
  const email = document.getElementById('email').value;
  const passwordUser = document.getElementById('senha').value;
  if (usuario !== email || senha !== passwordUser) {
    alert('Login ou senha inválidos.');
  } else if (usuario === email || senha === passwordUser) {
    alert('Olá, Tryber!');
  }
}

function botaoLogar() {
  const firstButton = document.querySelector('#login-submit');
  firstButton.onclick = loginTryber;
}
window.onload = botaoLogar;

const agreeCheck = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

agreeCheck.addEventListener('click', () => {
  submitButton.removeAttribute('disabled');
});

const textArea = document.getElementById('textarea');
function counterText() {
  const countInit = 500;
  const maxLength = document.getAttribute('maxlength');
  const currentLength = textArea.length;
  const minLength = document.getAttribute('minLength');
  if (currentLength === minLength) {
    document.getElementById('counter').innerText = '500';
  } else if (currentLength > minLength && currentLength <= maxLength) {
    const countAtual = countInit - currentLength;
    document.getElementById('counter').innerText = countAtual;
  }
}
window.onload = () => {
  textArea.addEventListener('input', counterText);
};
