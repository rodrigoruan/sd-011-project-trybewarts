/* Requisito 3 */
document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const trybeEmail = 'tryber@teste.com';
  const trybeSenha = '123456';
  if (email === trybeEmail && senha === trybeSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 18
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
const seConcorda = document.getElementById('agreement');
seConcorda.addEventListener('click', () => {
  if (seConcorda.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Requisito 20
// https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerHTML = '500';

function countLetters() {
  const comments = textarea.value.length;
  const maxLength = textarea.getAttribute('maxLength');
  const currentLength = maxLength - comments;
  counter.innerHTML = currentLength;
}

textarea.addEventListener('input', countLetters);

// Requisito 21
function formInfos(event) {
  const main = document.getElementsByTagName('main');
  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const observacao = document.getElementById('textarea').value;     

  event.preventDefault();
  form.innerHTML = '';   

  form.innerHTML = `Nome: ${name} ${lastname}<br>
  Email: ${email}<br>
  Casa: ${casa}<br>
  Família: ${checkedFamily()}<br>
  Matérias: ${checkedContent()}<br>
  Avaliação: ${checkedAvaliacao()}<br>
  Observações: ${observacao}`;  
}

const family = document.querySelectorAll('.family');
function checkedFamily() {
  let familyChecked = '';
  for (let index = 0; index < family.length; index += 1) {    
    if(family[index].checked) {
      familyChecked += family[index].value;
    }
  }

  return familyChecked;
}

const materias = document.querySelectorAll('.content');
function checkedContent() {
  let contentChecked = [];
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      contentChecked.push(materias[index].value);
    }
  }
  let joinContent = contentChecked.join(', ');
  
  return joinContent;
}

const avaliacao = document.querySelectorAll('.rate');
function checkedAvaliacao() {
  let avaliacaoChecked = '';
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      avaliacaoChecked += avaliacao[index].value;
    }
  }

  return avaliacaoChecked;
}

submitBtn.addEventListener('click', formInfos);