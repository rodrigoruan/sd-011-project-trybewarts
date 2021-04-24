// Criar um addEventListener no botão LOGAR.
const loginButton = document.getElementById('login-button');
// Dentro da funçao que é executada ao clicar no botão, deve-se verificar se o email.
// que esta no input de email é igual a tryber@teste.com e senha igual a 123456.
loginButton.addEventListener('click', () => {
  if (document.getElementById('login').value === 'tryber@teste.com'
    || document.getElementById('senha').value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Criar constante que recebe o botao Submit
const agreementCheck = document.getElementById('agreement');
agreementCheck.addEventListener('click', () => {
  if (document.getElementById('agreement').checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

//Cria contador de caracteres
