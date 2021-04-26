const btnlogin = document.getElementById('btnlogin');
const login = document.getElementById('login');
const password = document.getElementById('password');
const textarea = document.getElementById('textarea');
const countChar = document.getElementById('counter');
const checkboxAgree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function authentication() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

textarea.addEventListener('input', () => {
  const maxLength = textarea.getAttribute('maxlength');
  const currentLength = textarea.value.length;
  const count = parseInt(maxLength, 10) - parseInt(currentLength, 10);
  countChar.innerHTML = `${count}`;
});

checkboxAgree.onchange = function enableSubmitBtn() {
  submitBtn.disabled = !this.checked;
};

btnlogin.addEventListener('click', authentication);
submitBtn.disabled = true;
