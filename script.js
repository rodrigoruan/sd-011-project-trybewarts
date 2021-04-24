function checkLogin() {
  const inputList = document.querySelectorAll('.trybewarts-login input');
  if (inputList[0].value === 'tryber@teste.com' && inputList[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function addEventCheckLogin() {
  const button = document.querySelector('.trybewarts-login button');
  button.addEventListener('click', checkLogin);
}

function disableButon(event) {
  const checkbox = event.target;
  const button = document.getElementById('submit-btn');
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function addEventDisableButton() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', disableButon);
}

function countChars() {
  const counter = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  counter.innerText = 500 - textarea.value.length;
}

function addEventCount() {
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', countChars);
}

function replaceForm() {
  const main = document.getElementById('main');
  const form = document.getElementById('evaluation-form');
  const img = document.getElementById('trybewarts-forms-logo');
  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputHouse = document.getElementById('house').value;
  const radioFamily = document.querySelector('input[name="family"]:checked').value;
  const checkBoxSubject = document.querySelectorAll('input.subject:checked');

  let getItensCheckBox = [];
  for( let i = 0; i < checkBoxSubject.length; i += 1) {
    if (checkBoxSubject[i].checked) {
      getItensCheckBox.push(checkBoxSubject[i].value);
    }
  }

  form.parentNode.removeChild(form);

 // const creatForm = document.createElement('div');
  const creatParagraph  = document.createElement('p');

  // creatForm.id = 'evaluation-form';

  creatParagraph.innerHTML = `Nome: ${inputHouse} ${radioFamily}`; 
  // inputLastName.value = `${inputLastName}`;

  main.appendChild(creatParagraph);
  //  main.insertBefore(creatForm, img);
  //  creatForm.appendChild(creatDiv);
}

function addEventBtnSubmit() {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', replaceForm);
}

window.onload = function load() {
  addEventCheckLogin();
  addEventDisableButton();
  addEventCount();
  addEventBtnSubmit();
};
