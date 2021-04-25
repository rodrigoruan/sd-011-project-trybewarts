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

function ocultButton() {
  document.getElementById('submit-btn').classList.toggle('desOcult');
}

const agreement = document.getElementById('agreement');

agreement.addEventListener('click', ocultButton);
