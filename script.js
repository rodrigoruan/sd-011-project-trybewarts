const btnLogin = document.getElementById('btnLogar');
const inputLogin = document.getElementById('login');
const inptPassword = document.getElementById('password');
const btnCheck = document.getElementById('agreement');
const btnSub = document.getElementById('submit-btn');

function LoginAlert() {
  if (inputLogin.value === 'tryber@teste.com' && inptPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', LoginAlert);

btnSub.disabled = true;

function validateButton() {
  if (btnCheck.checked === false) {
    btnSub.disabled = true;
  } else {
    btnSub.disabled = false;
  }
}

btnCheck.addEventListener('click', validateButton);

// tentando desenrolar o requisito 21!
// const forms = document.getElementById('evaluation-form');
// const nameInput = document.getElementById('input-name');
// const lastNameInput = document.getElementById('input-lastname');
// const emailInput = document.getElementById('input-email');
// const houseInput = document.getElementById('house');
// const familyInput = document.getElementsByClassName('family');
// const subjectInput = document.getElementsByClassName('subject');
// const radioInput = document.getElementsByClassName('radioRate');
// function createParagraphs(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     const p = document.createElement('p');
//     p.innerText = array[i];
//     forms.appendChild(p);
//   }
// }

const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', () => {
  const paragrafo = document.querySelector('#counter');
  let caracteresDisponiveis = 0;
  caracteresDisponiveis = 500 - textArea.value.length;
  paragrafo.innerText = caracteresDisponiveis;
});
