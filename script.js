function login() {
  const usuario = document.getElementsByName('Login')[0].value;
  const senha = document.getElementsByName('Senha')[0].value;
  console.log(usuario);
  if (usuario === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const buttonLogin = document.querySelector('.btn-login');
buttonLogin.addEventListener('click', login);

const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const comment = document.getElementById('textarea');

function caracteres() {
  const count = document.getElementById('counter');
  const commentLength = comment.value.length;
  count.innerText = 500 - commentLength;
}

comment.addEventListener('keyup', caracteres);

function getCheckedContent(content) {
  const checkedContent = [];
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked) {
      checkedContent.push(content[index].value);
    }
  }
  const checkedContentString = checkedContent.join(', ');
  return checkedContentString;
}

function replaceForm() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = document.querySelectorAll('.subject');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const form = document.getElementById('evaluation-form');
  form.innerHTML = `Nome: ${name} ${lastName}<br>`;
  form.innerHTML += `Email: ${email}<br>`;
  form.innerHTML += `Casa: ${house}<br>`;
  form.innerHTML += `Família: ${family}<br>`;
  form.innerHTML += `Matérias: ${getCheckedContent(content)}<br>`;
  form.innerHTML += `Avaliação: ${rate}<br>`;
  form.innerHTML += `Observações: ${comment.value}<br>`;
}

submitButton.addEventListener('click', replaceForm);
