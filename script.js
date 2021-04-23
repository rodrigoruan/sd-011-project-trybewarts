console.log('VQV');

const submitLoginBtn = document.getElementById('header-submit');

submitLoginBtn.addEventListener('click', verifiedValues)

function verifiedValues() {
  let loginValue = document.getElementById('login').value;
  let passwordValue = document.getElementById('password').value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.')
  }
}
