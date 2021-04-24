const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

agreement.addEventListener('change', checkboxChecked);

function checkboxChecked() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  //   submitBtn.disabled = !agreement.checked;
}
