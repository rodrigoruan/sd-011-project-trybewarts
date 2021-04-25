const submitLoginBtn = document.getElementById('header-submit');
const evaluationForm = document.getElementById('evaluation-form');
const commentBox = document.getElementById('textarea');
const counterDiv = document.getElementById('counter');
const agreementCheckbox = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');
const formData = {};

function getFormData() {
  const rawFormData = new FormData(evaluationForm);

  for (const key of rawFormData.keys()) {
    const value = rawFormData.getAll(key);

    if (key !== 'subject') {
      [formData[key]] = value;
    } else {
      formData[key] = value;
    }
  }
}

function submitForm(event) {
  getFormData();

  evaluationForm.innerHTML = '';
  evaluationForm.innerHTML += `Nome: ${formData.firstName} ${formData.lastName}<br>`;
  evaluationForm.innerHTML += `Email: ${formData.email}<br>`;
  evaluationForm.innerHTML += `Casa: ${formData.house}<br>`;
  evaluationForm.innerHTML += `Família: ${formData.family}<br>`;
  evaluationForm.innerHTML += `Matérias: ${formData.subject.join(', ')}<br>`;
  evaluationForm.innerHTML += `Avaliação: ${formData.rate}<br>`;
  evaluationForm.innerHTML += `Observações: ${formData.commentBox}`;
  evaluationForm.classList.add('break-text');

  event.preventDefault();
}

function counterCaracteres() {
  counterDiv.innerHTML = `Caracteres disponiveis: ${500 - commentBox.value.length}`;
}

function toggleFormSubmitButtonState() {
  if (agreementCheckbox.checked) {
    formSubmitButton.disabled = false;
  } else {
    formSubmitButton.disabled = true;
  }
}

function verifiedValues() {
  const loginValue = document.getElementById('login').value;
  const passwordValue = document.getElementById('password').value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitLoginBtn.addEventListener('click', verifiedValues);
agreementCheckbox.addEventListener('change', toggleFormSubmitButtonState);
commentBox.oninput = counterCaracteres;
evaluationForm.addEventListener('submit', submitForm);
