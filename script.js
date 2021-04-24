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