function validateLogin() {
  const btn = document.getElementById('btnLogin');
  const login = document.getElementById('formLogin');
  const senha = document.getElementById('formSenha');
  btn.addEventListener('click', () => {
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function validateForm() {
  const btnSubmit = document.getElementById('submit-btn');
  const checkBox = document.getElementById('agreement');
  btnSubmit.disabled = true;
  checkBox.onchange = () => {
    if (checkBox.checked) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  };
}
validateForm();
