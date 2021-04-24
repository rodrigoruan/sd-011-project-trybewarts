const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  if (loginValue !== 'tryber@teste.com' && passwordValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const agreementButton = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function disabledButton() {
  submitButton.disabled = true;
}

disabledButton();

agreementButton.addEventListener('click', () => {
  const agreementStatus = agreementButton.checked;

  if (agreementStatus === true) {
    submitButton.disabled = false;
  }

  if (agreementStatus === false) {
    disabledButton();
  }
});

const msgElement = document.getElementById('textarea');
const cntElement = document.getElementById('counter');

msgElement.addEventListener('input', (e) => {
  const { target } = e;

  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;

  cntElement.innerHTML = `${maxLength - currentLength}`;
});

// const myForm = document.getElementById('evaluation-form');

// myForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const valueObject = {};
//   for (const pair of formData.entries()) {
//     console.log(pair);
//     valueObject[pair[0]]
//     valueObject[pair[0]] = pair[1];
//   }
//   console.log(valueObject);
// });
