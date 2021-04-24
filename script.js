const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login-input');
const loginPassword = document.getElementById('password-input');
const labelRate = document.querySelector('.rate-label');

loginButton.addEventListener('click', () => {
  // event.preventDefault();
  if (loginInput.value !== 'tryber@teste.com' && loginPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

function createRadio() {
  for (let index = 1; index <= 10; index += 1) {
    const newRadio = document.createElement('input');
    const textRadio = document.createElement('span');
    newRadio.setAttribute('type', 'radio');
    newRadio.setAttribute('value', index);
    newRadio.setAttribute('name', 'rate');
    labelRate.appendChild(newRadio);
    labelRate.appendChild(textRadio);
    textRadio.innerText = index;
  }
}

createRadio();
