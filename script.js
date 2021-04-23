const btnLogin = document.querySelector('#logar');

btnLogin.addEventListener('click', () => {
  const loginInput = document.querySelector('#loginInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;

  if (loginInput === 'tryber@teste.com' && passwordInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const actBtn = document.getElementById('submit-btn');
const checkCheck = document.querySelector('#agreement');

function checkBtn(){

 


  if(checkCheck.checked){
    actBtn.classList.remove('inactive');
    actBtn.disabled = false
  } else {
    actBtn.classList.add('inactive');
    actBtn.disabled = true
  }
}

checkCheck.addEventListener('change', checkBtn);
