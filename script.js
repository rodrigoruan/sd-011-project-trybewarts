const loginInput = document.getElementById('loginInput');
const senhaInput = document.getElementById('senhaInput');
const submitLoginBttn = document.getElementById('login-button');

submitLoginBttn.addEventListener('click', () => {
  const loginInputVal = loginInput.value;
  const senhaInputVal = senhaInput.value;
  if (loginInputVal !== 'tryber@teste.com' || senhaInputVal !== '123456') {
    alert('Login ou senha inválidos.');
  } else if (loginInputVal === 'tryber@teste.com' && senhaInputVal === '123456') {
    alert('Olá, Tryber!');
  }
});

const submitFormButton = document.getElementById('submit-btn');
const formCheckBox = document.getElementById('agreement');

formCheckBox.addEventListener('click', () => {
  if (formCheckBox.checked) {
    submitFormButton.disabled = false;
  } else {
    submitFormButton.disabled = true;
  }
})
