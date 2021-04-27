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

function getEls(selector) {
  return document.querySelectorAll(selector);
}

// I'm about to lose my sanity so everything down here just
// became pure spaghetti-gambiarra code. In advance I would
// like to apologize to God and to everyone who comes to see
// these abominations.
// Sincerely, Diego.
function renderFormsData() {
  const dataLabel = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const userInfo = [
    `${getEls('#input-name')[0].value} ${getEls('#input-lastname')[0].value}`,
    getEls('#input-email')[0].value,
    getEls('#house')[0].value,
    getEls('input[name="family"]')[0].value,
    [...getEls('.subject:checked')].map((v) => v.value).join(', '),
    getEls('input[name="rate"]')[0].value,
    getEls('textarea')[0].value,
  ];
  const listElement = document.createElement('ul');
  userInfo.forEach((info, i) => {
    const li = document.createElement('li');
    li.innerText = `${dataLabel[i]}: ${info}`;
    listElement.appendChild(li);
  });
  forms.appendChild(listElement);
}

submitButton.addEventListener('click', renderFormsData);
