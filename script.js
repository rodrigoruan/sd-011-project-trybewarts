const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', () => {
  const trybewartsLogin = document.forms['trybewarts-login'];
  const user = trybewartsLogin.user.value;
  const password = trybewartsLogin.password.value;
  if (user === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});

let checkValue = document.getElementById('agreement')

function agreement(event) {
  document.getElementById("submit-btn").disabled = false;
}

checkValue.addEventListener('click', agreement);
