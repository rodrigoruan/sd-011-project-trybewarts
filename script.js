function loginAlert() {
  const loginButton = document.querySelector('#login-button');
  loginButton.addEventListener('click', () => {
    const loginEmail = document.querySelector('#email-form').value;
    const loginPassword = document.querySelector('#password-form').value;
    if (loginEmail === 'tryber@teste.com' && loginPassword === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
loginAlert();

const checkEnable = document.getElementById('agreement');
checkEnable.addEventListener('click', () => {
  const inputbutton = document.getElementById('submit-btn');
  if (checkEnable.checked) {
    return inputbutton.removeAttribute('disabled');
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxlength = textArea.getAttribute('maxlength');
textArea.addEventListener('keyup', () => {
  counter.innerText = maxlength - textArea.value.length;
});

// Requisito 21 contou com o auxílio de Gisele Costa
// finalizado
function checkSubject() {
  const subject = document.querySelectorAll('.subject:checked');
  const list = [];

  for (let index = 0; index < subject.length; index += 1) {
    list.push(` ${subject[index].value}`);
  }
  return list;
}

const names = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const evaluationForm = document.querySelector('#evaluation-form');
evaluationForm.addEventListener('submit', (event) => {
  const allInputs = {
    Nome: `${names.value} ${lastName.value}`,
    Email: `${email.value}`,
    Casa: `${house.value}`,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: `${checkSubject()}`,
    Avaliação: `${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `${document.querySelector('#textarea').value}`,
  };

  let newObject = {};
  for (const index of Object.keys(allInputs)) {
    newObject += `${index}: ${allInputs[index]}<br>`;
  }

  evaluationForm.innerHTML = newObject;
  event.preventDefault();
});
