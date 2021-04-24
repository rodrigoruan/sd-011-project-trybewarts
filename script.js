// Resolução do requisito 3
const login = document.querySelector('#insertLogin');
const password = document.querySelector('#insertPassword');
const submit = document.querySelector('#submitLogin');

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
submit.addEventListener('click', loginCheck);

// Resolução do requisito 18
const btnSubmit = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');

checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
});
