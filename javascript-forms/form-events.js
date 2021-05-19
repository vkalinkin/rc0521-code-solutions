function handleFocus(event) {
  // console.log('focus fired, focus():', focus());
  console.log('focus fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var nameInput = document.querySelector('#user-name');
var emailInput = document.querySelector('#user-email');
var messageInput = document.querySelector('#user-message');

nameInput.addEventListener('focus', handleFocus, false);
nameInput.addEventListener('blur', handleBlur, false);
nameInput.addEventListener('input', handleInput, false);

emailInput.addEventListener('focus', handleFocus, false);
emailInput.addEventListener('blur', handleBlur, false);
emailInput.addEventListener('input', handleInput, false);

messageInput.addEventListener('focus', handleFocus, false);
messageInput.addEventListener('blur', handleBlur, false);
messageInput.addEventListener('input', handleInput, false);
