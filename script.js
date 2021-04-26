const loginButton = document.querySelector('#loginButton');

function sendUser() {
  const loginText = document.getElementById('login').value;
  const senhaText = document.getElementById('senha').value;
  if (loginText === 'tryber@teste.com' && senhaText === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', sendUser);

const selectHouse = document.getElementById('house');
function makeOptionSelect(arrayCasas, classOrId) {
  for (let index = 0; index < arrayCasas.length; index += 1) {
    const makeOption = document.createElement('option');
    let newclassOrId = classOrId[index];
    makeOption.value = arrayCasas[index];
    makeOption.innerText = arrayCasas[index];
    if (newclassOrId.includes('.')) {
      newclassOrId = newclassOrId.slice(1);
      makeOption.classList = newclassOrId;
    } else if (newclassOrId.includes('#')) {
      newclassOrId = newclassOrId.slice(1);
      makeOption.id = newclassOrId;
    } else {
      alert('Especifique "." para classes e "#" para Id');
    }
    selectHouse.appendChild(makeOption);
  }
}
makeOptionSelect(['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'],
  ['#gitnoria-house', '#reactpuff-house', '#corvinode-house', '#pytherina-house']);

function makeRateOptions(quantidadeDeOpcoes, tipoOpcoes, nomeOpcoes, typeOfOptons) {
  for (let index = 1; index <= quantidadeDeOpcoes; index += 1) {
    const criaOpcoes = document.createElement(tipoOpcoes);
    const criaLabels = document.createElement('label');
    const rateSection = document.getElementById('rateSection');
    criaOpcoes.value = index;
    criaOpcoes.type = typeOfOptons;
    criaOpcoes.name = nomeOpcoes;
    criaLabels.innerHTML = index;
    rateSection.appendChild(criaOpcoes);
    rateSection.appendChild(criaLabels);
  }
}
makeRateOptions(10, 'input', 'rate', 'radio');
