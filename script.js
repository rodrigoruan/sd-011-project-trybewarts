const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  if (loginValue !== 'tryber@teste.com' && passwordValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const submitButton = document.getElementById('submit-btn');
submitButton.disabled = true;

submitButton.addEventListener('click', () => {
  const checkBox = document.getElementById('agreement');
  const checkBoxValue = checkBox.checked;  
  
  console.log(checkBoxValue);
  alert("oi");
})