// requisito 3
const loginButton = document.getElementById('sendButton');
function sendLogin() {
  const user = document.getElementById('login').value;
  const password = document.getElementById('senha').value;
  if (user === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', sendLogin);

// requisito 18
const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function changeBtnStatus(event) {
  if (event.target.checked === true) {
    return (submitBtn.removeAttribute('disabled'));
  }
  return (submitBtn.setAttribute('disabled', true));
}

checkbox.addEventListener('change', changeBtnStatus);

// requisito 20
// */fonte:https://www.youtube.com/watch?v=X-LVkU95jLU*/
const textArea = document.getElementById('textarea');
const remaniningCharacters = document.querySelector('#counter');
const maxCharacters = 500;
function counterCharacters() {
  const characters = maxCharacters - (textArea.value.length);
  remaniningCharacters.textContent = characters;
}
textArea.addEventListener('input', counterCharacters);

// requisito 21
