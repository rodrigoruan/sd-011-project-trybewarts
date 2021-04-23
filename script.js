window.onload = function () {
  const submit = document.getElementById('submit-button');

  function submitForm() {
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const standardLogin = 'tryber@teste.com';
    const standardPassword = '123456';
    if ((login.value === standardLogin) && (password.value === standardPassword)) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  }

  submit.addEventListener('click', submitForm);
};
