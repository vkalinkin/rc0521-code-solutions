/* exported getPropertyValue */
function getPropertyValue(object, key) {
  var valueGet = object[key];
  return valueGet;
}

// var luke = {
//   // firstName: 'Luke',
//   // lastName: 'Skywalker',
//   name: 'Luke Skywalker',
//   occupation: 'Jedi',
//   birthPlace: 'Tatooine'
// }

// var objectKey = getPropertyValue(luke, 'occupation');
// console.log('objectKey:', objectKey);
