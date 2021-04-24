// // get submit button
const loginButton = document.getElementById('login-button');
// get agreement checkbox
let agreementBox = document.getElementById('agreement');
// get send form button
let sendFormBtn = document.getElementById('bubmit-btn');

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

//
agreementBox.addEventListener('change', () => {
  if (agreementBox.checked) {
    sendFormBtn.removeAttribute('disabled')
  } else {
    sendFormBtn.setAttribute('disabled', 'disabled');
  }
})