const submitButton = document.querySelector('#submit-button');

function validation() {
  const login = document.querySelector('#login').value;
  const pass = document.querySelector('#pass').value;
  if (login === 'tryber@teste.com' && pass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitButton.addEventListener('click', validation);

document.getElementById('submit-btn').disabled = true;
function ocultButton() {
  document.getElementById('submit-btn').disabled = false;
}

const agreement = document.getElementById('agreement');

agreement.addEventListener('click', ocultButton);

const textArea = document.getElementById('textarea');

function conText() {
  const max = 500;
  const total = textArea.value.length;
  const resto = max - total;
  document.getElementById('counter').innerHTML = resto;
}

textArea.addEventListener('keyup', conText);
