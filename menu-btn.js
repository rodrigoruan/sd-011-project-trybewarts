const menuBtn = document.querySelector('.menu-btn');
const loginDiv = document.querySelector('#login-div');

let modalStatus = false;

function openModal() {
  if (!modalStatus) {
    loginDiv.style.display = 'flex';
    loginDiv.style.flexDirection = 'column';
    // loginDiv.style.position = 'absolute';
    // loginDiv.style.top = '60px';
    modalStatus = true;
  } else {
    loginDiv.style.display = 'none';
    modalStatus = false;
  }
}

menuBtn.addEventListener('click', openModal);