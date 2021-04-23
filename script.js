const checkboxAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const loginButton = document.querySelector('#loginBtn');
const loginPlace = document.querySelector('#loginValue');
const passwordPlace = document.querySelector('#senhaValue');
const textPlace = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function agreementCheck() {
  if (checkboxAgreement.checked === false) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

checkboxAgreement.addEventListener('click', agreementCheck);

loginButton.addEventListener('click', () => {
  if (loginPlace.value === 'tryber@teste.com' && passwordPlace.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

textPlace.addEventListener('keyup', () => {
  const textSize = textPlace.value.length;
  const count = 500 - textSize;
  counter.innerHTML = count.toString();
});

//21
const nameInput = document.querySelector('#input-name');
const lastNameInput = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const houseInput = document.querySelector('#house');
const houseChoice = document.getElementsByClassName('family');
const rateChoice = document.getElementsByClassName('radioRate');
const wichContent = document.getElementsByClassName('subject');
const radioRate = document.getElementsByClassName('radioRate');
// const textPlace = document.querySelector('#textarea');
function checkedRadio() {
  for(let index = 0; index < houseChoice.length; index += 1){
    if(houseChoice[index].checked === true){
      return houseChoice[index]
    }
  }
}
function checkedRate() {
  for(let index = 0; index < rateChoice.length; index += 1){
    if(rateChoice[index].checked === true){
      return rateChoice[index]
    }
  }
}
submitButton.addEventListener('click', (event) => {
  const checkedFunction = checkedRadio();
  const checkedRated = checkedRate();
  event.preventDefault();
  console.log(nameInput.value);
  console.log(lastNameInput.value);
  console.log(emailInput.value);
  console.log(houseInput.value);
  console.log(checkedFunction.value);
  console.log(wichContent.value);
  console.log(checkedRated.value);
  console.log(textPlace.value);
});


