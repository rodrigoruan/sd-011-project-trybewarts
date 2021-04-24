const btnSubmit = document.querySelector('#btnSubmit'); // seletor botao logar
const evaluateFieldDiv = document.querySelector('.evaluateField'); // seletor camp de avaliacao

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

function createEvaluateRadios() {
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

console.log(evaluateFieldDiv);
