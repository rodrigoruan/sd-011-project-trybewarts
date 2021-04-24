const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const buttonEntrar = document.getElementById('enviar');

buttonEntrar.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// 18
const checkEnable = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
checkEnable.addEventListener('click', () => {
  if (checkEnable.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// 19
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

textArea.addEventListener('input', () => {
  const limite = 500;
  const text = textArea.value;
  const caracteresDigitados = text.length;
  const caracteresRestantes = limite - caracteresDigitados;
  contador.innerText = caracteresRestantes.toString();
});

// 21 nome,sobrenome
const buttonEnviar = document.getElementById('submit-btn');
const textNome = document.createElement('p');
const textEmail = document.createElement('p');
const textHouse = document.createElement('p');
const textFamilia = document.createElement('p');
const textMateriasEscolhidas = document.createElement('p');
const textRate = document.createElement('p');
const textObservacao = document.createElement('p');
const materiasEscolhidas = [];
buttonEnviar.addEventListener('click', () => {
  const m = document.getElementById('principal'); const n = document.getElementById('input-name');
  const form = document.getElementById('evaluation-form');
  const sobrenome = document.getElementById('input-lastname');
  const e = document.getElementById('input-email'); const house = document.getElementById('house');
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materias = document.querySelectorAll('input[class="subject"]:checked');
  for (let i = 0; i < materias.length; i += 1) { materiasEscolhidas.push(materias[i].value); }
  const nota = document.querySelector('input[name="rate"]:checked').value;
  const observacao = document.getElementById('textarea');
  textNome.innerText = `Nome: ${n.value} ${sobrenome.value}`;
  textEmail.innerText = `Email: ${e.value}`; textHouse.innerText = `Casa: ${house.value}`;
  textFamilia.innerText = `Família: ${familia}`; textRate.innerText = `Avaliação: ${nota}`;
  textMateriasEscolhidas.innerText = `Matérias: ${materiasEscolhidas}`;
  textObservacao.innerText = `Observações: ${observacao.value}`;
  form.remove(); m.appendChild(textNome); m.appendChild(textEmail);
  m.appendChild(textHouse); m.appendChild(textFamilia);
  m.appendChild(textMateriasEscolhidas); m.appendChild(textRate);
  m.appendChild(textObservacao);
});
