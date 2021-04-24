// Resolução do requisito 3
const login = document.querySelector('#insertLogin');
const password = document.querySelector('#insertPassword');
const submit = document.querySelector('#submitLogin');

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
submit.addEventListener('click', loginCheck);

// Resolução do requisito 18
const btnSubmit = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');

checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
});

// Resolução do requisito 20
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textarea.addEventListener('input', () => {
  counter.innerHTML = textarea.maxLength - textarea.value.length;
});

// Requisito 21
/*
* Para a resolução desse requisito consultei a PR de Nicolas Pereira Silva
* Link: https://github.com/tryber/sd-011-project-trybewarts/pull/95
*/
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const evaluationForm = document.querySelector('#evaluation-form');
const textAreaInput = document.querySelector('#textarea');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
function skillChecked() {
  const skillSelected = document.querySelectorAll('.subject:checked');
  const skill = [];
  for (let index = 0; index < skillSelected.length; index += 1) {
    skill.push(`${skillSelected[index].value}`);
  }
  return skill;
}

function submitForm(event) {
  const data = {
    Nome: `${inputName.value} ${inputLastName.value}`,
    Email: `${inputEmail.value}`,
    Casa: `${house.value}`,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: skillChecked(),
    Avaliação: ` ${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `${textAreaInput.value}`,
  };
  let y = '';
  for (const x of Object.keys(data)) {
    y += `${x}: ${data[x]}<br>`;
    event.preventDefault();
  }
  evaluationForm.innerHTML = y;
  event.preventDefault();
}

const btnToSubmit = document.querySelector('#submit-btn');
btnToSubmit.addEventListener('click', submitForm);
