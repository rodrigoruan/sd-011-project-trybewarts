const loginUser = document.querySelector('.login');
const passUser = document.querySelector('.senha');
const loginBtn = document.querySelector('.acesso');

loginBtn.addEventListener('click', () => {
  const loginVal = loginUser.value;
  const senhaVal = passUser.value;

  if (loginVal.value !== 'tryber@betrybe.com' || senhaVal.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else if (loginVal.value === 'tryber@betrybe.com' && senhaVal.value === '123456') {
    alert('');
  }
});

const title = document.getElementById('trybewarts-header-title');
title.innerText = 'Trybewarts';
