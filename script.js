const btnLogin = document.querySelector('#submitLogin');
const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const mainForm = document.querySelector('#evaluation-form');
const fieldsetInformations = document.querySelector('#field-set');

btnLogin.addEventListener('click', (event) => {
  const eventPath = event.path;
  const email = eventPath[1][0].value;
  const password = eventPath[1][1].value;
  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});

btnSubmit.addEventListener('click', (event) => {
  const fieldName = ([pl, ...resto]) => pl.toUpperCase() + resto.join('').toLowerCase();
  fieldsetInformations.style.display = 'none';
  event.preventDefault();
  const target = event.path[3];
  for (let index = 1; index < event.path.length; index += 1) {
    const pText = document.createElement('p');
    mainForm.appendChild(pText);
    if (target[index].name === 'nome') {
      pText.innerText = `${fieldName(target[index].name)}: 
      ${target[index].value} ${target[index + 1].value}`;
      index += 1;
    } else {
      pText.innerText = ` ${fieldName(target[index].name)}: ${target[index].value}`;
    }
  }
  mainForm.style.display = 'block';
});
