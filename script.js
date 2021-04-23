console.log('VQV');

const submitLoginBtn = document.getElementById('header-submit');

function verifiedValues() {
  const loginValue = document.getElementById('login').value;
  const passwordValue = document.getElementById('password').value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitLoginBtn.addEventListener('click', verifiedValues);
