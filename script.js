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
let testando = document.getElementsByTagName('input')
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