const formValidate = document.querySelector('.trybewarts-login');
const validateLogin = document.getElementById('loginButton');

validateLogin.addEventListener('click', (event) => {
  event.preventDefault();

  if (formValidate.elements[0].value === 'tryber@teste.com'
  && formValidate.elements[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const requiredBtn = document.getElementById('agreement');
const disabledBtn = document.getElementById('submit-btn');

requiredBtn.addEventListener('click', () => {
  if (requiredBtn.checked) {
    disabledBtn.disabled = false;
  } else {
    disabledBtn.disabled = true;
  }
});
