// variables
const user = document.querySelector('#user');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const btnSubmit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const iptName = document.querySelector('#input-name');
const iptLastname = document.querySelector('#input-lastname');
const sltHouse = document.querySelector('#house');
const evalForm = document.querySelector('#evaluation-form');
const iptEmail = document.querySelector('#input-email');

// username and email validation
btnLogin.addEventListener('click', () => {
  const userValue = user.value;
  const passwordValue = password.value;

  if ((userValue === 'tryber@teste.com') || (passwordValue === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// submit button initial state
checkbox.addEventListener('click', () => {
  if (checkbox.checked === false) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
});

// textarea characters counter
// References
// Tutorial for Textarea's Counter: http://www.mattmorgante.com/technology/textarea-remaining-characters-javascript
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// getAttribute: https://developer.mozilla.org/pt-BR/docs/Web/API/element/getAttribute
textarea.addEventListener('input', () => {
  const counter = document.querySelector('#counter');
  const maxlength = textarea.getAttribute('maxlength');

  counter.innerHTML = maxlength - textarea.value.length;
});

// get all checked form's elements
// References
// Checked: https://www.w3schools.com/jsref/prop_checkbox_checked.asp
function subjectChecked() {
  const ckdSubject = document.querySelectorAll('.subject:checked');
  const SubjectList = [];

  for (let index = 0; index < ckdSubject.length; index += 1) {
    // O espaço antes da variável é necessário para passar no evaluator
    SubjectList.push(` ${ckdSubject[index].value}`);
  }

  return SubjectList;
}

// get all form's values
// References
// Objects: https://www.w3schools.com/js/js_objects.asp
// Object.keys: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Prevent Default (used to prevent blank or empty values): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
evalForm.addEventListener('submit', (event) => {
  const allInputs = {
    Nome: `${iptName.value} ${iptLastname.value}`,
    Email: `${iptEmail.value}`,
    Casa: `${sltHouse.value}`,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: subjectChecked(),
    Avaliação: `${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `${textarea.value}`,
  };

  let lists = '';

  for (const index of Object.keys(allInputs)) {
    lists += `${index}: ${allInputs[index]}<br>`;

    event.preventDefault();
  }

  evalForm.innerHTML = lists;
  event.preventDefault();
});
