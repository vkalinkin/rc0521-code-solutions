function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsOutput = convertMinutesToSeconds(10);
console.log('Result of convertMinutesToSeconds(10):', convertMinutesToSecondsOutput);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetingOutput = greet('Bill');
console.log('Result of greet("Bill"):', greetingOutput);

function getArea(width, height) {
  var rectangle = width * height;
  return rectangle;
}

var getAreaOutput = getArea(12, 7);
console.log('Reulst of getArea(12, 7):', getAreaOutput);

function getFirstName(person) {
  var first = person.firstName;
  return first;
}

var getFirstNameOutput = getFirstName({ firstName: 'Amuro', lastName: 'Ray' });
console.log('Result of getFirstName({firstName: "Amuro", lastName: "Ray"}:', getFirstNameOutput);

function getLastElement(array) {
  var last = array[((array.length) - 1)];
  return last;
}

var getLastElementOutput = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Result of getLastElement(["propane","and","propane","accessories"]:', getLastElementOutput);
// function sayHello() {
//   var greeting = 'Hello, World!';
//   console.log(greeting);
// }

// function sayHello(nickname) {
//   var greeting = 'Hello, ' + nickname + '!';
//   console.log(greeting);
// }

// sayHello('friend');

// function getFullName(firstName, lastName){
//   var fullName = firstName + ' ' + lastName;
//   return fullName;
// }

// var vk = getFullName('Victor', 'Kalinkin');
// console.log(vk);

// function getFullName(firstName, lastName) {
//   var fullName = firstName + ' ' + lastName;
//   return fullName;

//   // var greeting = 'Hello, ' + fullName + '!';
//   // return greeting;
// }
