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

function replaceForm() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = document.querySelectorAll('input[class="subject"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const form = document.getElementById('evaluation-form');
  const divForm = document.createElement('div');
  divForm.innerText += `Nome:${name}${lastName}\n`;
  divForm.innerText += `Email:${email.value}\n`;
  divForm.innerText += `Casa:${house.value}`;
  divForm.innerText += `Família: ${family}`;
  for (let index of content) {
    const receberMaterias = receberMaterias + content[index].value;
  }
  divForm.innerText += `Matérias: ${receberMaterias.toString()}`;
  divForm.innerText += `Avaliação: ${rate}`;
  divForm.innerText += `Observações: ${comment.value}`;
  form.innerHTML = '';
  form.appendChild(divForm);
  console.log(content);
  console.log(rate);
}

submitButton.addEventListener('click', replaceForm);
