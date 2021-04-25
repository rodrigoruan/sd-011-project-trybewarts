const login = document.querySelector('#input-login');
const pass = document.querySelector('#input-password');

function validateLogin() {
  if (login.value !== 'tryber@teste.com' || pass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const loginButton = document.querySelector('#button-header');
loginButton.addEventListener('click', validateLogin);

const textarea = document.getElementById('textarea');
const maxContador = textarea.getAttribute('maxlength');

const counter = document.getElementById('counter');
counter.innerText = textarea.getAttribute('maxlength');

function contaCaracteries() {
  const campo = textarea.value.length;
  const restante = maxContador - campo;
  counter.innerHTML = restante;
}

textarea.addEventListener('keyup', contaCaracteries);
textarea.addEventListener('keydown', contaCaracteries);

const agreement = document.getElementById('agreement');
const formButton = document.getElementById('submit-btn');

/**
 * Ref: https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked
 */
function enableButton() {
  if (agreement.checked) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}
agreement.addEventListener('change', enableButton);

const fistName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');

/**
 * Essa funcao cria elementos P
 */
function newElement() {
  const createP = document.createElement('p');
  createP.className = 'result';
  return createP;
}

/**
 * Essa funcao cria um array com as opcoes de conteudo marcadas no formulario
 * Ref: https://www.w3schools.com/js/js_array_methods.asp
 */
function subjects() {
  const subjectsValues = document.querySelectorAll('input[class="subject"]:checked');
  const arrSubjectsValues = [];
  for (let index = 0; index < subjectsValues.length; index += 1) {
    arrSubjectsValues.push(` ${subjectsValues[index].value}`);
  }
  return arrSubjectsValues.join(', ');
}

/**
 * Essa funcao retorna os valores preenchidos no formilario em objeto
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector#find_a_specific_element_with_specific_values_of_an_attribute
 */
function formData() {
  const nameVal = fistName.value;
  const lastNameVal = lastName.value;
  const emailVal = email.value;
  const houseVal = house.value;
  const familyVal = document.querySelector('input[name="family"]:checked').value;
  const rateVal = document.querySelector('input[name="rate"]:checked').value;
  const commentVal = textarea.value;
  const subjectsVal = subjects();

  return { nameVal, lastNameVal, emailVal, houseVal, familyVal, subjectsVal, rateVal, commentVal };
}

/**
 * Essa funcao cria elementos p para cada input do formulario contendo os valores preenchidos
 * Ref: https://eslint.org/docs/rules/prefer-template
 * https://www.w3schools.com/js/js_object_definition.asp
 */
function formDataElements() {
  const formValues = formData();
  const nameP = newElement();
  nameP.innerText = `Nome: ${formValues.nameVal} ${formValues.lastNameVal}`;
  const emailP = newElement();
  emailP.innerText = `Email: ${formValues.emailVal}`;
  const houseP = newElement();
  houseP.innerText = `Casa: ${formValues.houseVal}`;
  const familyP = newElement();
  familyP.innerText = `Família: ${formValues.familyVal}`;
  const subjectsP = newElement();
  subjectsP.innerText = `Matérias: ${formValues.subjectsVal}`;
  const rateP = newElement();
  rateP.innerText = `Avaliação: ${formValues.rateVal}`;
  const commentP = newElement();
  commentP.innerText = `Observações: ${formValues.commentVal}`;
  return [nameP, emailP, houseP, familyP, subjectsP, rateP, commentP];
}

/**
 * Essa funcao impede que aconteca o evento default do botao submit e adiciona os elementos P criados
 * anteriormente ao elemento form
 */
function appendFormData(event) {
  event.preventDefault();
  const children = formDataElements();
  const evaluationForm = document.getElementById('evaluation-form');
  for (let index = 0; index < children.length; index += 1) {
    evaluationForm.appendChild(children[index]);
  }
}

formButton.addEventListener('click', appendFormData);
