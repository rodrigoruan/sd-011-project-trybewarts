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

// Enable Send Form button
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


//// TESTES DO ULTIMO ITEM BONUS
/* let testando = document.getElementsByTagName('input')
let testandoArray = [];

for (let key of testando) {
  if (key.type === 'radio')
  testandoArray.push(key);
}

console.log(testandoArray);

if (testandoArray[0].type === 'radio' && !testandoArray[0].checked || testandoArray[0].type === 'checkbox' && !testandoArray[0].checked) {
  console.log('NAUM TA MARCADO');
} else if (testandoArray[1].checked) {
  console.log('TA MARCADO')
}
 */

function verifyfamily() {
  const family = document.getElementsByName('family');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      const checkFamily = family[index].value;
      return checkFamily;
    }
  }
}

function options(){
  const option = document.getElementsByClassName('option');
  const array = [];
  let string = '';
  for (let index = 0; index < option; index +=1){
    if (option[index].checked){
      array.push(` ${option[index].value}`);
    }
  }
  string = string + array.toString();
  return string;

}  

function verifyRate(){
  const rate = document.getElementsByName('rate');
  for (let index = 0; index < rate.length; index +=1){
    if (rete[index].checked) {
      const checkRate = rate[index].value;
      return checkRate;
    }
  }

}

sendFormBtn.addEventListener('click', () => {
  const forms = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = checkFamily();
  const contents = checkContent();
  const rate = checkRate();
  const obs = textArea;



  const array2 = [name.value, lastName.value, email.value, house.value, family.value, contents, rate, obs.value];
  const item = ['Nome: ', 'Email: ', 'Casa: ', 'Família: ', 'Matérias:', 'Avaliação: ', 'Observações: '];

  for (let index = 0; index < array2.length; index +=1){
    if(index === 0) {
      forms.innerText = `${item[index]} ${array2[index]}`;
    }
  }
});





