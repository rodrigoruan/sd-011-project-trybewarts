// // get submit button
const loginButton = document.getElementById('login-button');
// get agreement checkbox
let agreementBox = document.getElementById('agreement');
// get send form button
let sendFormBtn = document.getElementById('submit-btn');
// get text area 
let textAreaInput = document.getElementsByTagName('textarea');
// get counter
let textCounter = document.getElementById('counter');

//// Login Function
loginButton.addEventListener('click', () => {
  // get login input
  const loginInput = document.getElementById('login');
  // get password input
  let passwordInput = document.getElementById('password');
  if (loginInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Enable Send Form button!
agreementBox.addEventListener('change', () => {
  if (agreementBox.checked) {
    sendFormBtn.removeAttribute('disabled')
  } else {
    sendFormBtn.setAttribute('disabled', 'disabled');
  }
})

// Word Count
textAreaInput[0].addEventListener('keyup', () => {
  textCounter.innerText = 500 -  textAreaInput[0].value.length;
})

function getHouse() {
  const houseArray = document.getElementsByClassName('input-house');
  let chosenHouse = '';
  for (let i = 0; i < houseArray.length; i +=1) {
    if (!houseArray[i].selected) {
        continue;
      } 
    chosenHouse = houseArray[i].value;
  }
  return chosenHouse;
}

function getFamily() {
  const familyArray = document.getElementsByClassName('input-family');
  let chosenFamily = '';
  for (let i = 0; i < familyArray.length; i +=1) {
    if (!familyArray[i].checked) {
        continue;
      } 
    chosenFamily = familyArray[i].value;
  }
  return chosenFamily;
}

function getSubjects() {
  const subjectArray = document.getElementsByClassName('subject');
  let chosenSubject = [];
  for (let i = 0; i < subjectArray.length; i +=1) {
    if (!subjectArray[i].checked) {
        continue;
      } 
    chosenSubject.push(subjectArray[i].value);
  }
  return chosenSubject.join(', ');
}

function getNPS() {
  const npsArray = document.getElementsByClassName('input-nps');
  let chosenNPS = [];
  for (let i = 0; i < npsArray.length; i +=1) {
    if (!npsArray[i].checked) {
        continue;
      } 
      chosenNPS = npsArray[i].value;
  }
  return chosenNPS;
}

const formsOutput = document.getElementById('evaluation-form');

sendFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formResult = {
    Nome: `${document.getElementById('input-name').value} ${document.getElementById('input-lastname').value}`,
    Email: document.getElementById('input-email').value,
    Casa: getHouse(),
    Família: getFamily(),
    Matérias: getSubjects(),
    Avaliação: getNPS(),
    Observações: document.getElementsByTagName('textarea')[0].value,
  }
  const formResultKeys = Object.keys(formResult);
  for (let key in formResultKeys) {
    let newFormInfo = document.createElement('p');
    formsOutput.appendChild(newFormInfo).innerText = `${formResultKeys[key]}: ${formResult[formResultKeys[key]]}`;
    // console.log(`${formResultKeys[key]}: ${formResult[formResultKeys[key]]}`);
  }
  // document.getElementById('evaluation-form')[0].style.display = 'none';
})

