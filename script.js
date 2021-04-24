const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const buttonEnviar = document.getElementById('enviar');

buttonEnviar.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// 18
const checkEnable = document.getElementById('agreement');
checkEnable.addEventListener('click', () => {
  if (checkEnable.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

// 19
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

textArea.addEventListener('input', () => {
  let limite = 500;
  let caracteresDigitados = textArea.value.length; 
  let caracteresRestantes = limite - caracteresDigitados;
  contador.innerText = caracteresRestantes.toString();
});
