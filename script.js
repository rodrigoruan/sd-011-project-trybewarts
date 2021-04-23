const loginInput = document.getElementById('id');
const senhaInput = document.getElementById('password');
const button = document.getElementById('submit-button');
const checkBox = document.getElementById('agreement');

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
