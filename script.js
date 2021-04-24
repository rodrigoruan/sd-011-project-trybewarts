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

function submit() {
  const agreement = document.getElementById('agreement');
  if (agreement.checked) {
    document.getElementById('submit-btn').style.display = 'flex';
  } else {
    document.getElementById('submit-btn').style.display = 'none';
  }
}

submit();