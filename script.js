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

const buttom = document.querySelector('#submit-btn');
const subject = document.querySelector('.subject');



function materiasChecked() {
  const inputChecked = document.querySelectorAll('.subject:checked');
  const inputValue = [];
  for (let index = 0; index < inputChecked.length; index += 1) {
    inputValue.push(` ${inputChecked[index].value}`);
  }
  return inputValue;
}


function setInputDiv (event) {
  const nameInput = document.getElementById('input-name');
  const lastnameInput = document.getElementById('input-lastname');
  const email = document.getElementById('input-email')
  const casa = document.getElementById('house');
  const obs = document.getElementById('textarea');
  


  const result = {
    Nome : `${nameInput.value} ${lastnameInput.value}`,
    Email: email.value,
    Casa: casa.value,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: materiasChecked(),
    Avaliação: document.querySelector('input[name="rate"]:checked').value,
    Observações: obs.value
  };
  let formsPrint = '';
  for(let index of Object.keys(result)){
    formsPrint += `${index}: ${result[index]}`;
    event.preventDefault();
  }
  console.log(formsPrint);
  forms.innerHTML = formsPrint;
  
}

buttom.addEventListener('click' , setInputDiv);
