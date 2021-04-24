function login() {
  const usuario = document.getElementsByName('Login')[0].value;
  const senha = document.getElementsByName('Senha')[0].value;
  console.log(usuario);
  if (usuario === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const buttonLogin = document.querySelector('.btn-login');
buttonLogin.addEventListener('click', login);

const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const comment = document.getElementById('textarea');

function caracteres() {
  const count = document.getElementById('counter');
  const commentLength = comment.value.length;
  count.innerText = 500 - commentLength;
}

comment.addEventListener('keyup', caracteres);

function bunitinha() {
  const content = document.getElementsByClassName('subject');
  const gordinha = [];

  for (let index = 0; index < content.length; index += 1) {
    gordinha.push(`${content[index].value}`); 
  }
  return gordinha;
}




function replaceForm(event) {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked');  
  const rate = document.querySelector('input[name="rate"]:checked');
  const form = document.getElementById('evaluation-form');

  const objetoLegal = {
    Nome: `${name.value} ${lastName.value}`,
    Email: `${email.value}`,
    Casa: `${house.value}`,
    Família: `${family.value}`,
    Matérias: bunitinha(),
    Avaliação: `${rate.value}`,
    Observações: `${comment.value}`
  }

  for (let index = 0; index < Object.keys(objetoLegal).length; index+=1) {
    
    
    event.preventDefault();
   

    // form.innerHTML = '';
    
    // const divForm = document.createElement('p');
    // divForm.innerText += `${Object.keys(objetoLegal)[index]} ${Object.values(objetoLegal)[index]}`
    // form.appendChild(divForm);
  }

  console.log(objetoLegal);
}

submitButton.addEventListener('click', replaceForm);
