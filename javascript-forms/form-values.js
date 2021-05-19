var currentForm = document.querySelector('#contact-form');
var formObj = {};

// var name = document.querySelector('#contact-form').elements.name.values;
// console.log(name);

// event.preventDefault();
function stopDefault(event) {
  event.preventDefault();
  // var formElements = document.querySelector('#contact-form').elements;
  // console.log(formElements);
  // console.log(document.querySelector('#contact-form').elements.name.value);
  formObj.name = currentForm.elements.name.value;
  formObj.email = currentForm.elements.email.value;
  formObj.message = currentForm.elements['user-message'].value;
  currentForm.reset();
  console.log(formObj);
}

currentForm.addEventListener('submit', stopDefault, false);
