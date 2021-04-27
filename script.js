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



let object = {
  Nome: document.getElementById('input-name').value,
  Sobrenome: document.getElementById('input-lastname').value,
  Email: document.getElementById('input-email').value,
  Casa: document.getElementById('house').value,
  Familia: document.getElementById('familia').value,
  Matérias: document.getElementById('label-content').value,
  Avaliação: document.getElementById('label-rate').value,
  Observações: document.getElementById('textarea').value
};


const getButton = document.getElementById('submit-btn');

getButton.addEventListener('click', () => {
  const getMain = document.querySelector('main');
  const creatDiv = document.createElement('div');
  getMain.appendChild(creatDiv);
  const getForm = document.getElementById('evaluation-form');

  for (let index = 0; index < object.length; index += 1) {

  }
  // getForm.remove();
});

let test = {
  Nome: 'Trybe',
  Sobrenome: 'Xablau',
};
console.log(Object.values(test));
