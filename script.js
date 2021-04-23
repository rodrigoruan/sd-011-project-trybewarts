function checkLogin() {
  const inputList = document.querySelectorAll('.trybewarts-login input');
  if (inputList[0].value === 'tryber@teste.com' && inputList[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function addEventCheckLogin() {
  const button = document.querySelector('.trybewarts-login button');
  button.addEventListener('click', checkLogin);
}

function disableButon(event) {
  const checkbox = event.target;
  const button = document.getElementById('submit-btn');
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function addEventDisableButton() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', disableButon);
}

window.onload = function load() {
  addEventCheckLogin();
  addEventDisableButton();
};
