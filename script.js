// requisito 3
const loginButton = document.getElementById('sendButton');
function sendLogin() {
  const user = document.getElementById('login').value;
  const password = document.getElementById('senha').value;
  if (user === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', sendLogin);

// requisito 18
const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
function changeBtnStatus(event) {
  if (event.target.checked === true) {
    return (submitBtn.removeAttribute('disabled'));
  }
  return (submitBtn.setAttribute('disabled', true));
}
checkbox.addEventListener('change', changeBtnStatus);

// requisito 20
// */fonte:https://www.youtube.com/watch?v=X-LVkU95jLU*/
const textArea = document.getElementById('textarea');
const remaniningCharacters = document.querySelector('#counter');
const maxCharacters = 500;
function counterCharacters() {
  const characters = maxCharacters - (textArea.value.length);
  remaniningCharacters.textContent = characters;
}
textArea.addEventListener('input', counterCharacters);

// requisito 21
function buildTextDiv1(fName, lName, email, house) {
  const pNome = document.createElement('p')
  pNome.innerText = `Nome: ${fName} ${lName}`;
  const pEmail = document.createElement('p');
  pEmail.innerText = `Email: ${email}`;
  const pHouse = document.createElement('p');
  pHouse.innerText = `Casa: ${house}`;
  const form = document.getElementById('evaluation-form');
  form.insertBefore(pHouse, form.firstChild);
  form.insertBefore(pEmail, form.firstChild);
  form.insertBefore(pNome, form.firstChild);
}

function getInfoDiv1() {
  const fName = document.getElementById('input-name').value;
  const lName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  buildTextDiv1(fName, lName, email, house);
}
function buildTextDiv2(selectedFamily, subjectChecks) {
  const pFamily = document.createElement('p');
  pFamily.innerText = `Família: ${selectedFamily}`;
  const pSubject = document.createElement('p');
  pSubject.innerText = `Matérias: ${subjectChecks}`;
  const form = document.getElementById('evaluation-form');
  form.insertBefore(pSubject, form.firstChild);
  form.insertBefore(pFamily, form.firstChild);
}
function getInfoDiv2() {
  // identificando a familia
  const family = document.getElementsByClassName('family');
  const familyArray = Array.from(family);
  let selectedFamily = familyArray.filter((elemento) => elemento.checked === true);
  selectedFamily = selectedFamily[0].value;

  // identificando o conteúdo
  const subject = document.getElementsByClassName('subject');
  const subjectArray = Array.from(subject);
  let subjectChecks = subjectArray.filter((elemento) => elemento.checked === true);
  subjectChecks = subjectChecks.map((elemento) => elemento.value);
  subjectChecks = subjectChecks.join(', ');
  console.log(subjectChecks);
  buildTextDiv2(selectedFamily, subjectChecks);
}
function biuldTextDiv3(rateValue, notes) {
  const pRate = document.createElement('p');
  pRate.innerText = `Avaliação: ${rateValue}`;
  const pNotes = document.createElement('p');
  pNotes.innerText = `Observações: ${notes}`;
  const form = document.getElementById('evaluation-form');
  form.insertBefore(pNotes, form.firstChild);
  form.insertBefore(pRate, form.firstChild);
}
function getInfoDiv3() {
  // identificando a nota
  const rate = document.getElementsByClassName('rate');
  const rateArray = Array.from(rate);
  let rateValue = rateArray.filter((elemento) => elemento.checked === true);
  rateValue = rateValue[0].value;

  // identificando o comentário
  const notes = document.getElementById('textarea').value;
  biuldTextDiv3(rateValue, notes);
}
function changeForms(event) {
  event.preventDefault();
  getInfoDiv3();
  getInfoDiv2();
  getInfoDiv1();
  const divForms = document.querySelector('.div-form');
  divForms.style.display = 'none';
}
submitBtn.addEventListener('click', changeForms);
