const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#text-coment');
const counter = document.querySelector('#counter');
const mainForm = document.querySelector('#evaluation-form');
const formInformations = document.querySelector('#informacoes');

<<<<<<< HEAD
// function validateLogin() {
//   const loginButton = document.getElementById('login-button');
//   loginButton.addEventListener('submit', clickLogin);
// }
=======
function clickLogin() {
  const email = event.path[2][0].value;
  const password = event.path[2][1].value;
>>>>>>> cb922d39837c453e360c12f3f261804e810898b4

  email === 'tryber@teste.com' && password === '123456'
    ? window.alert('Olá, Tryber!')
    : window.alert('Login ou senha inválidos.');
};

checkBox.addEventListener("change", () => {
  checkBox.checked ? btnSubmit.disabled = false
    : btnSubmit.disabled = true;
})


textArea.addEventListener('keyup', () => {
  counter.innerText = textArea.value.length.toString();
})


btnSubmit.addEventListener('click', (event) => {
  mainForm.style.display = 'none';
  event.preventDefault();
  const target = event.path[3];
  for (let index = 1; index < event.path.length; index += 1) {
    const inputText = document.createElement('input');
    formInformations.appendChild(inputText);
    inputText.value = target[index].value;
  }
  formInformations.style.display = 'block';
})