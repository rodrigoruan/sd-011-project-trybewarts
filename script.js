const submit = document.getElementById('submit'); // variável recebendo o botão submit

submit.addEventListener('click', () => {
  const email = document.getElementById('email'); // Variavel recebendo o email
  const pass = document.getElementById('pass'); // variavel recebendo o password
  const insertedEmail = email.value;
  const insertedPass = pass.value;
  if (insertedEmail === 'tryber@teste.com' && insertedPass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
