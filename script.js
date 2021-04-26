const buttonLogin = document.getElementById('btn-login');

buttonLogin.addEventListener('click', () => {
  const inputLogin = document.getElementById('login');
  const inputSenha = document.getElementById('senha');
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const boxAgreement = document.getElementById('agreement');
const btnSend = document.getElementById('submit-btn');

function SendButton() {
  boxAgreement.addEventListener('click', () => {
    if (btnSend.disabled) {
      btnSend.disabled = false;
    } else {
      btnSend.disabled = true;
    }
  });
}
SendButton();

const textField = document.getElementById('textarea');
const counter = document.getElementById('counter');

function counterText() {
  const comments = textField.value.length;
  counter.textContent = 500 - comments;
}
textField.addEventListener('keyup', counterText);
