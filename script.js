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

const agreement = document.getElementById('agreement');

function ocultButton() {
  if (agreement.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } 
  if (agreement.checked === false) {
    document.getElementById('submit-btn').disabled = true;
  }
}

agreement.addEventListener('click', ocultButton);

const textArea = document.getElementById('textarea');

function conText(event) {
  const max = 500;
  const total = textArea.value.length;
  if (max >= total) {
    const resto = max - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    event.preventDefault();
  }
}

textArea.addEventListener('keyup', conText);
