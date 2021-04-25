const btnSubmit = document.querySelector('#btnSubmit'); // seletor botao logar.
const evaluateFieldDiv = document.querySelector('.evaluateField'); // seletor camp de avaliacao.
const agreeCheckbox = document.querySelector('#agreement'); // checkbox do "concordo"
const submitBtn = document.querySelector('#submit-btn'); // botao de submit.

function submitLoginInfo(event) { // Funcao que valida o login, e exibe o alert adequado.
  event.preventDefault();
  const loginValue = document.getElementById('loginInfo').value;
  const passwdValue = document.getElementById('passwdInfo').value;
  if (loginValue !== 'tryber@teste.com' || passwdValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnSubmit.addEventListener('click', submitLoginInfo);

function createEvaluateRadios() { // cria os radios input na parte de nota.
  let n = 1;
  while (n < 11) {
    const radioToCreateLabel = document.createElement('label');
    const radioToCreateTag = document.createElement('input');
    radioToCreateLabel.innerText = n.toString();
    radioToCreateLabel.setAttribute('for', n.toString());
    radioToCreateTag.setAttribute('type', 'radio');
    radioToCreateTag.setAttribute('name', 'rate');
    radioToCreateTag.setAttribute('value', n.toString());
    evaluateFieldDiv.appendChild(radioToCreateTag);
    evaluateFieldDiv.appendChild(radioToCreateLabel);
    n += 1;
  }
}

createEvaluateRadios();

function enableSubmit() { // Faz o requisito 18 funcionar. Enable/disable submit.
  if (agreeCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreeCheckbox.addEventListener('change', enableSubmit);

function textarea(valor) { // conta os catacteres restantes.
  const quant = 500;
  const total = valor.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = valor.substr(0, quant);
  }
}
