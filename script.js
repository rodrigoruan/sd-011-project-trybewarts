// Criar um addEventListener no botão LOGAR.
const loginButton = document.getElementById('login-button');
// Dentro da funço que é executada ao clicar no botão, deve-se verificar se o email.
// O email que está no input de email é igual a tryber@teste.com e input de senha igual a 123456.
loginButton.addEventListener('click', () => {
  if (document.getElementById('login').value !== 'tryber@teste.com'
    && document.getElementById('senha').value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
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

// Contador
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
let tamanho = 500;
textArea.addEventListener('keyup', () => {
  // Diminuir do counter o tamanho atual do textos
  console.log(textArea.value);
  tamanho = 500 - (textArea.value.length);
  counter.innerHTML = tamanho;
});
