const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
  if (
    document.getElementById('login').value !== 'tryber@teste.com'
    && document.getElementById('senha').value !== '123456'
  ) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const agreementCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
agreementCheck.addEventListener('click', () => {
  if (document.getElementById('agreement').checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
let tamanho = 500;
textArea.addEventListener('keyup', () => {
  tamanho = 500 - textArea.value.length;
  counter.innerHTML = tamanho;
});

function formataDados(materias) {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.getElementById('textarea').value;
  return `Nome: ${nome} ${sobrenome} <br>
  Email: ${email} <br>
  Casa: ${casa} <br>
  Família: ${familia} <br>
  Matérias: ${materias} <br>
  Avaliação: ${avaliacao} <br>
  Observações: ${observacoes}`;
}

const evaluationForm = document.forms.namedItem('evaluation-form');
evaluationForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const materiasArray = [];
  let materias = '';
  for (let index = 0; index < 6; index += 1) {
    if (document.getElementsByClassName('subject')[index].checked) { // if verifica se checked do elemento atual da lista de elementos que possuem a classe (subject) está ativa ou seja, true // se for então
      materiasArray.push(document.getElementsByClassName('subject')[index].value);
    }
  }
  materias = materiasArray.join(', ');
  const textoForm = formataDados(materias);
  for (let i = 0; i < 5; i += 1) {
    evaluationForm.lastElementChild.remove();
  }
  evaluationForm.innerHTML = textoForm;
});
