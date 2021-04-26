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
  tamanho = 500 - (textArea.value.length);
  counter.innerHTML = tamanho;
});

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', () => {
// pegar dados e colocar em variáveis
let name = document.getElementById('input-name').value;
let lastName = document.getElementById('input-lastname').value;
let email = document.getElementById('input-email').value;
let casa = document.getElementById('house').value;
let familia = document.querySelector('input[name="family"]:checked').value;
let materia = document.querySelector('input[name="materia"]:checked').value;
let avalia = document.querySelector('input[name="rate"]:checked').value;
let obs = document.getElementById('textarea').value;

// guardar no local storage rs
localStorage.setItem('name', name);
localStorage.setItem('lastname', lastName);
localStorage.setItem('email', email);
localStorage.setItem('house', casa);
localStorage.setItem('familia', familia);
localStorage.setItem('materia', materia);
localStorage.setItem('avalia', avalia);
localStorage.setItem('obs', obs);

});
// exibir nos campos o conteúdo coletado?
window.onload = () => {
  // colocando nos campos o que guardou em variáveis
document.getElementById('input-name').value = localStorage.getItem('name');
document.getElementById('input-lastname').value = localStorage.getItem('lastname');
document.getElementById('input-email').value = localStorage.getItem('email');
document.getElementById('house').value = localStorage.getItem('house');
document.querySelector('input[value='+localStorage.getItem('familia')+']').checked = true;
document.querySelector('input[value='+localStorage.getItem('materia')+']').checked = true;
document.querySelector('input[value="'+localStorage.getItem('avalia')+'"]').checked = true;
document.getElementById('textarea').innerHTML = localStorage.getItem('obs');
}