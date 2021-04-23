const loginInput = document.getElementById('id');
const senhaInput = document.getElementById('password');
const button = document.getElementById('submit-button');
const checkBox = document.getElementById('agreement');
const textAreaValue = document.getElementById('textarea');
const spanCount = document.getElementById('counter');

function limitTextArea(valor) {
  const quantidade = 500;
  const total = valor.length;
  console.log(total);
  if (total <= quantidade) {
    const rest = quantidade - total;
    spanCount.innerHTML = rest;
  } else {
    textAreaValue.value = valor.substr(0, quantidade);
  }
}

textAreaValue.addEventListener('input', () => {
  limitTextArea(textAreaValue.value);
});

button.addEventListener('click', () => {
  if (loginInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

checkBox.addEventListener('click', () => {
  const submitBtn = document.getElementById('submit-btn');
  if (checkBox.checked) {
    console.log(checkBox.checked);
    submitBtn.removeAttribute('disabled');
  }
});
