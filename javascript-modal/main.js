var openBut = document.querySelector('.button-open-modal');
var closeBut = document.querySelector('.button-close');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');
// var contain = document.querySelector('.container');

var modalOpened = false;
function openModal(event) {
  if (modalOpened === false) {
    // modal.className = ('modal opened dark');
    modalContent.className = ('modal-content opened');
    modal.className = ('modal dark');
    // contain.className = ('container dark')
    modalOpened = true;
  }
}

function closeModal(event) {
  if (modalOpened === true) {
    // modal.className = ('modal closed');
    // contain.className = ('container')
    modal.className = ('modal light');
    modalContent.className = ('modal-content closed');
    modalOpened = false;
  }
}

// function handleClick(event) {
//   console.log('button clicked');
//   console.log(event);
//   console.log(event.target);
// }

openBut.addEventListener('click', openModal, false);
closeBut.addEventListener('click', closeModal, false);
