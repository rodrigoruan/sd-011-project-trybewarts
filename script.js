const login = document.getElementById('login').value;
const pass = document.getElementById('pass').value;
const submitButton = document.getElementById('submit-button');

function validation () {
  const truePass = ['123456'];
  const trueLogin = ['tryber@teste.com'];
  if (login == trueLogin && pass == truePass) {
    alert('Olá Tryber!');
  }

  else {
    alert('Login ou senha inválidos');
  }
}

submitButton.addEventListener('click', validation)
