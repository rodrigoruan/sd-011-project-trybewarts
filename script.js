const loginInput = document.getElementById('loginInput');
const senhaInput = document.getElementById('senhaInput');
const submitLoginBttn = document.getElementById('login-button');
const formCheckBox = document.getElementById('agreement');
const submitFormButton = document.getElementById('submit-btn');
submitFormButton.disabled = true;

submitLoginBttn.addEventListener('click', () => {
  const loginInputVal = loginInput.value;
  const senhaInputVal = senhaInput.value;
  if (loginInputVal !== 'tryber@teste.com' || senhaInputVal !== '123456') {
    alert('Login ou senha inválidos.');
  } else if (loginInputVal === 'tryber@teste.com' && senhaInputVal === '123456') {
    alert('Olá, Tryber!');
  }
});

formCheckBox.addEventListener('click', () => {
  if (formCheckBox.checked) {
    submitFormButton.disabled = false;
  } else {
    submitFormButton.disabled = true;
  }
});


const textArea = document.getElementById('textarea');
const textCounter = document.getElementById('counter');

textArea.addEventListener('input', () => {
  const saveCharsNumber = textArea.value.length;
  textCounter.innerText = 500 - saveCharsNumber;
});