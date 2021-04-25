// requisito 3

// requisito 18
const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function changeBtnStatus(event) {
  if (event.target.checked === true) {
    return (submitBtn.removeAttribute('disabled'));
  }
  return (submitBtn.setAttribute('disabled', true));
}

checkbox.addEventListener('change', changeBtnStatus);

// requisito 20
// id='textarea'

// requisito 21
