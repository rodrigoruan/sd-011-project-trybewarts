const emailLogin = document.getElementById('email-login');
const password = document.getElementById('password-login');
const btnEnvia = document.getElementById('submit-btn');
const mainContainer = document.getElementById('form-container');
const formData = document.getElementById('evaluation-form');

function verificaDados() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    if ((emailLogin.value === 'tryber@teste.com') && (password.value === '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
verificaDados();

function caracteresTextArea() {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  textArea.addEventListener('keyup', () => {
    counter.innerText = 500 - (textArea.value.length);
  });
}
caracteresTextArea();

function habilitaEnvio() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', () => {
    btnEnvia.removeAttribute('disabled');
  });
}
habilitaEnvio();

function substituiDados(event) {
  event.preventDefault();
  const newForm = document.createElement('form');
  newForm.id = 'evaluation-form';
  mainContainer.appendChild(newForm);

  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const name = document.createElement('div');
  name.innerHTML = `Nome: ${inputName} ${inputLastName}`;
  newForm.appendChild(name);

  const inputEmail = document.getElementById('input-email').value;
  const email = document.createElement('div');
  email.innerHTML = `Email: ${inputEmail}`;
  newForm.appendChild(email);

  const inputHouse = document.getElementById('house').value;
  const house = document.createElement('div');
  house.innerHTML = `Casa: ${inputHouse}`;
  newForm.appendChild(house);

  const allInputs = document.querySelectorAll('input');
  for (let index = 0; index < allInputs.length; index += 1) {
    if (allInputs[index].type === 'radio' && allInputs[index].name === 'family' && allInputs[index].checked) {
      const family = document.createElement('div');
      family.innerHTML = `Família: ${allInputs[index].value}`;
      newForm.appendChild(family);
    }
    /*const subject = document.createElement('div');
    let subjectList = [];
    if (allInputs[index].className === 'subject' && allInputs[index].checked) {
      subjectList.push(allInputs[index].value);
      subject.innerHTML = `Matérias: ${subjectList}`;
      newForm.appendChild(subject);
    }*/
    if (allInputs[index].name === 'rate' && allInputs[index].checked) {
      const rate = document.createElement('div');
      rate.innerHTML = `Avaliação: ${allInputs[index].value}`;
      newForm.appendChild(rate);
    }
  }
  const comments = document.createElement('div');
  const commentsInput = document.getElementById('textarea').value;
  comments.innerHTML = `Observações: ${commentsInput}`;
  newForm.appendChild(comments);




  mainContainer.replaceChild(newForm, formData);
}

btnEnvia.addEventListener('click', substituiDados);
