const btnLogin = document.querySelector('#submitLogin');
const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const mainForm = document.querySelector('#evaluation-form');
const fieldsetInformations = document.querySelector('#field-set');

btnLogin.addEventListener('click', (event) => {
  const eventPath = event.path;
  const email = eventPath[1][0].value;
  const password = eventPath[1][1].value;
  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});

btnSubmit.addEventListener('click', (event) => {
  const fields = {
    1: 'Nome',
    2: 'Sobrenome',
    3: 'Email',
    4: 'Casa',
    5: 'Família',
    6: 'Matérias',
    7: 'Avaliação',
    8: 'Observações'
  }

  fieldsetInformations.style.display = 'none';
  event.preventDefault();

  const target = event.path[2];
  for (let index = 1; index < event.path[2].children.length; index += 1) {
    const pText = document.createElement('p');
    mainForm.appendChild(pText);

    if (target.children[index].name === 'nome') {
      pText.innerText = `${fields[index]}: ${target.children[index].value} ${target.children[index + 1].value} `;
      index += 1;
    }

    if (target.children[index].name === 'email') {
      pText.innerText = `Email: ${target.children[index].value}`
    }

    if (target.children[index].name === 'casa') {
      pText.innerText = `Casa: ${target.children[index].value}`
    }

    if (target.children[index].dataset.name === 'family') {
      let rangeField = target.children[index].children;
      for (let family of rangeField) {
        if (family.checked) pText.innerText = `${fields[5]}: ${family.value}`;
      }
    }

    if (target.children[index].dataset.name === 'tech') {
      let rangeField = target.children[index].children;
      let techs = [];
      pText.innerText = `${fields[6]}: `
      for (let tech of rangeField) {
        if (tech.checked) techs.push(tech.value);
      }
      pText.innerText += ` ${techs.join(', ')}`;
    }

    if (target.children[index].id == 'rateValue') {
      let rangeField = target.children[index].children;
      pText.innerText = `${fields[7]}: `
      for (let rate of rangeField) {
        if (rate.checked) pText.innerText += ` ${rate.value}`;
      }
    }

    if (target.children[index].id === 'feedbackArea') {
      pText.innerText = `${fields[8]}: ${target.children[index].children[1].value}`
    }
  }
  mainForm.style.display = 'block';
});
