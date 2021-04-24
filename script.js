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

textarea.addEventListener('keydown', () => {
  const countRemaining = document.querySelector('#counter');
  const textEntered = textarea.value.length;
  const counter = (500 - textEntered);

  countRemaining.innerHTML = `${counter} caracteres`;
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

  for (const x of Object.keys(allInputs)) {
    lists += `${x}: ${allInputs[x]}<br>`;

    event.preventDefault();
  }

  evalForm.innerHTML = lists;
  event.preventDefault();
});
