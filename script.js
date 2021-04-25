const loginButton = document.querySelector('#login-button');
const checkValue = document.getElementById('agreement');
const comment = document.querySelector('#comment');
const counter = document.querySelector('#counter');
counter.innerText = 500;

function loginValidation() {
  const trybewartsLogin = document.forms['trybewarts-login'];
  const user = trybewartsLogin.user.value;
  const password = trybewartsLogin.password.value;
  if (user === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function agreement() {
  if (checkValue.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

[loginButton, checkValue].forEach((item) => {
  item.addEventListener('click', () => {
    if (item === loginButton) {
      loginValidation();
    } else if (item === checkValue) {
      agreement();
    }
  });
});

comment.addEventListener('keyup', () => {
  counter.innerText -= 1;
});
