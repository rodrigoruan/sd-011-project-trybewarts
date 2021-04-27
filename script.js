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

// I'm about to lose my sanity so everything down here just
// became pure spaghetti-gambiarra code. In advance I would
// like to apologize to God and to everyone who comes to see
// these abominations.
// Sincerely, Diego.
function renderFormsData(userInfo, technologies) {
  const dataLabel = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const listElement = document.createElement('ul');
  const temp = userInfo[userInfo.length - 1];
  userInfo[userInfo.length - 1] = technologies.join(', ');
  userInfo.push(temp);
  console.log(userInfo);
  for (let i = 0; i < 7; i += 1) {
    const li = document.createElement('li');
    li.innerText = `${dataLabel[i]}: ${userInfo[i] || 'Empty'}`;
    listElement.appendChild(li);
  }
  forms.appendChild(listElement);
}

function parseFormsData() {
  const formsData = new FormData(forms);
  const [userInfo, technologies] = [...formsData.entries()].reduce((acc, [field, value]) => {
    if (field === 'lastname') acc[0][0] += ` ${value}`;
    else acc[field === 'technology' ? 1 : 0].push(value);
    return acc;
  }, [[], []]);
  renderFormsData(userInfo, technologies);
}

submitButton.addEventListener('click', parseFormsData);
