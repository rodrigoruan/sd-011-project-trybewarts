const loginForm = document.querySelector('.trybewarts-login');

function validateLogin(e) {
  e.preventDefault();
  const form = e.target;

  const loginValue = form.querySelector('#form-login').value;
  const passwordValue = form.querySelector('#form-password').value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginForm.addEventListener('submit', validateLogin);

const agreementCheck = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
});

const characterCounter = document.getElementById('counter');
const userCommentaryInput = document.getElementById('textarea');
const maxLength = 500;

function updateCharacterCount() {
  const charsLeft = maxLength - userCommentaryInput.value.length;
  characterCounter.innerText = charsLeft;
}

userCommentaryInput.addEventListener('keyup', updateCharacterCount);
userCommentaryInput.addEventListener('change', updateCharacterCount);

const evaluationForm = document.getElementById('evaluation-form');
const formAnswerElement = document.getElementById('form-answer');

function getFormAnswer(formElement) {
  const formData = new FormData(formElement);
  const formAnswer = { skill: [] };

  for (const pair of formData.entries()) {
    const key = pair[0];
    const value = pair[1];

    if (key === 'skill') {
      formAnswer[key].push(value);
    } else {
      formAnswer[key] = value;
    }
  }

  return formAnswer;
}

function fillAnswers(answerObject) {
  const keys = Object.keys(answerObject);
  for (const key of keys) {
    formAnswerElement.querySelector(`#answer-${key}`).innerText = answerObject[key];
  }
}

evaluationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const answerObject = getFormAnswer(evaluationForm);

  delete answerObject.agreement;
  answerObject.name = `${answerObject.firstname} ${answerObject.lastname}`;
  delete answerObject.firstname;
  delete answerObject.lastname;

  if (typeof answerObject.skill !== 'string') {
    let newSkillString = '';

    for (const skill of answerObject.skill) {
      newSkillString += `${skill}, `;
    }

    answerObject.skill = newSkillString;
  }

  fillAnswers(answerObject);
  formAnswerElement.classList.add('modal-active');
});

document.getElementById('close-modal').addEventListener('click', () => {
  formAnswerElement.classList.remove('modal-active');
});
