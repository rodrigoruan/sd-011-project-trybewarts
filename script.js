function alerta() {
  const getButton = document.getElementById('button1');
  const getEmail = document.getElementById('email');
  const getSenha = document.getElementById('senha');

  getButton.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
alerta();

function submitForm() {
  const getCheckbox = document.getElementById('agreement');
  const getButtonSubmit = document.querySelector('#submit-btn');
  getButtonSubmit.disabled = true;

  getCheckbox.addEventListener('click', () => {
    if (getCheckbox.checked) {
      getButtonSubmit.disabled = false;
    } else {
      getButtonSubmit.disabled = true;
    }
  });
}
submitForm();

function textCounter() {
  const textArea = document.getElementById('textarea');
  const getCounter = document.getElementById('counter');

  textArea.addEventListener('keyup', () => {
    const numMax = 500;
    getCounter.innerText = numMax - textArea.value.length;
  });
}
textCounter();
