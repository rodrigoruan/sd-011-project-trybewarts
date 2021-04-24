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
    }
    selectHouse.appendChild(makeOption);
  }
}
makeOptionSelect(['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'],
  ['#gitnoria-house', '#reactpuff-house', '#corvinode-house', '#pytherina-house']);
