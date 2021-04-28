function alerta() {
  const getButton = document.getElementById('button1');
  const getEmail = document.getElementById('email');
  const getSenha = document.getElementById('senha');

  getButton.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
alerta();

function submitForm() {
  const getCheckbox = document.getElementById('agreement');
  const getButtonSubmit = document.querySelector('#submit-btn');
  getButtonSubmit.disabled = true;

  getCheckbox.addEventListener('click', () => {
    if (getCheckbox.checked) {
      getButtonSubmit.disabled = false;
    } else {
      getButtonSubmit.disabled = true;
    }
  });
}
submitForm();

function textCounter() {
  const textArea = document.getElementById('textarea');
  const getCounter = document.getElementById('counter');

  textArea.addEventListener('keyup', () => {
    const numMax = 500;
    getCounter.innerText = numMax - textArea.value.length;
  });
}
textCounter();

const getButton = document.getElementById('submit-btn');
const getForm = document.getElementById('evaluation-form');
const getDivForm = document.getElementById('form');
const creatDiv = document.createElement('div');
getForm.appendChild(creatDiv);

function createName() {
  const nome = document.getElementById('input-name');
  const sobrenome = document.getElementById('input-lastname');
  const nameParag = document.createElement('p');
  creatDiv.appendChild(nameParag);
  const fullName = `Nome: ${nome.value} ${sobrenome.value}`;
  nameParag.innerText = fullName;
}

function createEmail() {
  const email = document.getElementById('input-email').value;
  const emailParag = document.createElement('p');
  creatDiv.appendChild(emailParag);
  emailParag.innerText = `Email: ${email}`;
}

function createHouse() {
  const casa = document.getElementById('house').value;
  const casaParag = document.createElement('p');
  creatDiv.appendChild(casaParag);
  casaParag.innerText = `Casa: ${casa}`;
}

function createFamily() {
  const family = document.querySelector('[name=family]:checked').value;
  const familyParag = document.createElement('p');
  creatDiv.appendChild(familyParag);
  familyParag.innerText = `Família: ${family}`;
}

function createMaterials() {
  const materias = document.querySelectorAll('[class="subject"]:checked');
  const materiaSelected = [];
  for (let index = 0; index < materias.length; index += 1) {
    materiaSelected.push(` ${materias[index].value}`);
  }
  const materiasParag = document.createElement('p');
  creatDiv.appendChild(materiasParag);
  materiasParag.innerText = `Matérias: ${materiaSelected}`;
}

function createEvaluation() {
  const avaliacao = document.querySelector('[name=rate]:checked').value;
  const avaliacaoParag = document.createElement('p');
  creatDiv.appendChild(avaliacaoParag);
  avaliacaoParag.innerText = `Avaliação: ${avaliacao}`;
}

function createObs() {
  const observacoes = document.getElementById('textarea').value;
  const obsParag = document.createElement('p');
  creatDiv.appendChild(obsParag);
  obsParag.innerText = `Observações: ${observacoes}`;
}

getButton.addEventListener('click', () => {
  createName();
  createEmail();
  createHouse();
  createFamily();
  createMaterials();
  createEvaluation();
  createObs();
  getDivForm.remove();
});
