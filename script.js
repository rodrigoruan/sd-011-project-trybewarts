// Criar um addEventListener no botão LOGAR.
const loginButton = document.getElementById('login-button');
// Dentro da funçao que é executada ao clicar no botão, deve-se verificar se o email.
// que esta no input de email é igual a tryber@teste.com e senha igual a 123456.
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
const submitButton = document.getElementById('submit-btn');
agreementCheck.addEventListener('click', () => {
  if (document.getElementById('agreement').checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Contador
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
let tamanho = 500;
textArea.addEventListener('keyup', () => {
// Diminuir do counter o tamanho atual do textos
  tamanho = 500 - (textArea.value.length);
  counter.innerHTML = tamanho;
});

submitButton.addEventListener('click', () => {
  // guardar no local storage rs
  localStorage.setItem('name', document.getElementById('input-name').value);
  localStorage.setItem('lastname', document.getElementById('input-lastname').value);
  localStorage.setItem('email', document.getElementById('input-email').value);
  localStorage.setItem('house', document.getElementById('house').value);
  localStorage.setItem('familia', document.querySelector('input[name="family"]:checked').value);
  localStorage.setItem('materia', document.querySelector('input[name="materia"]:checked').value);
  localStorage.setItem('avalia', document.querySelector('input[name="rate"]:checked').value);
  localStorage.setItem('obs', document.getElementById('textarea').value);
});
// exibir nos campos o conteúdo coletado?
// window.onload = () => {
//   // colocando nos campos o que guardou em variáveis
//   document.getElementById('input-name').value = localStorage.getItem('name');
//   document.getElementById('input-lastname').value = localStorage.getItem('lastname');
//   document.getElementById('input-email').value = localStorage.getItem('email');
//   document.getElementById('house').value = localStorage.getItem('house');
//   document.querySelector(`input[value=${localStorage.getItem('familia')}]`).checked = true;
//   document.querySelector(`input[value=${localStorage.getItem('materia')}]`).checked = true;
//   document.querySelector(`input[value="${localStorage.getItem('avalia')}"]`).checked = true;
//   document.getElementById('textarea').value = localStorage.getItem('obs');
// };
