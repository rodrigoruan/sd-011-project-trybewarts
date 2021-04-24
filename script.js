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

agreement.addEventListener('click', () => {
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

const main = document.querySelector('.trybewarts-main');
const forms = document.getElementById('evaluation-form');

const buttom = document.querySelector('#trybewarts-login-submit');
const subject = document.querySelector('.subject');

function setInputDiv () {
  let formData = new FormData(forms);
  
  for (let pair of Object.entries(formData)) {
    const div = document.createElement('div');
    div.className = 'subject';
    div.innerHTML = `<span clss="left">${pair[0]}: ${pair[1]}</span>`;
    subject.appendChild(div);
  }
}

buttom.addEventListener('click' , setInputDiv);
