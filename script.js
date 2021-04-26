function handleLogin() {
  const loginText = document.getElementById('login').value;
  const passwordText = document.getElementById('senha').value;
  // fazer um if que verifica se o login é tryber@test.com e senha 123456
  if ((loginText === 'tryber@teste.com') && (passwordText === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function handleAgreement() {
  const agreeElement = document.getElementById('agreement');
  const buttonSubmit = document.getElementById('submit-btn');
  if (agreeElement.checked === true) {
    buttonSubmit.disabled = false
  } else {
    buttonSubmit.disabled = true
  }
}

const button = document.getElementById('botao');
button.addEventListener('click', handleLogin);
const agreement = document.getElementById('agreement');
agreement.addEventListener('change', handleAgreement);
