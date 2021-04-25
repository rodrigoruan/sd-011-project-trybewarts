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
// function counterCharacters (){}
// id='textarea'

// requisito 21
