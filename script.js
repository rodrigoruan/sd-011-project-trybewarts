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
const cbxFamily = document.querySelector('input[name="family"]:checked');
const rdRate = document.querySelector('input[name="rate"]:checked');

btnLogin.addEventListener('click', () => {
  const userValue = user.value;
  const passwordValue = password.value;

  if ((userValue === 'tryber@teste.com') || (passwordValue === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

checkbox.addEventListener('click', () => {
  if (checkbox.checked === false) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
});

textarea.addEventListener('keyup', () => {
  const countRemaining = document.querySelector('#counter');
  const textEntered = textarea.value.length;
  const counter = (500 - textEntered);

  countRemaining.textContent = counter;
});

function subjectChecked() {
  const ckdSubject = document.querySelectorAll('.subject:checked');
  const SubjectList = [];

  for (let index = 0; index < ckdSubject.length; index += 1) {
    SubjectList.push(` ${ckdSubject[index].value}`);
  }

  return SubjectList;
}

btnSubmit.addEventListener('click', (event) => {
  const allFields = {
    Nome: `${iptName.value} ${iptLastname.value}`,
    Email: `${user.value}`,
    Casa: `${sltHouse.value}`,
    Família: `${cbxFamily.value}`,
    Matérias: subjectChecked(),
    Avaliação: ` ${rdRate.value}`,
    Observações: `${textarea.value}`,
  };
  let fields = '';

  for (const x of Object.keys(allFields)) {
    fields += `${x}: ${allFields[x]}<br>`;

    event.preventDefault();
  }

  evalForm.innerHTML = fields;
  event.preventDefault();
});
