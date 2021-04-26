const headerForm = document.querySelector('.trybewarts-login');
const loginSubmit = document.getElementById('trybewarts-login-submit');

loginSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  if (headerForm.elements[0].value === 'tryber@teste.com'
  && headerForm.elements[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

agreement.addEventListener('click', (event) => {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

counter.innerText = textArea.maxLength;
textArea.addEventListener('keyup', () => {
  counter.innerText = textArea.maxLength - textArea.value.length;
});

const trybewartsMain = document.querySelector('.trybewarts-main');

const infos = [];

infos[0] = document.createElement('div');
infos[0].innerText = 'Nome: ';
infos[1] = document.createElement('div');
infos[1].innerText = 'Email: ';
infos[2] = document.createElement('div');
infos[2].innerText = 'Casa: ';
infos[3] = document.createElement('div');
infos[3].innerText = 'Família: ';
infos[4] = document.createElement('div');
infos[4].innerText = 'Matérias: ';
infos[5] = document.createElement('div');
infos[5].innerText = 'Avaliação: ';
infos[6] = document.createElement('div');
infos[6].innerText = 'Observações: ';

const evaluationForm = document.getElementById('evaluation-form');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  trybewartsMain.innerHtml = '';
  for (let index of evaluationForm) {
    console.log(index);
  }
});
