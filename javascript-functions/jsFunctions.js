// function sayHello() {
//   var greeting = 'Hello, World!';
//   console.log(greeting);
// }

function sayHello(nickname) {
  var greeting = 'Hello, ' + nickname + '!';
  console.log(greeting);
}

sayHello('friend');

// function getFullName(firstName, lastName){
//   var fullName = firstName + ' ' + lastName;
//   return fullName;
// }

var vk = getFullName('Victor', 'Kalinkin');
console.log(vk);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;

  // var greeting = 'Hello, ' + fullName + '!';
  // return greeting;
}
