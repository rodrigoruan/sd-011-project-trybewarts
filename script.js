const defaultLogin = 'tryber@teste.com';
const defaultPassword = '123456';
const loginInput = document.querySelector('.trybewarts-login input:nth-of-type(1)');
const passwordInput = document.querySelector('.trybewarts-login input:nth-of-type(2)');
const loginButton = document.querySelector('.trybewarts-login button:nth-of-type(1)');
const forms = document.querySelector('#evaluation-form');
const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

loginButton.addEventListener('click', () => {
  if (loginInput.value === defaultLogin && passwordInput.value === defaultPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

/* Unable/ disable checkbox */
function disableEnableButton() {
  agreementCheckbox.addEventListener('click', () => {
    if (submitButton.disabled) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}
disableEnableButton();

const textAreaId = document.getElementById('textarea');
const characters = document.getElementById('counter');
function counterCharacter() {
  const textAreaLength = textAreaId.value.length;
  characters.textContent = 500 - textAreaLength;
}
textAreaId.addEventListener('keyup', counterCharacter);

submitButton.addEventListener('click', () => {
  const formsData = new FormData(forms);
  for (const item of formsData.entries()) {
    console.log(item);
  }
});
