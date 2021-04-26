const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const mainForm = document.querySelector('#evaluation-form');
const fieldsetInformations = document.querySelector('#field-set');

let loginField = document.querySelector('.trybewarts-login input:nth-child(1)');

function clickLogin() {
  const eventPath = event.path;
  console.log(eventPath)
  const email = eventPath[1][0].value;
  const password = eventPath[1][1].value;

  email === 'tryber@teste.com' || password === '123456'
    ? window.alert("Olá, Tryber!")
    : window.alert('Login ou senha inválidos.');
};

checkBox.addEventListener("change", () => {
  checkBox.checked ? btnSubmit.disabled = false
    : btnSubmit.disabled = true;
})


textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
})


btnSubmit.addEventListener('click', (event) => {

  const fieldName = ([primeiraLetra, ...resto]) => {
    return primeiraLetra.toUpperCase() + resto.join('').toLowerCase();
  }
  fieldsetInformations.style.display = 'none';
  event.preventDefault();

  const target = event.path[3];
  for (let index = 1; index < event.path.length; index += 1) {
    const pText = document.createElement('p');
    mainForm.appendChild(pText);
    if (target[index].name === 'nome') {
      pText.innerText = ` ${fieldName(target[index].name)}: ${target[index].value} ${target[index + 1].value}`;
      index += 1;
    } else {
      console.log(target[index].value)
      pText.innerText = ` ${fieldName(target[index].name)}: ${target[index].value}`;
    }
  }
  mainForm.style.display = 'block';
})