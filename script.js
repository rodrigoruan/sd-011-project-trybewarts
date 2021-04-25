const btnSubmit = document.querySelector('#btnSubmit'); // seletor botao logar.
const evaluateFieldDiv = document.querySelector('.evaluateField'); // seletor camp de avaliacao.
const agreeCheckbox = document.querySelector('#agreement'); // checkbox do "concordo"
const submitBtn = document.querySelector('#submit-btn'); // botao de submit.
const textAreaComment = document.querySelector('#textarea'); // area dos comentários.
const allForm = document.getElementById('evaluation-form'); // formulario inteiro.
let userFirstName = document.getElementById('input-name').value; // primeiro nome
let userLastName = document.getElementById('input-lastname').value; // segundo nome
let userEmail = document.getElementById('input-email').value; // email
let userHouse = document.getElementById('house').value; // casa
let userFamily = allForm.elements.namedItem('family').value; // familia
let allCheckBoxes = document.getElementsByClassName('subject'); // pega as checkbox


function submitLoginInfo(event) { // Funcao que valida o login, e exibe o alert adequado.
  event.preventDefault();
  const loginValue = document.getElementById('loginInfo').value;
  const passwdValue = document.getElementById('passwdInfo').value;
  if (loginValue !== 'tryber@teste.com' || passwdValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnSubmit.addEventListener('click', submitLoginInfo);

function createEvaluateRadios() { // cria os radios input na parte de nota.
  let n = 1;
  while (n < 11) {
    const radioToCreateLabel = document.createElement('label');
    const radioToCreateTag = document.createElement('input');
    radioToCreateLabel.innerText = n.toString();
    radioToCreateLabel.setAttribute('for', n.toString());
    radioToCreateTag.setAttribute('type', 'radio');
    radioToCreateTag.setAttribute('name', 'rate');
    radioToCreateTag.setAttribute('value', n.toString());
    evaluateFieldDiv.appendChild(radioToCreateTag);
    evaluateFieldDiv.appendChild(radioToCreateLabel);
    n += 1;
  }
}

createEvaluateRadios();

function enableSubmit() { // Faz o requisito 18 funcionar. Enable/disable submit.
  if (agreeCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreeCheckbox.addEventListener('change', enableSubmit);

function calcTextArea() { // conta os catacteres restantes.
  const quant = 500;
  const total = textAreaComment.value.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  }
}

textAreaComment.addEventListener('keyup', calcTextArea);

// Variaveis e funcoes que constroi o perfil após clicar em enviar.

function getUserSubjects() {
  prefSubjects = [];
  for (checkbox of allCheckBoxes) {
    if (checkbox.checked) {
      console.log(checkbox.value)
      prefSubjects.push(' ' + checkbox.value);
    }
  }
  return prefSubjects;
}


function getVariablesValues() {
  userFirstName = document.getElementById('input-name').value; // primeiro nome
  userLastName = document.getElementById('input-lastname').value; // segundo nome
  userEmail = document.getElementById('input-email').value; // email
  userHouse = document.getElementById('house').value; // casa
  userFamily = allForm.elements.namedItem('family').value; // familia
}

function constructProfile(event) {
  event.preventDefault();
  getVariablesValues();
  getUserSubjects()
  let userRate = allForm.elements.namedItem('rate').value; // nota para a escola
  let markedSubjects = getUserSubjects();
  linebreak = document.createElement("br");
  allForm.innerHTML = '';
  console.log(allForm.innerHTML);
  allForm.innerHTML += 'Nome: ' +  userFirstName + ' ' +  userLastName;
  allForm.appendChild(linebreak);
  allForm.innerHTML += 'Email: ' + userEmail;
  allForm.appendChild(linebreak);
  allForm.innerHTML += 'Casa: ' + userHouse;
  allForm.appendChild(linebreak);
  allForm.innerHTML += 'Família: ' + userFamily;
  allForm.appendChild(linebreak);
  allForm.innerHTML += 'Matérias: ' + markedSubjects;
  allForm.appendChild(linebreak);
  allForm.innerHTML += 'Avaliação: ' + userRate;
  allForm.appendChild(linebreak);
  allForm.innerHTML += 'Observações: ' + textAreaComment.value;
}

submitBtn.addEventListener ('click',constructProfile);
